"use strict";

var port = process.env.PORT || 5000;

var express = require("express");

var server = require("./api/server.js");

var helmet = require("helmet");

var welcomeRouter = require("./welcome/welcome-router");

var carsRouter = require("./cars/cars-router");

server.use(helmet());
server.use(express.json());
server.use("/api/", welcomeRouter);
server.use("/api/cars", carsRouter);
server.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  });
});
server.listen(port, function () {
  console.log("Running at http://localhost:".concat(port));
});