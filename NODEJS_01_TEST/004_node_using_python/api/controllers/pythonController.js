let {PythonShell} = require('python-shell')

var call_dalembert = function(req, res) {
  var options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '',
    args:
    [
      req.query.funds, // starting funds
      req.query.size, // (initial) wager size
      req.query.count, // wager count — number of wagers per sim
      req.query.sims // number of simulations
    ]
  }
  
  PythonShell.run('dalembert.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    res.send(results.toString())
  });
}

var call_date_parser = function(req, res) {
  var options = {
    mode: 'text',
    pythonPath: 'python',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '',
    args: []
  }
  
  PythonShell.run('date_parser.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    res.send(results.toString())
  });
}

var call_run_string = function(req, res) {
  
  PythonShell.runString('x=1+1;print(x)', null, function (err, results) {
    if (err) throw err;
    console.log('finished');
    res.send(results.toString())
  });
}

module.exports = {
  call_date_parser: call_date_parser,
  call_run_string: call_run_string,
  call_dalembert: call_dalembert
}