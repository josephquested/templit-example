var express = require('express')
var templit = require('templit')

var app = express()

app.engine('js', templit)
app.set('view engine', 'js')

app.use(express.static('public'));

// important: the path to your 'views' directory
app.set('views', `${__dirname}/views`)

// renders the home page (views/home.js), using the default templit (views/templits/index.js)
app.get('/', (req, res) => {
  res.render('home', { title: 'templit homepage' })
})

// renders the profile page (views/profile.js), using the profile templit (views/templits/profile.js)
app.get('/profile', (req, res) => {
  res.render('profile', { templit: 'profile', title: 'templit profile' })
})

app.listen(3000, () => {
  console.log('templit rendering on port 3000')
})
