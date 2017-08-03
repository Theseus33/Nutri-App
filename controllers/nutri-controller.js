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
    title: req.body.title,
    food: req.body.food,
    brand: req.body.brand,
    user_id: req.user.id,
 }).then(() => {
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

nutriController.edit = (req, res) => {
  Nutri.findById(req.params.id)
    .then(nutris => {
      res.render('nutri/nutri-edit', {
        nutris: nutris,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

nutriController.update = (req, res) => {
  Nutri.update({
    title: req.body.title,
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

nutriController.complete = (req, res) => {
  Nutri.complete(req.params.id)
    .then(nutris => {
      res.json({
        message: 'nutri completed successfully',
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
}

module.exports = nutriController;
