require('isomorphic-fetch');
require('dotenv').config();

function getFood(req, res, next) {
  fetch(`https://api.nutritionix.com/v1_1/search/taco?fields=*&appId=${process.env.APP_ID}6b&appKey=${process.env.APP_KEY}`)
    .then(fetchres => fetchres.json())
    .then(jsonres =>  {
      res.locals.food = jsonRes.main;
      return next();
    }).catch(err ={
      console.log(err);
      return next();
    })
}

module.exports = {
  getFood,
}
