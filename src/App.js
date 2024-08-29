const express = require('express')
const app = express()
const chalk = require('chalk')

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT, ()=>{
  console.log(
    chalk.greenBright.bgYellow.bold(`Surver Connected On Port http://localhost:${process.env.PORT}`)
  );
  
})