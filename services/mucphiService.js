const MucPhi = require('../models/mucPhiModel');

exports.getAllMucPhi = () => {
  return new Promise((resolve, reject) => {
    MucPhi.getAll((err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getByIdMucPhi = (id) => {
  return new Promise((resolve, reject) => {
    MucPhi.getById(id, (err, results) => {
      if (err) return reject(err);
      if (results.length === 0) return reject(new Error('Không tìm thấy mức phí'));
      resolve(results[0]);
    });
  });
};

exports.createMucPhi = (mamp, dongia, mota) => {
  return new Promise((resolve, reject) => {
    MucPhi.create(mamp, dongia, mota, (err, results) => {
      if (err) return reject(err);
      resolve({
        message: 'Tạo mức phí thành công',
        data: { mamp, dongia, mota }
      });
    });
  });
};

exports.updateMucPhi = (id, mamp, dongia, mota) => {
  return new Promise((resolve, reject) => {
    MucPhi.update(id, mamp, dongia, mota, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để cập nhật'));
      resolve({
        message: 'Cập nhật mức phí thành công',
        data: { mamp, dongia, mota }
      });
    });
  });
};

exports.deleteMucPhi = (id) => {
  return new Promise((resolve, reject) => {
    MucPhi.delete(id, (err, results) => {
      if (err) return reject(err);
      if (results.affectedRows === 0) return reject(new Error('Không tìm thấy dòng xe để xóa'));
      resolve({
        message: 'Xóa mức phí thành công'
      });
    });
  });
};

exports.searchMucPhi = (mamp) => {
  return new Promise((resolve, reject) => {
    MucPhi.search(mamp, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getMucPhiWithPagination = (page, limit, searchMucPhi) => {
  console.log('Calling getMucPhiWithPagination with:', { page, limit, searchMucPhi });
  console.log('MucPhi object:', MucPhi);
  return new Promise((resolve, reject) => {
    MucPhi.pagination(page, limit, searchMucPhi, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};