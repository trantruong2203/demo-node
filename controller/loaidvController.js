const loaidvService = require('../services/loaidvService');

exports.getAll = async (req, res, next) => {
  try {
    const data = await loaidvService.getAllLoaiDV();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await loaidvService.getByIdLoaiDV(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const { maloaidv, tenloaidv } = req.body;
  try {
    const data = await loaidvService.createLoaiDV(maloaidv, tenloaidv);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { maloaidv, tenloaidv } = req.body;
  try {
    const data = await loaidvService.updateLoaiDV(id, maloaidv, tenloaidv);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await loaidvService.deleteLoaiDV(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.search = async (req, res, next) => {
  const { maloaidv } = req.query;
  try {
    const data = await loaidvService.searchLoaiDV(maloaidv);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getWithPagination = async (req, res, next) => {
  const { page = 1, limit = 3, searchMaloaidv = "" } = req.query;
  try {
    const data = await loaidvService.getLoaiDVWithPagination(page, limit, searchMaloaidv);
    res.json(data);
  } catch (err) {
    next(err);
  }
};