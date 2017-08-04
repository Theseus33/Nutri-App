const Food = require('../models/food');
const foodController = {};

foodController.index = (req, res) => {
  Food.findAll().then(food => {
    res.render('food/food-index', {
      data: food,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

foodController.create = (req, res) => {
  Food.create({
    food: res.locals.food,
    brand: res.locals.brand,
    calories: res.locals.calories,
    fiber: res.locals.fiber,
    carbs: res.locals.carbs,
    fat: res.locals.fat,
  }, req.params.user_id).then(food => {
    res.render('nutri/nutri-index', {
      data: food,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

module.exports = foodController;
