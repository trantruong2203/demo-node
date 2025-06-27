const nhaCungCapService = require('../services/nhaCungCapService');

exports.getAllNhaCungCap = async (req, res, next) => {
    try {
        const data = await nhaCungCapService.getAllNhaCungCap();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.getWithPagination = async (req, res, next) => {
    const { page = 1, limit = 5, searchNhaCungCap = "" } = req.query;
    try {
        const data = await nhaCungCapService.pagitateNhaCungCap(page, limit, searchNhaCungCap);
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.searchNhaCungCap = async (req, res, next) => {
    const { tennhacungcap } = req.query;
    try {
        const data = await nhaCungCapService.search(tennhacungcap);
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.getByIdNhaCungCap = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await nhaCungCapService.getById(id);
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.createNhaCungCap = async (req, res, next) => {
    try {
        const { manhacc, tennhacc, diachi, sodt, masothe } = req.body;
        const data = await nhaCungCapService.createNhaCungCap(manhacc, tennhacc, diachi, sodt, masothe);
        res.status(201).json(data);
    } catch (err) {
        next(err);
    }
};

exports.updateNhaCungCap = async (req, res, next) => {
    const { id } = req.params;
    const { manhacc, tennhacc, diachi, sodt, masothe } = req.body;
    try {
      const data = await nhaCungCapService.updateNhaCungCap(id, manhacc, tennhacc, diachi, sodt, masothe);
      res.json(data);
    } catch (err) {
      next(err);
    }
  };

exports.deleteNhaCungCap = async (req, res, next) => {
    try {
        const { id } = req.params;
        await nhaCungCapService.delete(id);
        res.status(204).send();
    } catch (err) {
        next(err);
    }
};