const foodController = {};

foodController.index = (req, res) => {
  res.render('food/food-index', {
    weather: res.locals.food,
  });
}

module.exports foodController;
