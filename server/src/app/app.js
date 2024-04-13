/*---------------------Node Modules-----------------------------------*/
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

/*----------------------User Modules---------------------------------*/
const { Origins, Methods } = require("../constants");
const rootRouter = require("../routes");

/*---------------express app declaration----------------------------*/
const app = express();
/*------------------------Middlewares-------------------------------*/
app.use(express.json({ limit: "1000mb" }));
app.use(express.urlencoded({ limit: "1000mb", extended: true }));
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    origin: Origins,
    methods: Methods,
    optionsSuccessStatus: 200,
  })
);
/*------------------------Routes------------------------------------*/
app.use("/api", rootRouter);

module.exports = app;
