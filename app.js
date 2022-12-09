import express from 'express';   //Necesario para express
import { Server as HttpServer } from "http";
import { Server as IoServer } from "socket.io";
import dotenv from 'dotenv'
dotenv.config(); //Declaración para uso de .env


import _ from "lodash";  //Declaración para usar librería de chequeo de entradas
import morgan from 'morgan';

import indexRouter from "./src/routes/index.js"; //Declaración para uso de index.html
import errorMiddleware from "./src/middlewares/errorMiddleware.js"; //Declaración de middleware
import authMiddleware from "./src/middlewares/authMiddleware.js";

//Creación de app
const app = express();
const http = new HttpServer(app);
const io = new IoServer(http);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", indexRouter);
app.use(errorMiddleware);
app.use(authMiddleware);

export default http;

