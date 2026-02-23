const express = require('express');
const router = express.Router();
const controller = require('../controllers/deployments.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, controller.createDeployment);
router.get('/', auth, controller.getDeployments);
router.get('/:id', auth, controller.getDeployment);
router.post('/:id/restart', auth, controller.restartDeployment);
router.delete('/:id', auth, controller.deleteDeployment);

module.exports = router;
