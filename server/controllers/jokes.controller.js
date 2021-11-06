
const Jokes = require("../models/jokes.model");







module.exports.createJokes = (req, res) => {

    Jokes.create(req.body)

    .then(newJokes => res.json(newJokes))

    .catch(error => res.json({message: "Something went wrong when creating my JOKES!", error: error}))

}





module.exports.findOneJokes = (req, res) => {

    Jokes.find({_id: req.params._id})

    .then(oneJokes => res.json(oneJokes))

    .catch(error => res.json({message: "Something went wrong when finding one JOKE!", error: error}))

}






module.exports.findAllJokes = (req, res) => {

    Jokes.find()

    .then(allJokes => res.json(allJokes))

    .catch(error => res.json({message: "Something went wrong when finding all the JOKES!", error: error}))

}







module.exports.updateJokes = (req, res) => {

    Jokes.findOneAndUpdate({_id: req.params._id}, req.body)

    .then(updateJokes => res.json(updateJokes))

    .catch(error => res.json({message: "Something went wrong when updating a JOKE!", error: error}))

}






module.exports.deleteJokes = (req, res) => {

    Jokes.deleteOne({_id: req.params._id}, req.body)

    .then(deleteJokes => res.json(deleteJokes))

    .catch(error => res.json({message: "Something went wrong when deleting a JOKE!", error: error}))

}