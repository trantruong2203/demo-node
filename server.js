// // server.js
// const http = require('http');

// // Tạo server
// const server = http.createServer((req, res) => {
//   // Cấu hình header trả về
//   res.writeHead(200, { 'Content-Type': 'text/plain' });

//   // Kiểm tra đường dẫn
//   if (req.url === '/') {
//     res.end('Trang chủ - Hello từ Node.js');
//   } else if (req.url === '/about') {
//     res.end('Giới thiệu về chúng tôi');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 - Không tìm thấy');
//   }
// });

// // Chạy server tại cổng 3000
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server đang chạy tại http://localhost:${PORT}`);
// });


const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
const dongxeRouter = require('./routers/dongxeRouter');
const port = 3000 ;

app.use('/dongxe', dongxeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

