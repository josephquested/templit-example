var express = require('express')
var bodyParser = require('body-parser')
var templit = require('templit')
var routes = require('./routes')

var app = express()

app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))

// GET ROUTES //
app.get('/', routes.get.home)
app.get('/robots', routes.get.robots)
app.get('/robots/create', routes.get.robotCreate)
app.get('/robots/:id', routes.get.robotProfile)

// POST ROUTES //
app.post('/robots', routes.post.robots)

app.listen(3000, () => {
  console.log('templit rendering on port 3000')
})
