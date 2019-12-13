const express = require("express")
const session = require("express-session")
const morgan = require("morgan")
const html = require('html-template-tag')

const app = express()

app.use(session({
  secret: 'sd78fg8sd7gyd8uyfgduifghj',
  resave: false,
  saveUninitialized: true,
}))

app.use(morgan("dev"))

app.get("/", (req, res, next) => {
  // const sessionCount = 1
  if (!req.session.count) req.session.count = 1
  else req.session.count++
  const sessionCount = req.session.count
  console.log(req.session)
  res.send(html`
    <h1 style="text-align: center;">SessionCount: ${sessionCount}</h1>
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
