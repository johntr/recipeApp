var express = require('express');
var router = express.Router();
var recipe = require('../my_modules/recipe_data');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({recipes: recipe});
});

module.exports = router;
