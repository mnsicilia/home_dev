var express = require('express');
var app = express();

var pythonRouter = require('./api/routes/pythonRouter');

// Mount routes
app.use('/api', pythonRouter);

app.get('/', function(req, res) {
    res.send("Hello World");
});
//app.get('/dalembert', function(req, res) {
//    dalembertRouter;
//});

app.listen(3000, function () {
    console.log('server running on port 3000');
})