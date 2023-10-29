const webhook = require('../controller/webhook')
const express = require('express');
const router = express.Router();


router.post('/webhook', webhook.webhook);

module.exports = router;