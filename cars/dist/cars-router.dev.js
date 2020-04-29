"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var express = require("express");

var db = require("../data/config");

var router = express.Router(); //READ all cars

router.get("/", function _callee(req, res, next) {
  var cars;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db("cars"));

        case 3:
          cars = _context.sent;
          res.json(cars);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //READ car by id

router.get("/:id", function _callee2(req, res, next) {
  var id, car;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return regeneratorRuntime.awrap(db("cars").where({
            id: id
          }).first());

        case 4:
          car = _context2.sent;
          res.json(car);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //CREATE car

router.post("/", function _callee3(req, res, next) {
  var carData, _ref, _ref2, id, newCar;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          carData = req.body;
          _context3.next = 4;
          return regeneratorRuntime.awrap(db("cars").insert(carData));

        case 4:
          _ref = _context3.sent;
          _ref2 = _slicedToArray(_ref, 1);
          id = _ref2[0];
          _context3.next = 9;
          return regeneratorRuntime.awrap(db("cars").where({
            id: id
          }));

        case 9:
          newCar = _context3.sent;
          res.status(201).json(newCar);
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
router.put("/:id", function _callee4(req, res, next) {
  var payload, updatedAccount;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          payload = {
            "VIN": req.body.VIN,
            "make": req.body.make,
            "model": req.body.model,
            "mileage": req.body.mileage,
            "transmissionType": req.body.transmissionType,
            "status": req.body.status
          }; // translates to `UPDATE "cars" SET "title" = ? AND "contents" = ? WHERE "id" = ?;`

          _context4.next = 4;
          return regeneratorRuntime.awrap(db("cars").where("id", req.params.id).update(payload));

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(db("cars").where("id", req.params.id).first());

        case 6:
          updatedAccount = _context4.sent;
          res.json(updatedAccount);
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
});
router["delete"]("/:id", function _callee5(req, res, next) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(db("cars").where("id", req.params.id).del());

        case 3:
          res.status(204).end();
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
module.exports = router;