var express = require('express');
var { CommoditiesController } = require('../controllers/index');

var router = express.Router();

router.get('/', CommoditiesController.getlist);

router.get('/:id', CommoditiesController.getById);

router.post('/', CommoditiesController.create);

router.delete('/:id', CommoditiesController.deleteById);

router.put('/:id', CommoditiesController.updateById);

module.exports = router;
