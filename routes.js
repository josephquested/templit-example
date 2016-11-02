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
  console.log('GET ROBOT PROFILE REQ: ', req.url)
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {

    data = JSON.parse(data)
    var robotData = data.robots.find((robot) => {
      if (robot.id == req.params.id) console.log("found a match!", robot)
      return robot.id == req.params.id
    })

    robotData.page = 'ROBOT PROFILE'
    res.render('robot-profile', robotData)
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
    req.body.id = data.robots[data.robots.length - 1].id + 1
    data.robots.push(req.body)

    fs.writeFile(`${__dirname}/data.JSON`, JSON.stringify(data), (err, response) => {
      data.page = 'ROBOTS'
      res.render('robots', data)
    })
  })
}
