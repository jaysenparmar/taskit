// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res) { 
	if(!req.session.userID || req.session.userID == -1){
		res.render('./index');
	}
	console.log(req.session.userID);
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
    
    
    
    console.log( data.Home[0].Members[userid].Tasks);

    
    /*
    var userid4chore;
    var userpicture4chore;
    
    
    for(var i = 0; i < data.Home[0].Members.length; i++){
		if(data.Roommates[i].user == roommate4chore) {
			userid4chore = data.Roommates[i].id;
            userpicture4chore = data.Roommates[i].userpicture;
		}	

    }
    
    var chorename
    var choreimage;
    var chorepoints;
            
    for(var i = 0; i < data.chores.length; i++){
		if(data.chores[i].name == newchore) {
            chorename = data.chores[i].name;
			choreimage = data.chores[i].imageURL;
            chorepoints = data.chores[i].points;
		}	

    }
    
    	var newChore = {
                    "name": chorename,
					"userpicture": userpicture4chore,
                    "id": userid4chore,
                    "imageURL": choreimage,
                    "points": chorepoints
					};
    
    console.log(userid4chore);
    
     data.Roommates[userid4chore].userchores.push(newChore);
    
    res.render('dashboard', data.Home[0]);

   data.Roommates.[user].push(newChore); */

}