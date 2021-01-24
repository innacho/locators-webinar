const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.use('/site', express.static(__dirname + '/public'));

app.get('/form', (req, res) => {
  console.log(req.query)
  res.send({success: req.query.position=='left' })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
