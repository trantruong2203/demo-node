const Dkcc = require('../models/DkccModel');

exports.getAllDkcc = () => {
  return new Promise((resolve, reject) => {
    Dkcc.getAll((err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getByIdDkcc = (id) => {
  return new Promise((resolve, reject) => {
    Dkcc.getById(id, (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error('Không tìm thấy dkcc'));
      resolve(results[0]);
    });
  });
};

exports.createDkcc = (madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky) => {
  return new Promise((resolve, reject) => {
    Dkcc.create(madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky, (err, results) => {
      if (err) return reject(err);
      resolve({
        message: 'Tạo dkcc thành công',
        data: { madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky }
      });
    });
  });
};

exports.updateDkcc = (id, madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky) => {
  return new Promise((resolve, reject) => {
    Dkcc.update(id, madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dkcc để cập nhật'));
      resolve({
            message: 'Cập nhật dkcc thành công',
        data: { madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky }
      });
    });
  });
};

exports.deleteDkcc = (id) => {
  return new Promise((resolve, reject) => {
    Dkcc.delete(id, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dkcc để xóa'));
      resolve({
        message: 'Xóa dkcc thành công'
      });
    });
  });
};

exports.searchDkcc = (madkcc) => {
  return new Promise((resolve, reject) => {
    Dkcc.search(madkcc, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getDkccWithPagination = (page, limit, searchDkcc) => {
  return new Promise((resolve, reject) => {
    Dkcc.pagination(page, limit, searchDkcc, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};