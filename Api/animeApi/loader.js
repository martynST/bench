//Dependencies
const express = require("express");
const open = require("open");
const path = require("path");
const app = express();
const port = 3000;
const cors = require('cors');


//Serve all the files in the folder as static assets
app.use(express.static("./"));
app.use(cors());
app.options('*', cors())
app.get('./', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
});


//Start server
app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { open(`http://localhost:${port}`) }
});
