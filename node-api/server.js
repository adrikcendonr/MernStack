console.log("Creating API using express server")

const express = require('express') //importing express package and use top level express method
const app = express() //using express function we initialize express application

//const adminApp = express() //created to load the request for admin/backend work
//const adminRoutes = require("./Router/admin-route")

//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
//app.use('/static', express.static('public')) //localhost:9000/static/alert.js

app.get('/', function (req, res) {
  res.send('Hello World, WOOOOOOOO. This is upgraed instantly')
})

app.get('/info', function (req, res) {
    res.json({
        session : "MERNSTack",
        topic : "Express JS",
        apiname : "Give Session Info",
        built : "Using NodeMon",
        command : "npm start"
    })
})

app.listen(3000)

console.log("API is ruuning at http://localhost:3000")