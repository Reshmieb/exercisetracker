
const productModel = require('../models/product.model');				
// configure multer

module.exports = {
	
	create: function(req, res, next) {
		console.log(req.body);
		productModel.create({ userId: req.body.userId,description:req.body.description,duration:req.body.duration,date:req.body.date }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Exercise added successfully!!!", data: null});
				  
				}); 
	},

	getById: function(req, res, next) {
		console.log(req.params.userId);
		productModel.findById(req.params.userId, function(err, exerciseinfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Product found!!!", data:{exercise: exerciseinfo}});
			}
		});
	},

	// getAll: function(req, res, next) {
	// 	let productList = [];

	// 	productModel.find({}, function(err, products){
	// 		if (err){
	// 			next(err);
	// 		} else{
	// 			for (let product of products) {
	// 				productList.push({id: product._id, userId: product.userId,description:product.description, duration: product.duration,date:product.date});
	// 			}
	// 			res.json({status:"success", message: "Exercise list found!!!", data:{Exercise: productList}});
							
	// 		}

	// 	});
	// },

}					