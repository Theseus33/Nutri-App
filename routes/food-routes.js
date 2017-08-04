const express = require('express');
const foodRouter = express.Router();

const foodHelper = require('../services/food/food-helper');
const foodController = require('../controllers/food-controller');

foodRouter.get('/', foodController.index);
foodRouter.post('/', foodHelper.getFood, foodController.create);
foodRouter.get('/food-search', (req, res) => {
  res.render('food/food-search', {
    currentPage: 'searchFood',
  });
});

module.exports = foodRouter;
