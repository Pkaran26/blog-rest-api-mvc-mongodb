var articleModel = require('../models/articleModel');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogs',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const createArticle = (req, res)=>{
  let article = articleModel(req.body);
  article.save((err, model)=>{
    if(err){
      res.send(err)
    }else {
      res.json(article)
    }
  })
}

const getArticle = (req, res)=>{
  article.find({}, (err, articles)=>{
    if(err){
      res.send(err)
    }else {
      res.json(articles)
    }
  })
}

const getOneArticle = (req, res)=>{
  article.findById((req.params.id), (err, article)=>{
    if(err){
      res.send(err)
    }else {
      res.json(article)
    }
  })
}

const updateArticle = (req, res)=>{
  articleModel.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, article)=>{
    if(err){
      res.send(err)
    }else {
      res.json(article)
    }
  })
}

const deleteArticle = (req, res)=>{
  articleModel.remove({_id: req.params.id}, (err, article)=>{
    if(err){
      res.send(err)
    }else {
      res.json({message: 'deleted'})
    }
  })
}

module.exports = {
  createArticle: createArticle,
  getArticle: getArticle,
  getOneArticle: getOneArticle,
  updateArticle: updateArticle,
  deleteArticle: deleteArticle
}
