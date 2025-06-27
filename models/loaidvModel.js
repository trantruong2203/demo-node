const db = require('../config/db');


const LoaiDV ={

    getAll: (callback) => {
        db.query('select * from loaidichvu' , callback);
    },

    getById: (id, callback) => {
        db.query('select * from loaidichvu where maloaidv = ?', [id], callback);
    },

    create: (maloaidv, tenloaidv, callback) => {
        db.query('insert into loaidichvu (maloaidv, tenloaidv) values (?, ?)', [maloaidv, tenloaidv], callback);
    },

    update: (id, maloaidv, tenloaidv, callback) => {
        db.query('update loaidichvu set maloaidv = ?, tenloaidv = ? where maloaidv = ?', [maloaidv, tenloaidv, id], callback);
    },

    delete: (id, callback) => {
        db.query('delete from loaidichvu where maloaidv = ?', [id], callback);
    },

    search: (maloaidv, callback) => {
        const searchMaloaidv = `%${maloaidv}%`;
        db.query('select * from loaidichvu where maloaidv like ?', [searchMaloaidv], callback);
    },

    pagination: (page, limit, search, callback) => {
        const offset = (page - 1) * limit;
        const searchMaloaidv = `%${search}%`;
        db.query('SELECT COUNT(*) as total FROM loaidichvu WHERE maloaidv LIKE ?', [searchMaloaidv], (err, countResult) => {
            if (err) return callback(err);
            const total = countResult[0].total;
            const totalPage = Math.ceil(total / limit);
            
            db.query('SELECT * FROM loaidichvu WHERE maloaidv LIKE ? LIMIT ? OFFSET ?', 
                [searchMaloaidv, parseInt(limit), parseInt(offset)], 
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
}

module.exports = LoaiDV;