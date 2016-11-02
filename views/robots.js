module.exports = (data) => {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  var html =
  `
    ${header}
    ${menuBar}
    ${render(data.robots)}
  `
  return html
}

function render (robots) {
  if (robots.length > 0) {
    return renderRobots(robots)
  } else {
    return renderSeed()
  }
}

function renderRobots (robots) {
  var html = ``
  robots.forEach((robot) => {
    html +=
    `
      <li>
        <h2>- ${robot.name} -</h2>
        <img class="robo-pic" src="${robot.imgURL}" alt="robo-pic"/>
        <h3>"${robot.quote}"</h3>
        <input type="button" onclick="location.href='/robots/${robot.id}'" value="view profile"/>
      </li>
      <hr>
      <br>
    `
  })

  return html
}

function renderSeed () {
  html =
  `
    <br><h2>No robots in the database! Do you want to generate more?</h2><br>
    <form action="/robots/seed" method="post">
      <input type="submit" value="generate!">
    </form>
  `

  return html
}
