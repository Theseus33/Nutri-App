--\c todo_review_dev;

CREATE TABLE IF NOT EXISTS users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS nutris
(
  id SERIAL PRIMARY KEY,
  food VARCHAR(255),
  brand VARCHAR(255),
  calories INTEGER,
  fiber INTEGER,
  carbs INTEGER,
  fat INTEGER,
  user_id INT REFERENCES users(id)
);
