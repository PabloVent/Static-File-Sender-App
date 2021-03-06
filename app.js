var express = require("express");
var fs = require("fs");
var morgan = require("morgan");
var path = require("path");

var app = express();
app.use(morgan("short"));
// app.use(function(req, res, next){
//     console.log("Request IP: " + req.url);
//     console.log("Request date: " + new Date());
//     next();
// });
//app.use(function(req, res, next){
app.use(express.static('static'));
path.join(__dirname, "static");
//     fs.stat(filePath, function(err, fileInfo){
//         if(err){
//             next();
//             return;
//         } else{
//             next();
//         }
//         if(fileInfo.isFile()){
//             res.sendFile(filePath);
//         } else {
//             next();
//         }
//     });
// });

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});

app.use(function (err, req, res, next) {
    console.error(err);
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(500);
    res.send("Internal server error.");
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});