const db = require('../config/db');


const MucPhi ={

    getAll: (callback) => {
        db.query('select * from mucphi' , callback);
    },

    getById: (id, callback) => {
        db.query('select * from mucphi where mamp = ?', [id], callback);
    },

    create: (mamp, dongia, mota, callback) => {
        db.query('insert into mucphi (mamp, dongia, mota) values (?, ?, ?)', [mamp, dongia, mota], callback);
    },

    update: (id, mamp, dongia, mota, callback) => {
        db.query('update mucphi set mamp = ?, dongia = ?, mota = ? where mamp = ?', [mamp, dongia, mota, id], callback);
    },

    delete: (id, callback) => {
        db.query('delete from mucphi where mamp = ?', [id], callback);
    },

    search: (mamp, callback) => {
        const search = `%${mamp}%`;
        db.query('select * from mucphi where mamp like ?', [search], callback);
    },

    pagination: (page, limit, search, callback) => {
        const offset = (page - 1) * limit;
        const searchMamp = `%${search}%`;
        db.query('SELECT COUNT(*) as total FROM mucphi WHERE mamp LIKE ?', [searchMamp], (err, countResult) => {
            if (err) return callback(err);
            const total = countResult[0].total;
            const totalPage = Math.ceil(total / limit);
            
            db.query('SELECT * FROM mucphi WHERE mamp LIKE ? LIMIT ? OFFSET ?', 
                [searchMamp, parseInt(limit), parseInt(offset)], 
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

module.exports = MucPhi;