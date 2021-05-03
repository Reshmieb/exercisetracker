const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		trim: true,		
		required: true,
	},
});


module.exports = mongoose.model('exercise_user', UserSchema);