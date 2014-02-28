var data = require("../data.json");

exports.view = function(req, res){
    console.log('Rendering add');
	res.render('add');
}
