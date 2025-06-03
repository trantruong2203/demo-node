const Dongxe = require('../models/dongxeModel');

exports.getAllDongxe = () => {
  return new Promise((resolve, reject) => {
    Dongxe.getAll((err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};


