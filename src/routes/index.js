const express = require('express');
const authRoute = require('./auth.routes');
const postRoute = require('./post.routes')
const webhookRoute = require('./webhook.routes')


const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/post',
    route: postRoute,
  },
  {
    path: '/',
    route: webhookRoute,
  },
  
  
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
