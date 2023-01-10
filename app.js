const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

require('dotenv').config();
const indexRouter = require('./src/routes/index');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('tiny'));

const COOKIES_SECRET = process.env.COOKIES_SECRET || '';
app.use(cookieParser(COOKIES_SECRET));

app.use(session({
    secret: COOKIES_SECRET,
    resave: true,
    saveUninitialized:true
}))

app.use("/api", indexRouter);

module.exports = app;