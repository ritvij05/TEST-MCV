const mysql = require('mysql');
require('dotenv').config();


// Database connection
var pool  = mysql.createPool({
  connectionLimit : 10,
  queueLimit: 100,
  host: process.env.HOST,
  port:3306,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,
  connectTimeout : 10000,
  waitForConnections: true,
  acquireTimeout: 10000,
  debug : false
});

pool.on('connection', function (connection) {
  console.log('MySQL DB Connection established');
});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});

pool.on('enqueue', function () {
  console.log('Waiting for available connection slot...');
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = pool;