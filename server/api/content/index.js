'use strict';

var express = require('express');
var controller = require('./content.controller');

var router = express.Router();

//Router Methods
router.get('/', controller.index);

module.exports = router;
