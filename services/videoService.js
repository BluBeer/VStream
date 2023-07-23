const videoDirectory = process.env.VIDEODIR;
const CHUNK_SIZE = Number(process.env.CHUNK_SIZE);
const fs = require("fs");

const viewCount = new Map();

function checkAndIncreaseViewCount(start, name){
    if(start != 0)
        return 0;
    name = name.toLowerCase();
    let videoCount = viewCount.get(name);
    if(videoCount == undefined)
        videoCount = 0;
    viewCount.set(name, videoCount+1);
    return 1;
    //console.log(viewCount)
}

function findStartAndEnd(range, name){
    const videoPath = videoDirectory + name;
    const videoSize = fs.statSync(videoPath).size;
    const start = Number(range.replace(/\D/g, ""));
    checkAndIncreaseViewCount(start, name);
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    return {start, end, videoSize, videoPath};
}

function getViewCountService(name){
    if(viewCount.get(name) == undefined)
        viewCount.set(name, 0)
    const data = {"views" : viewCount.get(name)};
    return data;
}

module.exports = {checkAndIncreaseViewCount, findStartAndEnd, getViewCountService}