var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipe_model');

router.post("/", function(req, res, next) {
    /*
    var new_recipe = new Object();
        new_recipe.name = req.body.name;
        new_recipe.machine_name = req.body.machine_name;
        new_recipe.directions = req.body.directions;
        new_recipe.ingredients = JSON.parse(req.body.ingredients);

    console.log(new_recipe);
    */

    var new_recipe = Recipe({
        name: req.body.name,
        machine_name: req.body.machine_name,
        ingredients:  JSON.parse(req.body.ingredients),
        directions: req.body.directions
    });

    new_recipe.save(function(err) {
        if (err) throw err;
        console.log("New recipe saved");
    });

    res.send("Success");
});

module.exports = router;