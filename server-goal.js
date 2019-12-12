const express = require("express")
const session = require("express-session")

const app = express()

app.use(
  session({
    secret: "usd7fgsdftsyudf",
    resave: false,
    saveUninitialized: true
  })
)

app.get("/", (req, res, next) => {
  if (!req.session.counter) req.session.counter = 1
  else req.session.counter++
  res.send(`Hello There, your session is ${JSON.stringify(req.session.counter)}`)
})

const PORT = 4321
app.listen(PORT, () => {
  console.log(`Waiting for delicious requests on port ${PORT}`)
})
