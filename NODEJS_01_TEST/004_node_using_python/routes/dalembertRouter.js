var express = require('express');
var dalembertRouter = express.Router();

dalembertRouter.route('/dalembert')
    .get(callD_alembert);

module.exports = dalembertRouter;