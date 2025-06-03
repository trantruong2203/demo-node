const db = require('../config/db');
const dongxeService = require('../services/dongxeService');

exports.getAll = async (req, res, next) => {
  try {
    const data = await dongxeService.getAllDongxe();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

// function getAllDongXe(req, res) {
//     db.query('SELECT * FROM dongxe', (err, results) => {
//         if (err) return res.status(500).json({ error: err });
//         res.json(results);
//     });
// }

function getByIddongxe(req, res) {
    const { id } = req.params;
    db.query('select * from dongxe where dongxe = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe' });
        res.json(results[0]);
    })
};

function createDongxe(req, res) {
    const { dongxe, hangxe, sochongoi } = req.body;
    db.query('insert into dongxe (dongxe, hangxe, sochongoi) values (?, ?, ?)', [dongxe, hangxe, sochongoi], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Hãng xe đã được tạo thành công', id: results.dongxe });
    });
};


function updateDongxe(req, res) {
    const { id } = req.params;
    const { hangxe, sochongoi } = req.body;
    db.query('update dongxe set hangxe = ?, sochongoi = ? where dongxe = ?', [hangxe, sochongoi, id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe để cập nhật' });
        res.json({ message: 'Hãng xe đã được cập nhật thành công' });
    });

};

function deleteDongxe(req, res) {
    const { id } = req.params;
    db.query('delete from dongxe where dongxe = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe để xóa' });
        res.json({ message: 'Hãng xe đã được xóa thành công' });
    })

};

function searchDongxe(req, res) {
    const { searchDongxe } = req.query;
    const search = `%${searchDongxe}%`;
    db.query(' select * from dongxe where dongxe like ? ', [search], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe' });
        res.json(results);
    })
};

function getDongxeWithPagination(req, res) {
    const { page = 1, limit = 3 , searchDongxe = "" } = req.query;
    const offset = (page - 1) * limit;
    const search = `%${searchDongxe}%`;

    db.query('SELECT COUNT(*) as total FROM dongxe where dongxe like ? ',[search],  (err, results) => {
        if (err) return res.status(500).json({ error: err }); 
            const total = results[0].total;
            const toltalPage = Math.ceil(total / limit);
        db.query('SELECT * FROM dongxe where dongxe like ? LIMIT ? OFFSET ?', [search, parseInt(limit), parseInt(offset)], (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json({
                data: results,
                currentPage: parseInt(page),
                totalPages: toltalPage,
                pageSize: parseInt(limit),
                totalItems: results.length,
                count: total
            });
        });

    });

};


// module.exports = {
//     // getAllDongXe,
//     getByIddongxe,
//     createDongxe,
//     updateDongxe,
//     deleteDongxe,
//     searchDongxe,
//     getDongxeWithPagination,
    
// };