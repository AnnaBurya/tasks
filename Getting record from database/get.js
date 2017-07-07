var http = require('http');
var mongoClient = require("mongodb").MongoClient;
var util = require('util');

var server = new http.Server();
server.listen(3000, '127.0.0.1');

var url = "mongodb://localhost:27017/test";
var str = ''
mongoClient.connect(url, function (err, db) {
    if (err) return console.log(err);
    db.collection("users").findOne(function (err, doc) {
        db.close();
        str = util.format("%j", doc);
    });
});

server.on('request', function (req, res) {
    res.end(str);
});