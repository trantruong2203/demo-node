const dkccService = require('../services/DkccService');

exports.getAll = async (req, res, next) => {
  try {
    const data = await dkccService.getAllDkcc();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await dkccService.getByIdDkcc(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const { madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky } = req.body;
  try {
    const data = await dkccService.createDkcc(madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky } = req.body;
  try {
    const data = await dkccService.updateDkcc(id, madkcc, manhacc, maloaidv, dongxe, mamp, ngaybatdaucungcap,ngayketthuccungcap, soluongxedangky);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await dkccService.deleteDkcc(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.search = async (req, res, next) => {
  const { madkcc } = req.query;
  try {
    const data = await dkccService.searchDkcc(madkcc);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getWithPagination = async (req, res, next) => {
  const { page = 1, limit = 3, searchDkcc = "" } = req.query;
  try {
    const data = await dkccService.getDkccWithPagination(page, limit, searchDkcc);
    res.json(data);
  } catch (err) {
    next(err);
  }
};