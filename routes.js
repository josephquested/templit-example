var fs = require('fs')

module.exports = {
  get: {
    home: getHome,
    robots: getRobots,
    robotProfile: getRobotProfile,
    robotCreate: getRobotCreate
  },
  post: {
    robots: postRobots
  }
}

// GET ROUTES //

function getHome (req, res) {
  var data = { page: 'HOME' }
  res.render('home', data)
}

function getRobots (req, res) {
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    data = JSON.parse(data)
    data.page = 'ROBOTS'
    res.render('robots', data)
  })
}

function getRobotProfile (req, res) {
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    data = JSON.parse(data).robots[req.params.id]
    data.page = 'ROBOT PROFILE'
    res.render('robot-profile', data)
  })
}

function getRobotCreate (req, res) {
  var data = { page: 'CREATE ROBOT' }
  res.render('robot-create', data)
}

// POST ROUTES //

function postRobots (req, res) {
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    data = JSON.parse(data)
    req.body.id = data.robots.length
    data.robots.push(req.body)

    fs.writeFile(`${__dirname}/data.JSON`, JSON.stringify(data), (err, response) => {
      data.page = 'ROBOTS'
      res.render('robots', data)
    })
  })
}
