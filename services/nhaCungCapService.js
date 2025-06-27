const NhaCungCap = require('../models/nhaCungCapModel');

exports.getAllNhaCungCap = () => {
    return new Promise((resolve, reject) => {
        NhaCungCap.getAll((err, results) => {
            if (err) return reject(err);
            resolve(results);
        })
    })
};

exports.pagitateNhaCungCap = (page, limit, searchNhaCungCap) => {
    console.log('Calling getNhaCungCapWithPagination with:', { page, limit, searchNhaCungCap });
    console.log('NhaCungCap object:', NhaCungCap);
    return new Promise((resolve, reject) => {
        NhaCungCap.pagitation(page, limit, searchNhaCungCap, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

exports.search = (tennhacungcap) => {
    return new Promise((resolve, reject) => {
        NhaCungCap.search(tennhacungcap, (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};

exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        NhaCungCap.getById(id, (err, results) => {
            if (err) return reject(err);
            resolve({
                message: 'Tìm nhà cung cấp thành công',
                data: results
            });
        });
    });
};

exports.createNhaCungCap = (manhacc, tennhacc, diachi, sodt, masothe) => {
    return new Promise((resolve, reject) => {
        NhaCungCap.create(manhacc, tennhacc, diachi, sodt, masothe, (err, results) => {
            if (err) return reject(err);
            resolve({
                message: 'Tạo nhà cung cấp thành công',
                data: { manhacc, tennhacc, diachi, sodt, masothe }
            });
        });
    });
};

exports.updateNhaCungCap = (id, manhacc, tennhacc, diachi, sodt, masothe) => {
    return new Promise((resolve, reject) => {
        NhaCungCap.update(id, manhacc, tennhacc, diachi, sodt, masothe, (err, results) => {
            if (err) return reject(err);
            if (results.affectedRows === 0) return reject(new Error('Không tìm thấy nhà cung cấp để cập nhật'));
            resolve({
                message: 'Cập nhật nhà cung cấp thành công',
                data: { manhacc, tennhacc, diachi, sodt, masothe }
            });
        });
    });
};

exports.delete = (id) => {
    return new Promise((resolve, reject) => {
        NhaCungCap.delete(id, (err, results) => {
            if (err) return reject(err);
            resolve({
                message: 'Xóa nhà cung cấp thành công',
                data: { id }
            });
        });
    });
};