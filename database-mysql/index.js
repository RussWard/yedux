var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllAlbums = function() {

}

module.exports.getAllAlbums = getAllAlbums;
