const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Chantroimoi123',
  database: 'demo2'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Kết nối database thành công!');
});

module.exports = connection;