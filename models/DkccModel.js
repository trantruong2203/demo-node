const db = require('../config/db');

const Dkcc = {
   
    getAll: (callback) => {
        db.query('SELECT * FROM dangkycungcap', callback);
    },

    getById: (id, callback) => {
        db.query('select * from dangkycungcap where madkcc = ?', [id] , callback)
    },

    create: (madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky, callback) => {
        db.query('insert into dangkycungcap (madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky) values (?, ?, ?, ?, ?, ?, ?, ?)', [madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky], callback)
    },

    update: (id, madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky, callback) => {
        db.query('update dangkycungcap set madkcc = ?, manhacc = ?, maloaidv = ?, dongxe = ?, mamp = ?, ngaybatdaucungcap = ?,ngayketthuccungcap = ?, soluongxedangky = ? where madkcc = ?', 
        [madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky, id], callback);
    },

    delete: (id, callback) => {
        db.query('delete from dangkycungcap where madkcc = ?', [id], callback);
    },

    search: (madkcc, callback) => {
        const search = `%${madkcc}%`;
        db.query('select * from dangkycungcap where madkcc like ?', [search], callback);
    },

    pagination:(page, limit, search, callback) => {
        const offset = (page - 1) * limit;
        const searchDkcc = `%${search}%`;
        
        db.query('SELECT COUNT(*) as total FROM dangkycungcap where madkcc like ?', [searchDkcc], (err, countResult) => {
            if (err) return callback(err);
            const total = countResult[0].total;
            const totalPage = Math.ceil(total / limit);
            
            db.query('SELECT * FROM dangkycungcap where madkcc like ? LIMIT ? OFFSET ?', 
                [searchDkcc, parseInt(limit), parseInt(offset)], 
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


module.exports = Dkcc;
   

        