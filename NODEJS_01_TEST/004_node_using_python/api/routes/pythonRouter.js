var express = require('express');
var pythonRouter = express.Router();
var pythonCtrl = require('../controllers/pythonController');

pythonRouter.route('/call_date_parser')
    .get(pythonCtrl.call_date_parser);

pythonRouter.route('/call_run_string')
    .get(pythonCtrl.call_run_string);

pythonRouter.route('/call_dalembert')
    .get(pythonCtrl.call_dalembert);
    
module.exports = pythonRouter;