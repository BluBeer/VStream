const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors');


const port = process.env.PORT || 5012;
const ipadd = process.env.IPaddr || "localhost";
const videoDirectory = process.env.VIDEODIR

app.use(require('express-status-monitor')());
app.use(cors());

app.use("/", require("./routes/index"));


app.listen(port, ipadd ,() => {
    console.log(`Listening to requests on http://${ipadd}:${port}`);
});