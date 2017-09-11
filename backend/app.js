const express = request('express')
const restful = request('node-restful')
const server = express()
const mongoose = restful.mongoose

// database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// teste
server.get('/', (req, res, next) => res.send('Backend'))

// start
server.listen(3000)