var express = require('express');
var { HeroesController } = require('../controllers/index');

var router = express.Router();

router.get('/', HeroesController.getlist);

router.get('/:id', HeroesController.getById);

router.post('/', HeroesController.create);

router.delete('/:id', HeroesController.deleteById);

router.put('/:id', HeroesController.updateById);

module.exports = router;

