// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
    console.log('Rendering dashboard');
  //  console.log(data.Home[0]);
    
	res.render('dashboard', data.Home[0]);
}