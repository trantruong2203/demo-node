const db = require('../config/db');


function getAllDongXe(req, res) {
        db.query('SELECT * FROM dongxe', (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
          });
}

function getByIddongxe(req, res)  {
    const { id } = req.params;
    db.query('select * from dongxe where dongxe = ?' , [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe' });
        res.json(results[0]);
    })
};

function createDongxe(req, res) {
    const {dongxe,hangxe,sochongoi} = req.body;
    db.query('insert into dongxe (dongxe, hangxe, sochongoi) values (?, ?, ?)', [dongxe, hangxe, sochongoi], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ message: 'Hãng xe đã được tạo thành công', id: results.dongxe });
    });
};


function updateDongxe(req,res) {
    const {id} = req.params;
    const { hangxe, sochongoi} = req.body;
    db.query('update dongxe set hangxe = ?, sochongoi = ? where dongxe = ?', [hangxe, sochongoi, id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe để cập nhật' });
        res.json({ message: 'Hãng xe đã được cập nhật thành công' });
    });

};

function deleteDongxe(req,res) {
    const {id} = req.params;
    db.query('delete from dongxe where dongxe = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe để xóa' });
        res.json({ message: 'Hãng xe đã được xóa thành công' });
    })

};

function searchDongxe(req,res) {
    const {searchDongxe} = req.query;
    const search = `%${searchDongxe}%`;
    db.query(' select * from dongxe where dongxe like ? ', [search], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy hãng xe' });
        res.json(results);
    })
};

function getDongxeWithPagination(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    db.query('SELECT * FROM dongxe LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};



module.exports = {
    getAllDongXe,
    getByIddongxe,
    createDongxe,
    updateDongxe,
    deleteDongxe,
    searchDongxe,
    getDongxeWithPagination
};