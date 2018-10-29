const express = require('express');
const app = express();
const parser = require('body-parser')

const customerRouter = require('./router/customer');
const categoryRouter = require('./router/category');

app.use(parser.json()); 

app.use('/customer', customerRouter);
app.use('/category', categoryRouter);

app.listen(3000, () => console.log('Server is started!'));
