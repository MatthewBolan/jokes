const express = require("express");
const app = express();
const port = 8000;


require("./server/config/mongoose.config");


app.use(express.json(), express.urlencoded({extened:true}));







const AllMyRoutes = require("./server/routes/jokes.routes");

AllMyRoutes(app);





app.listen( port, () => console.log(`Listening on port: ${port}`) );