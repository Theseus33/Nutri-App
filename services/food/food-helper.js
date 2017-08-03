require('isomorphic-fetch');
require('dotenv').config();

function getFood(req, res, next) {
  fetch(`https://api.nutritionix.com/v1_1/search/taco?&fields=*&appId=${process.env.APP_ID}&appKey=${process.env.APP_KEY}`)
    .then(fetchRes => {
      return fetchRes.json();
    }).then(jsonRes => {
      console.log(jsonRes.hits[0].fields.brand_name);
      res.locals.food= jsonRes;
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
