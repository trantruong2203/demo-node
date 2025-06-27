const db = require('../config/db');

const Dongxe = {
   
    getAll: (callback) => {
        db.query('SELECT * FROM dongxe', callback);
    },

    getById: (id, callback) => {
        db.query('select * from dongxe where hangxe = ?', [id] , callback)
    },

    create: (dongxe, hangxe, sochongoi, callback) => {
        db.query('insert into dongxe (dongxe, hangxe, sochongoi) values (?, ?, ?)', [dongxe, hangxe, sochongoi], callback)
    },

    update: (id, dongxe, hangxe, sochongoi, callback) => {
        db.query('update dongxe set dongxe = ?, hangxe = ?, sochongoi = ? where dongxe = ?', 
        [dongxe, hangxe, sochongoi, id], callback);
    },

    delete: (id, callback) => {
        db.query('delete from dongxe where dongxe = ?', [id], callback);
    },

    search: (dongxe, callback) => {
        const search = `%${dongxe}%`;
        db.query('select * from dongxe where dongxe like ?', [search], callback);
    },

    pagination:(page, limit, search, callback) => {
        const offset = (page - 1) * limit;
        const searchDongxe = `%${search}%`;
        
        db.query('SELECT COUNT(*) as total FROM dongxe where dongxe like ?', [searchDongxe], (err, countResult) => {
            if (err) return callback(err);
            const total = countResult[0].total;
            const totalPage = Math.ceil(total / limit);
            
            db.query('SELECT * FROM dongxe where dongxe like ? LIMIT ? OFFSET ?', 
                [searchDongxe, parseInt(limit), parseInt(offset)], 
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


module.exports = Dongxe;
   

        