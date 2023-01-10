const express = require('express');
const app = express();
require('dotenv').config();
const indexRouter = require('./src/routes/index');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api", indexRouter);

module.exports = app;