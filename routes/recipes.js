var express = require('express');
var router = express.Router();
var recipe = require('../my_modules/recipe_data');
var Recipe = require('../models/recipe_model');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({recipes: recipe});

    /*
    Recipe.find({}, function(err, recipe) {
        if (err) throw err;
        console.log(recipe);

    });
    */
});

module.exports = router;
