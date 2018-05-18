//import express in the app
const express = require('express')
const appConfig = require("./config/appConfig")

//declaring an instance
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(appConfig.port, () => console.log('Example app listening on port 3000!'))