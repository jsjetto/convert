const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/cotacao', (req, res) => {
  console.log(req.query)
  const { quotation, many } = req.query

  if (quotation && many) {
    const conversao = convert.convert(quotation, many)
    res.render('cotacao', {
      error: false,
      quotation: convert.toMoney(quotation),
      many: convert.toMoney(many),
      conversao: convert.toMoney(conversao)
    })
  }
  else {
    res.render('cotacao', {
      error: 'Invalid Values'
    })
  }
})

app.listen(3000, err => {
  if (err) {
    console.log('Page not found "404"')
  } else {
    console.log('ConvertMyMoney Online')
  }
})