"use strict";

var express = require("express");

var db = require("../data/config");

var server = express();
server.use(express.json());
module.exports = server;