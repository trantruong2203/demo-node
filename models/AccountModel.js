const db = require('../config/db');

const Account = {

    getAll: (callback) => {
        db.query( 'select * from nguoidung', callback);

    },

    getById: (id, callback) => {
        db.query('select * from nguoidung where username = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('insert into nguoidung SET  ?',data, callback);
    },

    update: (id, username, password, email, role, callback) => {
        db.query('update nguoidung set username = ?, password = ?, email = ?, role = ? where username = ?', 
            [username, password, email, role, id], callback);
    },

    delete: (id, callback) => {
        db.query( 'delete from nguoidung where usename = ?' , [id], callback);
    },
}

exports = module.exports = Account;