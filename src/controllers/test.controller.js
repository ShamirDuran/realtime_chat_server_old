const testService = require('../services/test.service');

const get = async (req, res, next) => {
  try {
    res.json(await testService.getMultiple(req.query.page));
    // res.json(await testService.getMultiple(req.body.page));
    // res.json(await testService.getMultiple(req.params.page));
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    res.status(201).json(await testService.create(req.body));
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    res.json(await testService.update(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    res.json(await testService.remove(req.params.id));
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
};
