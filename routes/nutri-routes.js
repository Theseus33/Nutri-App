const express = require('express');
const nutriRouter = express.Router();
const nutriController = require('../controllers/nutri-controller');
const authHelpers = require('../services/auth/auth-helpers');

nutriRouter.get('/', authHelpers.loginRequired, nutriController.index);
nutriRouter.post('/', authHelpers.loginRequired, nutriController.create);

nutriRouter.get('/add',  authHelpers.loginRequired, (req, res) => {
  res.render('nutri/nutri-add', {
    currentPage: 'add',
  });
});

nutriRouter.get('/:id/edit', authHelpers.loginRequired, nutriController.edit);
nutriRouter.get('/:id', authHelpers.loginRequired, nutriController.show);
nutriRouter.put('/:id',authHelpers.loginRequired, nutriController.update);
nutriRouter.delete('/:id', authHelpers.loginRequired, nutriController.delete);

module.exports = nutriRouter;
