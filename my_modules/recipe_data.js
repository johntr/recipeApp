var walk  = require('walk');
var files = [];
var d = [];
var util = require('util');

// Walker options
var walker = walk.walk('/Users/john/Lab/Recipes', {followLinks: false});

walker.on('file', function (root, stat, next) {

    if (/.json$/.test(stat.name)) {
        files.push(root + '/' + stat.name);
        next();
    } else {
        next();
    }
});

walker.on('end', function () {

    files.forEach(function (f) {
        d.push(require(f));
    });
    //console.log(util.inspect(d, {showHidden: false, depth: null}));

});

exports.data = d;
