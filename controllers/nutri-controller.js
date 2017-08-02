const Nutri = require('../models/nutri-model');

const nutriController = {};

nutriController.index = (req, res) => {
  Nutri.findAll(req.user.id)
    .then(nutri => {
      res.render('nutri/nutri-index', {
        data: nutri,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

nutriController.show = (req, res) => {
  Nutri.findById(req.params.id)
    .then(nutri => {
      res.render('nutri/nutri-item', {
        nutri: nutri,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

nutriController.create = (req, res) => {
  Nutri.create({
    title: req.body.title,
    food: req.body.food,
    brand: req.body.brand,
    user_id: req.user.id,
  }).then(nutri => {
    console.log(nutri);
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

nutriController.edit = (req, res) => {
  Nutri.findById(req.params.id)
    .then(nutri => {
      res.render('nutri/nutri-edit', {
        nutri: nutri,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

nutriController.update = (req, res) => {
  Nutri.update({
    title: req.body.title,
    food: req.body.food,
    brand: req.body.brand,
    completed: req.body.completed,
    user_id: req.user.id,
  }, req.params.id).then(nutri => {
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

nutriController.delete = (req, res) => {
  Nutri.destroy(req.params.id)
    .then(() => {
      res.redirect('/nutri');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

nutriController.complete = (req, res) => {
  Nutri.complete(req.params.id)
    .then(nutri => {
      res.json({
        message: 'nutri completed successfully',
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = nutriController;
