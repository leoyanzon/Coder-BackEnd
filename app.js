const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session)
const path = require('path')

const MongoStore = require('connect-mongo');

require('dotenv').config();
const indexRouter = require('./src/routes/index');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logger('tiny'));
app.use(express.static('public'))

const COOKIES_SECRET = process.env.COOKIES_SECRET || '';
app.use(cookieParser(COOKIES_SECRET));

app.get('/', (req, res) =>{
    res.sendFile('index', {root: __dirname})
})


const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const storeConfig = {
    mongoUrl: 'mongodb+srv://admin:Password01@coderh.ztk2j6n.mongodb.net/session?retryWrites=true&w=majority',
    mongoOptions: mongoConfig
}


app.use(session({
    store: MongoStore.create(storeConfig),
    secret: COOKIES_SECRET,
    resave: true,
    saveUninitialized:true
}))

app.use("/api", indexRouter);

module.exports = app;