
/**
 * function callD_alembert
 * @param {*} req 
 * @param {*} res 
 */
var callD_alembert = function(req, res) {
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./dalembert.py",
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims // number of simulations
    ]);

    process.stdout.on('data', function (data) {
      res.send(data.toString());
    });
}

module.exports = {
    callD_alembert: callD_alembert
}