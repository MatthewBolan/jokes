
const JokesController = require("../controllers/jokes.controller");

module.exports = app => {

    app.post("/api/jokes/create", JokesController.createJokes);

    app.get("/api/jokes/:_id", JokesController.findOneJokes);

    app.get("/api/jokes", JokesController.findAllJokes);

    app.put("/api/jokes/update/:_id", JokesController.updateJokes);

    app.delete("/api/jokes/delete/:_id", JokesController.deleteJokes);

}



