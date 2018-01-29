//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const open = require("open");
const cors = require('cors');
const fs = require('fs');

//Express
const app = express();
const port = process.env.port || 3000;
const router = express.Router();

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//routing
app.use("/", router);
app.use(express.static("./"));

/*
//cors
app.use(cors());
app.options('*', cors())
app.get('./', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
});
*/

/* GET REQUEST - to read file */
router.get("/file/read", (req, res) => {
    fs.readFile('./anime.txt','UTF-8',(err,data) => {
        res.json(data)
    });
})


/* POST REQUEST - to write file */
router.post("/file/write", (req, res) => {

    fs.writeFile('./anime.txt', req.body, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("The file was Saved!");
    })
    res.json("saved")
})


//Start server
app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { open(`http://localhost:${port}`) }
});
