var express = require('express');
var router = express.Router();
var userController = require('../controller/userController');

router.get('/', userController.getUser);
router.get('/:id', userController.getOneUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
