let express = require("express")

let app = express()

app.get("/", (req ,res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("server is live on port: 3000")
})