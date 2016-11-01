module.exports = (data) => {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  var html =
  `
    ${header}
    ${menuBar}
    ${renderRobots(data.robots)}
  `
  return html
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
