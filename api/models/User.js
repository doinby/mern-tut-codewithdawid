const mongoose = require('mongoose');

// Define new schema using Mongoose
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String, required: true, min: 4, unique: true },
	password: { type: String, required: true, min: 8 },
});

// Define new model from schema and export
const { model } = mongoose;

const UserModel = model('User', UserSchema);

module.exports = UserModel;
