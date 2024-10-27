const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getHomePage);
router.get('/play', userController.getPlayPage);
router.get('/training', userController.getPlayPage);
router.get('/lesson', userController.getPlayPage);

module.exports = router;