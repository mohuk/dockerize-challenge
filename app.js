const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
console.log('Listening on PORT: 3000')
app.listen(3000);
