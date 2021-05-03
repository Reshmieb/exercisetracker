const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/user.controller');


router.post('/new-user', userController.create);
router.get('/users', userController.getAll);
module.exports = router;