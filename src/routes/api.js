const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.get('/analytics', appController.getAnalytics);
router.get('/records', appController.getAllRecords);
router.post('/records', appController.createRecord);

module.exports = router;
