const videoDirectory = process.env.VIDEODIR
const fs = require("fs");

const checkVideoAvailability = (req,res,next) => {
    const name = req.params.name;
    const videoPath = videoDirectory + name;
    fs.access(videoPath, fs.constants.F_OK, (err) => {
        if (err) {
          res.status(404).send('Error - Video file not found!');
          console.error("Error in fetching file ", err);
        }
        else next();
    })
}

const checkSetRange = (req,res,next) =>{
    const range = req.headers.range;
    if(!range){
        res.status(400).send("Requires Range header");
        console.error(new Error("Range not set in request header"));
        return;
    }
    next();
}

module.exports = {checkVideoAvailability, checkSetRange}