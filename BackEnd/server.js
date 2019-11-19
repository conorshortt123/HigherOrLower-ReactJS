const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-i9mi9.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    avatar:String
})

const UserModel = mongoose.model('user', userSchema);

app.get('/api/users', (req, res) => {

    UserModel.find((error, data) =>{
        res.json({users:data});
    })
    
})

app.get('/api/users/:id', (req, res)=>{
    console.log(req.params.id);

    UserModel.findById(req.params.id, (error,data)=>{
        res.json(data);
    })
})

app.delete('/api/users/:id', (req, res)=>{
    console.log(req.params.id);

    UserModel.deleteOne({_id: req.params.id},
        (error, data) =>{
            res.json(data);
        })
})

app.post('/api/users', (req,res)=>{
    console.log('Post request Successful');
    console.log(req.body.email);
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.avatar);

    UserModel.create({
        email:req.body.email, 
        username:req.body.username, 
        password:req.body.password,
        avatar:req.body.avatar
    });

    res.json('post recieved!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))