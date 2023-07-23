const { findStartAndEnd, getViewCountService } = require("../services/videoService");
const fs = require("fs");
const videoDirectory = process.env.VIDEODIR;

const pingService = (req,res) =>{
    res.status(200).send(`You are connected with VStream streaming service`);
}

const streamVideo = (req,res) =>{
    const range = (req.headers.range).split('-')[0];
    const name = req.params.name;
    const {start, end, videoSize, videoPath} = findStartAndEnd(range, name);
    const contentLength = end - start + 1;
    const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
        
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.on('error', (err) => {
        console.error(`Error reading from file: ${err}`);
    });

    videoStream.on('end', () => {
        console.log(name + ' File is streaming successfully in chunks');
    });
    videoStream.pipe(res); 
}

const downloadVideo = (req,res) =>{
    let name = req.params.name;
    const videoFilePath = videoDirectory + name;
  
    res.setHeader('Content-Type', 'video/mp4'); 
    res.setHeader('Content-Disposition', 'attachment; filename=video.mp4'); 
    res.setHeader('Transfer-Encoding', 'chunked');
  
    const videoStream = fs.createReadStream(videoFilePath);
    videoStream.pipe(res);
  
    videoStream.on('error', (err) => {
        console.error('Error reading the video file:', err);
        res.status(500).send('Internal Server Error');
    });
  
    videoStream.on('end', () => {
        console.log(name + ' Video download completed successfully.');
    });
}

const getViewCount = (req,res)=> {
    let name = (req.params.name).toLowerCase();
    const data = getViewCountService(name);
    res.status(200).send(data);
}

const getVideoLink = (req,res) =>{
    const name = req.params.name;
    const data = {
        url : "/video/" + name
    }
    //console.log(data);
    res.status(200).send(data);
}



module.exports = {pingService, streamVideo, downloadVideo, getViewCount, getVideoLink};