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