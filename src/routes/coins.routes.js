const express = require('express');
const router = express.Router();
const controller = require('../controllers/coins.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/balance', auth, controller.balance);
router.get('/packages', controller.packages);
router.get('/history', auth, controller.history);

module.exports = router;
