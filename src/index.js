require('dotenv').config()
const app = require('./App.js')
const {DbConnection} = require('./DatabaseConfiguration/DbConfiguration.js')

DbConnection()