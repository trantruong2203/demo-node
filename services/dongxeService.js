const Dongxe = require('../models/dongxeModel');

exports.getAllDongxe = () => {
  return new Promise((resolve, reject) => {
    Dongxe.getAll((err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getByIdDongxe = (id) => {
  return new Promise((resolve, reject) => {
    Dongxe.getById(id, (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error('Không tìm thấy dòng xe'));
      resolve(results[0]);
    });
  });
};

exports.createDongxe = (dongxe, hangxe, sochongoi) => {
  return new Promise((resolve, reject) => {
    Dongxe.create(dongxe, hangxe, sochongoi, (err, results) => {
      if (err) return reject(err);
      resolve({
        succses: true,
        data: { dongxe, hangxe, sochongoi }
      });
    });
  });
};

exports.updateDongxe = (id, dongxe, hangxe, sochongoi) => {
  return new Promise((resolve, reject) => {
    Dongxe.update(id, dongxe, hangxe, sochongoi, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để cập nhật'));
      resolve({
        message: 'Cập nhật dòng xe thành công',
        data: { dongxe, hangxe, sochongoi }
      });
    });
  });
};

exports.deleteDongxe = (id) => {
  return new Promise((resolve, reject) => {
    Dongxe.delete(id, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để xóa'));
      resolve({
        message: 'Xóa dòng xe thành công'
      });
    });
  });
};

exports.searchDongxe = (dongxe) => {
  return new Promise((resolve, reject) => {
    Dongxe.search(dongxe, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getDongxeWithPagination = (page, limit, searchDongxe) => {
  return new Promise((resolve, reject) => {
    Dongxe.pagination(page, limit, searchDongxe, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};