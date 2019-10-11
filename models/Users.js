const mongoose = require('mongoose');

const { Schema } = mongoose;

const UsersSchema = new Schema({
    email: String,
    firstname: String,
    lastname: String,
    username:String,
    city:String,
    createdAt:Date,
});

mongoose.model('Users', UsersSchema);