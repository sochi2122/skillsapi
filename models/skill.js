const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const skillSchema = new Schema({
skill: String,
level: String,
}, {timestamp: true});


module.exports = mongoose.model.skillSchema