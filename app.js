const express = require('express');
const dotenv = require("dotenv").config();
const app = express();
const cors = require('cors');
const path = require('path');


const port = process.env.PORT || 5012;
const ipadd = process.env.IPaddr || "localhost";
const videoDirectory = process.env.VIDEODIR

app.use(require('express-status-monitor')());
app.use(cors());

app.use("/", require("./routes/index"));


app.listen(port, ipadd ,() => {
    const indexPath = path.join(__dirname, "/frontend/index.html");
    console.log(`Listening to requests on http://${ipadd}:${port}`);
    console.log(`Open Site - File://${indexPath}`);
});