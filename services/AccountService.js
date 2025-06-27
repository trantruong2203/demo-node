const Account = require('../models/AccountModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET = "000765776474" ;

exports.getAllAccounts = () => {
    return new Promise ((reslove, reject) => {
        Account.getAll((err, results) => {
            if (err) return reject(err);
            reslove(results);
        })
    })
};

exports.login = (username, password) => {
  return new Promise((resolve, reject) => {
    Account.getById(username, async (err, results) => {
      if (err) return reject({ status: 500, message: 'Lỗi truy vấn' });
      if (results.length === 0) return reject({ status: 401, message: 'username không tồn tại' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) return reject({ status: 401, message: 'Sai mật khẩu' });

      const token = jwt.sign({ username: user.username }, SECRET, { expiresIn: '1h' });
      resolve({ message: 'Đăng nhập thành công', token });
    });
  });
};

exports.createAccount = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return new Promise((resolve, reject) => {
    Account.create({ username, password: hashedPassword }, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return reject({ status: 400, message: 'username đã tồn tại' });
        }
        return reject({ status: 500, message: 'Lỗi server khi tạo tài khoản' });
      }
      resolve({ message: 'Đăng ký thành công', id: result.insertId });
    });
  });
};
