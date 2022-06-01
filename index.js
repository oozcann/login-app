const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const AuthRoute = require('./server/routes/auth');
const path = require('path');
mongoose.connect('mongodb://localhost:27017/login',{useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Error on mongodb connection : ' + err);
});
db.once('open', ()=>{
    console.log('MongoDB connection is established!');
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/login.html'));
});
app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/register.html'));
});
app.get('/success', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/success.html'));
});
app.get('/register-success', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/register-success.html'));
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log(path.join(__dirname));
});
app.use('/api/user', AuthRoute);