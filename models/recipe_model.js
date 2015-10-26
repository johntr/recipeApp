var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipe');
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    name: String,
    machine_name: {type: String, required: true, unique: true},
    ingredients: {
        amount: String,
        um: String,
        ingredient: String
    },
    directions: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
