const e = require('express');
const db = require('../config/db');


function getAllDongXe(req, res) {

    db.query('SELECT * FROM dongxe', (err, results) => {
        if (err) {
            console.error('Lỗi truy vấn:', err);
            res.status(500).json({ error: 'Lỗi truy vấn cơ sở dữ liệu' });

            // Trả về danh sách xe
            res.json(results);
        }
    })
}


module.exports = {
    getAllDongXe
};