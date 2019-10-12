var express = require('express');
var router = express.Router();
var articleController = require('../controller/articleController');

router.get('/', articleController.getArticle)
router.get('/:id', articleController.getOneArticle)
router.post('/', articleController.createArticle)
router.put('/:id', articleController.updateArticle)
router.delete('/:id', articleController.deleteArticle)

module.exports = router;
