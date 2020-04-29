const express = require("express")
const db = require("../data/config")

const router = express.Router()

//READ all cars
router.get("/", async (req, res, next) => {
	try {
		const cars = await db("cars")
		
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


router.put("/:id", async (req, res, next) => {
	try {
		const payload = {
			"VIN": req.body.VIN,
			"make": req.body.make,
			"model": req.body.model,
			"mileage": req.body.mileage,
			"transmissionType": req.body.transmissionType,
			"status": req.body.status,
		}

		// translates to `UPDATE "cars" SET "title" = ? AND "contents" = ? WHERE "id" = ?;`
		await db("cars").where("id", req.params.id).update(payload)
		const updatedAccount = await db("cars").where("id", req.params.id).first()

		res.json(updatedAccount)
	} catch (err) {
		next(err)
	}
})

router.delete("/:id", async (req, res, next) => {
	try {
		// translates to `DELETE FROM "cars" WHERE "id" = ?;`
		await db("cars").where("id", req.params.id).del()
		res.status(204).end()
	} catch (err) {
		next(err)
	}
})


module.exports = router