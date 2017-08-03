const foodController = {};

foodController.index = (req, res) =>  {
  res.render('food/food-index', {
    food: res.locals.food,
    });
}

module.exports = foodController;
