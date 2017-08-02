//imports Nutri path
const Nutri = require('../models/nutri-model')
//Nutri controller as empty object
const nutriController={}
//catch will come into effect if then condition is not met and
//the proper error will be listed in console for the following requests

//render list of all Nutris from json data
nutriController.index = (req, res) => {
  Nutri.findAll().then(nutri => {
    res.render('nutriList/nutri-index', {
      currentPage: 'index',
      message: 'ok',
      data: nutri,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};
//render individual Nutris by requested id through json data
nutriController.show = (req, res) => {
  Nutri.findById(req.params.id)
    .then(nutri => {
      res.render('nutriList/nutri-item', {
        currentPage: 'show',
        message: 'ok',
        data: nutri,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};
//create new Nutri by adding via provided parameters
nutriController.create = (req, res) => {
  Nutri.create({
    title: req.body.title,
    category: req.body.category,
    details: req.body.details,
  }).then(() => {
    res.redirect('/nutri');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
//change existing Nutri data by Setting to the database
nutriController.update= (req, res) => {
  Nutri.update({
    title: req.body.title,
    category: req.body.category,
    details: req.body.details,
  }, req.params.id).then(nutri => {
    res.redirect(`/nutri/${req.params.id}`);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
//edit Nutri
nutriController.edit = (req, res) => {
  Nutri.findById(req.params.id)
    .then((nutri) => {
      res.render('nutriList/nutri-edit', {
        currentPage: 'edit',
        data: nutri,
        user: req.user,
    });
      }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
//delete Nutri from database
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
