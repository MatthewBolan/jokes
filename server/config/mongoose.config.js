
const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost/jokes_api", {

    useNewUrlParser: true,

    useUnifiedTopology: true

})

    .then(() => console.log("I have found my soul!") )

    .catch(error => console.log("I lost my soul!", error))