const
express = require('express'),
app = express(),
logger = require('morgan'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
port = process.env.port || 3000
Album = require('./models/Album.js')
Artist = require('./models/Artist.js')

    mongoose.connect('mongodb://localhost/record-label', (err) => {
        console.log(err || "Connected to MongoDB.")
    })
    
    app.use(logger('dev'))
    app.use(bodyParser.json())
    
    app.get('/', (req, res) => {
        res.json({message: "Record Label API root."})
    })