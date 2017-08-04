const db = require('../db/config');

const Food = {};


Food.findAll = () => {
  return db.query('SELECT * FROM nutris')};

Food.create = (food, user_id) => {
  return db.one(`
    INSERT INTO nutris
    (food, brand, calories, fiber, carbs, fat, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `, [food.food, food.brand, food.calories, food.fiber, food.carbs, food.fat, user_id]);
};


module.exports = Food;
