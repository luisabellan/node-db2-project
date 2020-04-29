const express = require("express")
const db = require("../car-dealer")

const router = express.Router()

//READ all cars
router.get("/", async (req, res, next) => {
	try {
		const fruits = await db("cars")
		
		res.json(cars)
	} catch(err) {
		next(err)
	}
})

//READ car by id
router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const car = await db("cars").where({ id }).first()
		
		res.json(car)
	} catch(err) {
		next(err)
	}
})

//CREATE car
router.post("/", async (req, res, next) => {
	try {
		const carData = req.body
		const [id] = await db("cars").insert(carData)
		const newCar = await db("cars").where({ id })

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})

module.exports = router