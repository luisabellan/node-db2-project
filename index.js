const port = process.env.PORT || 5000
const express = require("express")
const server = require("./api/server.js");

const helmet = require("helmet")
const welcomeRouter = require("./welcome/welcome-router")
const carsRouter = require("./cars/cars-router")


server.use(helmet())
server.use(express.json())

server.use("/api/", welcomeRouter)
server.use("/api/cars", carsRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
