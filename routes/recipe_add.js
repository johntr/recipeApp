var express = require('express');
var router = express.Router();

router.post("/", function(req, res, next) {

    var new_recipe = new Object();
        new_recipe.name = req.body.name;
        new_recipe.machine_name = req.body.machine_name;
        new_recipe.directions = req.body.directions;
        new_recipe.ingredients = req.body.ingredients;

    console.log(new_recipe);
    res.send("Success");
});

module.exports = router;