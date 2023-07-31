const testService = require("../services/test.service");

const get = async (req, res, next) => {
    try {
        res.json(await testService.getMultiple(req.query.page));
        // res.json(await testService.getMultiple(req.body.page));
        // res.json(await testService.getMultiple(req.params.page));
    } catch (error) {
        console.error("Error while gettinttest", error.message);
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        res.status(201).json(await testService.create(req.body));
    } catch (error) {
        console.error("Error while creating test", error.message);
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        res.json(await testService.update(req.params.id, req.body));
    } catch (error) {
        console.error("Error while updating test", error.message);
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        res.json(await testService.remove(req.params.id));
    } catch (error) {
        console.error("Error while removing test", error.message);
        next(error);
    }
};

module.exports = {
    get,
    create,
    update,
    remove,
};
