const mucphiService = require('../services/mucphiService');

exports.getAll = async (req, res, next) => {
  try {
    const data = await mucphiService.getAllMucPhi();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await mucphiService.getByIdMucPhi(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  const { mamp, dongia, mota } = req.body;
  try {
    const data = await mucphiService.createMucPhi(mamp, dongia, mota);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  const { id } = req.params;
  const { mamp, dongia, mota } = req.body;
  try {
    const data = await mucphiService.updateMucPhi(id, mamp, dongia, mota);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await mucphiService.deleteMucPhi(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.search = async (req, res, next) => {
  const { mamp } = req.query;
  try {
    const data = await mucphiService.searchMucPhi(mamp);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getWithPagination = async (req, res, next) => {
  const { page = 1, limit = 3, searchMamp = "" } = req.query;
  try {
    const data = await mucphiService.getMucPhiWithPagination(page, limit, searchMamp);
    res.json(data);
  } catch (err) {
    next(err);
  }
};