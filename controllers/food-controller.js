const foodController = {};

foodController.index = (req, res) =>  {
  console.log(res.locals.food);
  res.render('food/food-index', {
    data: res.locals.food,
    });
}

module.exports = foodController;
