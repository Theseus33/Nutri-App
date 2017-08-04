const express = require('express');
const foodRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const foodHelper = require('../services/food/food-helper');
const foodController = require('../controllers/food-controller');

foodRouter.get('/', authHelpers.loginRequired, foodController.index);
foodRouter.post('/', authHelpers.loginRequired, foodHelper.getFood, foodController.create);
foodRouter.get('/food-search', authHelpers.loginRequired, (req, res) => {
  res.render('food/food-search', {
    currentPage: 'searchFood',
  });
});

module.exports = foodRouter;
