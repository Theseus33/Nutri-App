const express = require('express');
const foodRouter = express.Router();

const foodHelper = require('../services/food/food-helper');
const foodController = require('../controllers/food-controller');

foodRouter.get('/', foodHelper.getFood, foodController.index);

module.exports = foodRouter;
