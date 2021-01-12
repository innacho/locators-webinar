const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/site', express.static(__dirname + '/public'));

app.post('/form', (req, res) => {
  res.send({success: true})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
