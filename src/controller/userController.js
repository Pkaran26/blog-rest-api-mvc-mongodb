var userModel = require('../models/userModel');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogs',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const createUser = (req, res)=>{
  let user = new userModel(req.body);
  user.save((err, model)=>{
    if(err){
      res.send(err)
    }else {
      res.json(user)
    }
  })
}

const getUser = (req, res)=>{
  userModel.find({}, (err, users)=>{
    if(err){
      res.send(err)
    }else {
      res.json(users)
    }
  })
}

const getOneUser = (req, res)=>{
  userModel.findById((req.params.id), (err, users)=>{
    if(err){
      res.send(err)
    }else {
      res.json(users)
    }
  })
}

const updateUser = (req, res)=>{
  userModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, user)=>{
      if(err){
        res.send(err)
      }else {
        res.json(user)
      }
  })
}

const deleteUser = (req, res)=>{
  userModel.remove({_id: req.params.id}, (err, user)=>{
    if(err){
      res.send(err)
    }else {
      res.json({message: 'deleted'})
    }
  })
}

module.exports = {
  createUser: createUser,
  getUser: getUser,
  getOneUser: getOneUser,
  updateUser: updateUser,
  deleteUser: deleteUser
}
