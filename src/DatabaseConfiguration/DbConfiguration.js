const mongoose = require('mongoose');
const chalk = require('chalk');
const {DbName} = require('../Constant/constant.js')

const DbConnection = async () => {
  try {
    const connectionInfo = await mongoose.connect(`${process.env.DATABASE_URL}/${DbName}`)
    console.log(
      chalk.blueBright.bgGreen.bold(
        `MongoDB Connected !! BD Host !! ${
        (await connectionInfo).connection.host
      }`
      )
    );
    
  } catch (error) {
    console.log(
      chalk.black.bgRed.bold(
        error
      )
    );
    
  }
  
}

module.exports = {DbConnection}