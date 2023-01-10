const express = require('express');
const app = express();
require('dotenv').config();
const indexRouter = require('./src/routes/index');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const COOKIES_SECRET = process.env.COOKIES_SECRET || '';
app.use(cookieParser(COOKIES_SECRET));

app.use("/api", indexRouter);

module.exports = app;