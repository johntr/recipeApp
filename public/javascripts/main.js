$(document).ready(function() {
    var $recipe = $("#recipes");

    function showRecipes(data) {
        $.each(data.recipes , function(i, recipes) {
            $.each(recipes, function (i, r){
                $recipe.append("<li id='recipe-" + r.machine_name + "' class='rec'>" + r.name +'</li><div class="ingredients">');
                $.each(r.ingredients, function (i, ingred) {
                    if(this.length - 1) {
                        $("#recipe-" + r.machine_name).next().append('<li>' + ingred.amount + ' ' + ingred.um + ' ' + ingred.ingredient +'</li></div>');
                    }
                    else {
                        $("#recipe-" + r.machine_name).next().append('<li>' + ingred.amount + ' ' + ingred.um + ' ' + ingred.ingredient +'</li>');
                    }
                });
            });
        });
    }

    $recipe.delegate('.rec', 'click', function() {
        $(this).next('div').slideToggle("slow");
    });

    $.ajax({
        type: 'GET',
        url: '/recipes',
        success: function(data) {
            showRecipes(data);
        },
        error: function() {
            console.log("Failed to get recipes");
        }
    });

});

$("#recipe-submit").on('click', function() {
    $("#add-recipe").toggle();
    $("#inner-container").fadeToggle();
    var ingred = [];
    for(var j=0;j<i;j++){

        ingred[j] = [];
        ingred[j]['amount'] = $("#ingred-amount"+j).val();
        ingred[j]['um'] = $("#ingred-um"+j).val();
        ingred[j]['ingredient'] = $("#ingred-name"+j).val();
    }
    
    $.ajax({
        type: "POST",
        url: '/recipes/add',
        data: {
            name: $("#recipe-name").val(),
            machine_name: $("#recipe-machine-name").val(),
            ingredients: ingred,
            directions: $("#recipe-description").val()
        },
        success: function(d) {
            alert("Recipe Submitted!");
        },
        error: function(d) {
            console.log("Error "+ d);
        }
    });
});

$("#recipe-cancel").on('click', function() {
    $("#add-recipe").toggle();
    $("#inner-container").fadeToggle();
});

$('#add').on('click', function() {
    $("#add-recipe").fadeToggle();
    $("#inner-container").toggle();
});
var i = 1;
$('#add-ingred').on('click', function() {
    //TODO: Spelling?
    $('#ingredient-lines').append(
        '<ul><div id="all-ingrededients"> <label for="ingred-amount">Ingredient Amount:</label> <input type="text" name="ingred-amount" id="ingred-amount'+i+'"></select>' +
        '<label for="ingred-um">Ingredient UM:</label> <select type="text" name="ingred-um" id="ingred-um'+i+'">'+
        '<option value="cup">Cup(s)</option> <option value="tbls">Tbls</option> <option value="tsp">Tsp</option>'+
        '</select> <label for="ingred-name">Ingredient Name:</label> <input type="text" name="ingred-name" id="ingred-name'+i+'"></select>'+
        '</div> </ul>'
    );
    i++;
});