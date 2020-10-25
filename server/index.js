const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const server = express()
const PORT = process.env.PORT || 4000

server.user(helmet())
server.use(cors())
server.use(express.json())
server.user(cookieParser())

server.user((err, req, res, next) => {
	console.dir(err)
	res.status(500).json({ error: "Something went wrong" })
})

server.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
