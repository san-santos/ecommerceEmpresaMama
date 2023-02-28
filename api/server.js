import compression from "compression";
import express from "express";
import ejs from "ejs";
import { urlencoded, json } from "body-parser";
import { connect } from "mongose";
import morgan from "morgan";
import cors from "cors";
import { dbProduction, dbTest } from "./config/database";
import "./models";
import "./routes";

//STARTING//
const app = express();

//OUTPUT PORT//
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

//STATIC FILES//
app.use("/public", __dirname + "/public");
app.use("/public/images", __dirname + "/public/images");

//SETUP MONGODB//
const dbURI = isProduction ? dbProduction : dbTest;
connect(dbURI, { useNewUrlParse: true });

//SETUP EJS//
app.set("view engine", ejs);

//CONFIGURATION//
if (!isProduction) app.use(morgan("dev"));
app.use(cors());
app.disable("x-powered-by");
app.use(compression());

//SETUP BODY-PARSER//
app.use(urlencoded({ extended: false, limit: 1.5 * 1024 * 1024 }));
app.use(json({ limit: 1.5 * 1024 * 1024 }));

//CONTROL ROUTES//
app.use("/", "./routes");

//404 - ROUTE//
app.use((req, res) => {
  const err = new Error("Not Found");
  err.status = 404;
  // eslint-disable-next-line no-undef
  next(err);
});

//400 TO 500 - ROUTE//
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (err.status !== 404) console.warn("Error: ", err.message, new Date());
});

//LISTEN OUTPUT//
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Rodando na //localhost:${PORT}`);
});
