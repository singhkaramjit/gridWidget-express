const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure Mongoose
mongoose.connect('mongodb://localhost/editablegridq');
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
app.use(require('./routes'));
app.use('/*', function (req, res) {
    res.status(500).json({status: false, msg: 'No route found live server'});
});
app.listen(8000, () => console.log('Server running on http://localhost:8000/'));