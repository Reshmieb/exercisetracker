const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	userId: {
		type: String,
	},
    description:{
        type: String,
		trim: true,		
		required: true,
    },
	duration:{
		type:String
	},
	date:{
		type:String
	}
});

module.exports = mongoose.model('exercise', MovieSchema)