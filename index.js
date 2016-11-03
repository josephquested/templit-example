var express = require('express')
var bodyParser = require('body-parser')
var templit = require('templit')
var routes = require('./routes')

var app = express()
var PORT = process.env.PORT || 3000

app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))

// GET ROUTES //
app.get('/', routes.get.home)
app.get('/robots', routes.get.robots)
app.get('/robots/create', routes.get.robotCreate)
app.get('/robots/edit/:id', routes.get.robotEdit)
app.get('/robots/:id', routes.get.robotProfile)

// POST ROUTES //
app.post('/robots', routes.post.robots)
app.post('/robots/delete/:id', routes.post.robotDelete)
app.post('/robots/seed', routes.post.robotSeed)
app.post('/robots/:id', routes.post.robotEdit)

app.listen(PORT, () => {
  console.log(`templit rendering on port ${PORT}`)
})
