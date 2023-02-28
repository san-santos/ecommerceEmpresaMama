const compression = require("compression");
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = "cors";

//STARTING//
const app = express();

//OUTPUT PORT//
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

//STATIC FILES//
app.use("/public", __dirname + "/public");
app.use("/public/images", __dirname + "/public/images");

//SETUP MONGODB//
const dbs = require("./config/database");
const bodyParser = require("body-parser");
const dbURI = isProduction ? dbs.dbProduction : dbs.dbTest;
mongoose.connect(dbURI, { useNewUrlParser: true });

//SETUP EJS//
app.set("view engine", ejs);

//CONFIGURATION//
if (!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable("x-powered-by");
app.use(compression());

//SETUP BODY-PARSER//
app.use(bodyParser.urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }));
app.use(json({ limit: 1.5 * 1024 * 1024 }));

//MODELS//
require("./models");

//CONTROL ROUTES//
app.use("/", require("./routes"));

//404 - ROUTE//
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  // eslint-disable-next-line no-undef
  next(err);
});

//400 TO 500 - ROUTE//
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status !== 404) console.warn("Error: ", err.message, new Date());
  res.json({ erros: { message: err.message, status: err.status } });
});

//LISTEN OUTPUT//
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Rodando na //localhost:${PORT}`);
});
