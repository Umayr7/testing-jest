const express = require('express');
const { userController, userPostController } = require('../controller/index');
const router = express.Router();

router.get('/', userController);

router.post('/', userPostController);

module.exports = router;