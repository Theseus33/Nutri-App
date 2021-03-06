const db = require('../db/config');

const Nutri = {};

Nutri.findAll = () => {
  return db.query('SELECT * FROM nutris')};

Nutri.findById = (id) => {
  return db.manyOrNone(`
  SELECT * FROM nutris
  WHERE id = $1
  `, [id]);
}

Nutri.create = (nutri) => {
  return db.one(`
    INSERT INTO nutris
    (title, description, category, completed, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `, [nutri.food, nutri.brand, nutri.calories, nutri.fiber, nutri.carbs, nutri.fat, nutri.user_id]);
}

Nutri.update = (nutri, id) => {
  return db.one(`
    UPDATE nutris SET
    food = $1,
    brand= $2,
    calories = $3,
    fiber = $4
    carbs = $5
    fat = $6
    WHERE id = $7
    RETURNING *
  `, [nutri.food, nutri.brand, nutri.calories, nutri.fiber, nutri.carbs, nutri.fat, nutri.user_id, id]);
}

Nutri.destroy = (id) => {
  return db.none(`
    DELETE FROM nutris
    WHERE id = $1
  `, [id])
}

// Nutri.complete = (id) => {
//   return db.oneOrNone(`
//   UPDATE nutri SET
//   completed = true
//   WHERE id = $1
//   `, [id]);
// }

module.exports = Nutri;
