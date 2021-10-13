'use strict';

const photoControler = require('./../controlers/photoControler.js');
const express = require('express');
const router = express.Router();

// Router methods
router.route('/photos').get(photoControler.getPublications);
// .post(photoControler.postPublication);

module.exports = router;
