const express = require('express');
const { pingService, streamVideo, downloadVideo, getViewCount, getVideoLink, downloadVideoV2 } = require('../controller/videoController');
const { checkVideoAvailability, checkSetRange } = require('../middleware');
const router = express.Router();

router.get('/ping', pingService);
router.get('/video/:name',checkSetRange,checkVideoAvailability, streamVideo);
router.get('/download-video/:name', checkVideoAvailability, downloadVideo );
router.get('/getViewCount/:name', getViewCount)
router.get('/getVideoLink/:name', checkVideoAvailability, getVideoLink)


module.exports = router;