
const mongoose = require("mongoose");



const JokeSchema = new mongoose.Schema({

    name: String,

    joke: String

});



const Jokes = mongoose.model("joke", JokeSchema);



module.exports = Jokes;