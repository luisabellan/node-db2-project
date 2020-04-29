"use strict";

var express = require("express");

var helmet = require("helmet");

var welcomeRouter = require("./welcome/welcome-router");

var carsRouter = require("./cars/cars-router");

var server = express();
var port = process.env.PORT || 5000;
server.use(helmet());
server.use(express.json());
server.use("/", welcomeRouter);
server.use("/cars", carsRouter);
server.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  });
});
server.listen(port, function () {
  console.log("Running at http://localhost:".concat(port));
});