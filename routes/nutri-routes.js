const express = require('express');
const nutriRoutes = express.Router();
const nutriController = require('../controllers/nutri-controller');
const authHelpers = require('../services/auth/auth-helpers');

nutriRoutes.get('/', authHelpers.loginRequired, nutriController.index);
nutriRoutes.post('/', authHelpers.loginRequired, nutriController.create);

nutriRoutes.get('/add',  authHelpers.loginRequired, (req, res) => {
  res.render('nutriList/nutri-add', {
    currentPage: 'add',
  });
});

nutriRoutes.get('/:id/edit', authHelpers.loginRequired, nutriController.edit);
nutriRoutes.get('/:id', authHelpers.loginRequired, nutriController.show);
nutriRoutes.put('/:id',authHelpers.loginRequired, nutriController.update);
nutriRoutes.delete('/:id', authHelpers.loginRequired, nutriController.delete);

module.exports = nutriRoutes;
