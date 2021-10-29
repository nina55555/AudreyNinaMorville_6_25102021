const express = require('express')
const app = express()
 

const mongoose = require("./models/dbConfig")

app.get('/', function (req, res) {
  res.send('Hello humans')

})

/*
app.get('/fy', function (req, res) {
  res.send('Hello humansfy')
})
*/


//app.listen(3000)
app.listen(3000,() => console.log("server is listening port 3000") )