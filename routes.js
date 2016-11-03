var fs = require('fs')

module.exports = {
  get: {
    home: getHome,
    robots: getRobots,
    robotProfile: getRobotProfile,
    robotCreate: getRobotCreate
  },
  post: {
    robots: postRobots,
    robotDelete: postRobotDelete,
    robotSeed: postRobotSeed
  }
}

// GET ROUTES //

function getHome (req, res) {
  var data = { page: 'HOME' }
  res.render('home', data)
}

function getRobots (req, res) {
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    if (err) return console.log(`ERROR READING JSON: ${err}`)

    data = JSON.parse(data)
    data.page = 'ROBOTS'
    res.render('robots', data)
  })
}

function getRobotProfile (req, res) {
  console.log('req url:', req.url);
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    if (err) return console.log(`ERROR READING JSON: ${data}`)
    var robotData = {}

    data = JSON.parse(data)
    robotData = data.robots.find((robot) => {
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
    if (err) return console.log(`ERROR READING JSON: ${data}`)
    data = JSON.parse(data)

    req.body.id = data.robots[data.robots.length - 1].id + 1
    data.robots.push(req.body)

    fs.writeFile(`${__dirname}/data.JSON`, JSON.stringify(data), (err, response) => {
      data.page = 'ROBOTS'
      res.render('robots', data)
    })
  })
}

function postRobotDelete (req, res) {
  fs.readFile(`${__dirname}/data.JSON`, 'utf8', (err, data) => {
    if (err) return console.log(`ERROR READING JSON: ${data}`)
    data = JSON.parse(data)

    var robotData = data.robots.find((robot) => {
      return robot.id == req.params.id
    })

    var index = data.robots.indexOf(robotData)
    data.robots.splice(index, 1)

    fs.writeFile(`${__dirname}/data.JSON`, JSON.stringify(data), (err, response) => {
      data.page = 'ROBOTS'
      res.redirect('/robots')
    })
  })
}

function postRobotSeed (req, res) {
  fs.readFile(`${__dirname}/seed.JSON`, 'utf8', (err, data) => {
    if (err) return console.log(`ERROR READING JSON: ${data}`)
    fs.writeFile(`${__dirname}/data.JSON`, data, (err, response) => {
      res.redirect('/robots')
    })
  })
}
