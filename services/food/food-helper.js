require('isomorphic-fetch');
require('dotenv').config();

function getFood(req, res, next) {
  fetch(`https://api.nutritionix.com/v1_1/search/${req.body.food}?&fields=*&appId=${process.env.APP_ID}&appKey=${process.env.APP_KEY}`)
    .then(fetchRes => {
      return fetchRes.json();
    }).then(jsonRes => {
      res.locals.food = jsonRes.hits[0].fields.item_name;
      res.locals.brand = jsonRes.hits[0].fields.brand_name;
      res.locals.calories = jsonRes.hits[0].fields.nf_calories;
      res.locals.fiber = jsonRes.hits[0].fields.nf_dietary_fiber;
      res.locals.carbs = jsonRes.hits[0].fields.nf_total_carbohydrate;
      res.locals.fat = jsonRes.hits[0].fields.nf_total_fat;
      console.log(`Carbs :${res.locals.carbs}`);
      return next();
    })
    .catch(err => {
      console.log(err);
      return next();
    })
}

module.exports = {
  getFood,
}
