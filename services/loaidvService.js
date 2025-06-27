const LoaiDV = require('../models/loaidvModel');

exports.getAllLoaiDV = () => {
  return new Promise((resolve, reject) => {
    LoaiDV.getAll((err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getByIdLoaiDV = (id) => {
  return new Promise((resolve, reject) => {
    LoaiDV.getById(id, (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error('Không tìm thấy mức phí'));
      resolve(results[0]);
    });
  });
};

exports.createLoaiDV = (maloaidv, tenloaidv) => {
  return new Promise((resolve, reject) => {
    LoaiDV.create(maloaidv, tenloaidv, (err, results) => {
      if (err) return reject(err);
      resolve({
        message: 'Tạo loại dịch vụ thành công',
        data: { maloaidv, tenloaidv }
      });
    });
  });
};

exports.updateLoaiDV = (id, maloaidv, tenloaidv) => {
  return new Promise((resolve, reject) => {
    LoaiDV.update(id, maloaidv, tenloaidv, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để cập nhật'));
      resolve({
        message: 'Cập nhật loại dịch vụ thành công',
        data: { maloaidv, tenloaidv }
      });
    });
  });
};

exports.deleteLoaiDV = (id) => {
  return new Promise((resolve, reject) => {
    LoaiDV.delete(id, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để xóa'));
      resolve({
        message: 'Xóa loại dịch vụ thành công'
      });
    });
  });
};

exports.searchLoaiDV = (maloaidv) => {
  return new Promise((resolve, reject) => {
    LoaiDV.search(maloaidv, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getLoaiDVWithPagination = (page, limit, searchMaloaidv) => {
  console.log('Calling getLoaiDVWithPagination with:', { page, limit, searchMaloaidv });
  return new Promise((resolve, reject) => {
    LoaiDV.pagination(page, limit, searchMaloaidv, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};