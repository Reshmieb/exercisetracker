const userModel = require('../models/user.model');
				

module.exports = {
	create: function(req, res, next) {
		console.log(req.body);
		userModel.create({ username: req.body.username}, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json(data);
				  
				});
	},

	getAll: function(req, res, next) {
		let userlist = [];

		userModel.find({}, function(err, users){
			if (err){
				next(err);
			} else{
				for (let user of users) {
					userlist.push({id: user._id, username: user.username});
				}
				res.json({status:"success", message: "User list found!!!", data:{user: userlist}});
							
			}

		});
	},


}					
