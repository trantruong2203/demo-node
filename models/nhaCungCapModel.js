const db = require('../config/db');

const NhaCungCap = {

    getAll: (callback) => {
        db.query('SELECT * FROM nhacungcap', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM nhacungcap WHERE manhacc = ?', [id], callback);
    },

    create: (manhacc, tennhacc, diachi, sodt, masothe, callback) => {
        db.query('insert into nhacungcap (manhacc, tennhacc, diachi, sodt, masothe) values (?, ?, ?, ?, ?)', 
            [manhacc, tennhacc, diachi, sodt, masothe], callback);
    },

    update: (id, manhacc, tennhacc, diachi, sodt, masothe, callback) => {
        db.query('UPDATE nhacungcap SET manhacc = ?, tennhacc = ?, diachi = ?, sodt = ?, masothe = ? WHERE manhacc = ?', 
           [manhacc, tennhacc, diachi, sodt, masothe, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM nhacungcap WHERE manhacc = ?', [id], callback);
    },

    search: (tennhacc, callback) => {
        const search = `%${tennhacc}%`;
        db.query('SELECT * FROM nhacungcap WHERE tennhacc LIKE ?', [search], callback)
    },

    pagitation: (page, limit, search, callback) => {
        const offset = (page - 1) * limit;
        const searchTennhacc = `%${search}%`;
        db.query('SELECT COUNT(*) as total FROM nhacungcap WHERE tennhacc LIKE ?', [searchTennhacc], (err, countResult) => {
            if (err) return callback(err);
            const total = countResult[0].total;
            const totalPage = Math.ceil(total / limit);
            
            db.query('SELECT * FROM nhacungcap WHERE tennhacc LIKE ? LIMIT ? OFFSET ?', 
                [searchTennhacc, parseInt(limit), parseInt(offset)], 
                (err, results) => {
                    if (err) return callback(err);
                    callback(null, {
                        data: results,
                        currentPage: parseInt(page),
                        totalPages: totalPage,
                        pageSize: parseInt(limit),
                        totalItems: results.length,
                        count: total
                    });
                }
            );
        });
    }
};

module.exports = NhaCungCap;