var validUrl = require('valid-url')

module.exports = (data) => {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  if (!validUrl.isUri(data.imgURL)) data.imgURL = ''

  var html =
  `
  ${header}
  ${menuBar}

  <h1>${data.name}</h1>
  <img class="robo-pic-profile" src="${data.imgURL}" alt="robo-pic">
  <h2>"${data.quote}"</h2>

  <input type="button" onclick="location.href='/robots'" value="back to robots"/><br><br>
  <form action="/robots/delete/${data.id}" method="post">
    <input type="submit" value="delete robot">
  </form>
  `

  return html
}
