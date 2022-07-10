const express = require('express');
const { check, validationResult } = require('express-validator')

const homeController = require('../controllers/trangChuController');

const router = express.Router();

router.get('/', homeController.index)


module.exports = router;
