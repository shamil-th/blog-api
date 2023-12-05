const express = require('express');
const route = express.Router();
const controller = require('../controller/controller');


route.post("/blogs",controller.create);
route.get("/blogs",controller.find);

module.exports = route