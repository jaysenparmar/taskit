// Get all of our friend data
var data = require('../data.json');
var fs = require('fs');

exports.view = function(req, res) { 
	if(!req.session.userID || req.session.userID == -1){
		res.render('./index');
	}
        var el = document.getElementById('remove');
    el.onclick = removeTask;
    
//console.log(req.session.userID);
        res.render('dashboard', data.Home[0]);
    
}

exports.login = function(req,res){
	var user = req.query;
	for (var i = 0; i < data.Home[0].Members.length;i++){
		if(user.email == data.Home[0].Members[i].email && user.password == data.Home[0].Members[i].password) {
			req.session.userID = data.Home[0].Members[i].id;
            res.render('dashboard', data.Home[0]);
                       
                       //{ userchores: data.Roommates[req.session.roommateID].userchores, Roommates: data.Roommates}
		}	
        else { 
        //  login error page res.render
        }
	}

	res.render('index');
}

exports.addTask = function(req, res) {
    
	var newTask = req.query.taskname;
	var userid = req.query.id;
    
    console.log("Chore = " + newTask + " Roomie = " +  userid);
    
    var blah = {
            "taskid": data.Home[0].Members[userid].Tasks.length,
            "taskname": newTask
    }
    
    data.Home[0].Members[userid].Tasks.push(blah);
    
    
    
   // console.log( data.Home[0].Members[userid].Tasks);
}

exports.removeTask = function(req, res) {
    
    var n = req.query.name;
    var v = req.query.value;
    var i = req.query.id;
    
    console.log(n);
    console.log(v);
    console.log(i);
    
    res.render('dashboard', data.Home[0]);
}