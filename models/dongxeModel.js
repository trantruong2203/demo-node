const db = require('../config/db');

const Dongxe = {
   
    getAll: (callback) => {
        db.query('SELECT * FROM dongxe', callback);
    },
}

module.exports = Dongxe;
   

        