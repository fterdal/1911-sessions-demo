const express = require("express")
const morgan = require("morgan")

const app = express()
app.use(morgan("dev"))

app.get("/", (req, res, next) => {
  res.send(`
    <img src="/cookiemonster.jpeg">
  `)
})

app.get("/cookiemonster.jpeg", (req, res) => {
  res.sendFile(__dirname + "/cookiemonster.jpeg")
})

const PORT = 4321
app.listen(PORT, () => {
  console.log(`Waiting for delicious requests on port ${PORT}`)
})
