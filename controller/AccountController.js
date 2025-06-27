const AccountService = require('../services/AccountService');

exports.getAll = async (req, res, next) => {
    try {
        const data = await AccountService.getAllAccounts();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    const {username} = req.params;
    try {
        const data = await AccountService.getById(username);
        if (data.length === 0) {
            return res.status(404).json({message: 'Tài khoản không tồn tại'});
        }
        res.json(data[0]);
    } catch (err) {
        next(err);
    }
}

exports.login = async (req, res, next) => {
     const {username, password} = req.body;
    try {
        const data = await AccountService.login(username, password);
        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    const {username, password} = req.body;
    try {
        const data = await AccountService.createAccount(username, password);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
};