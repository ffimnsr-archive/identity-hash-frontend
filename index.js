var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.set('port', (process.env.PORT || 3449));
app.use(serveStatic(__dirname + '/public/', {'index': ['index.html']}));
app.listen(app.get('port'), () => {
  console.log('Identity Hash is running on port', app.get('port'));
});
