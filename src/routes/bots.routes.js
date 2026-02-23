const express = require('express');
const router = express.Router();
const controller = require('../controllers/bots.controller');

router.get('/', controller.listBots);
router.get('/:slug', controller.getBot);

module.exports = router;
