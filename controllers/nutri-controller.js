const Nutri = require('../models/nutri');

const nutriController = {};

nutriController.index = (req, res) => {
  Nutri.findAll().then(nutris => {
    res.render('nutri/nutri-index', {
      data: nutris,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

nutriController.show = (req, res) => {
  Nutri.findById(req.params.id)
  .then(nutris => {
      console.log(nutris, '/nutri')
      res.render('nutri/nutri-item', {
        data: nutris,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

nutriController.create = (req, res) => {
  Nutri.create({
    food: req.body.food,
    brand: req.body.brand,
 }).then(() => {
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

nutriController.edit = (req, res) => {
  Nutri.findById(req.params.id)
    .then((nutris) => {
      res.render('nutri/nutri-edit', {
        data: nutris,
        user: req.user,
      });
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

nutriController.update = (req, res) => {
  Nutri.update({
    food: req.body.food,
    brand: req.body.brand,
    completed: req.body.completed,
    user_id: req.user.id,
  }, req.params.id).then(nutris => {
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

nutriController.delete = (req, res) => {
  Nutri.destroy(req.params.id)
    .then(() => {
      res.redirect('/nutri');
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}


module.exports = nutriController;
