const webhook = require('../controller/webhook')
const express = require('express');
const router = express.Router();


router.post('/webhook', webhook.webhook);
router.get('/', webhook.checkStatus);

module.exports = router;