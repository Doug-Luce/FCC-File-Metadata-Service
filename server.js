const express = require('express');
const app = express();
const routes = require('./routes/router');
const path = require('path');

app.use(express.static('public'));
app.use('/', routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
