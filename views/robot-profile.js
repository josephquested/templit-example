module.exports = (data) => {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  console.log('IMG URL', data.imgURL)

  var html =
  `
  ${header}
  ${menuBar}
  <h1>${data.name}</h1>
  <img class="robo-pic-profile" src="${data.imgURL}" alt="robo-pic"/>
  <h2>"${data.quote}"</h2>
  <input type="button" onclick="location.href='/robots'" value="back to robots"/>
  `

  return html
}
