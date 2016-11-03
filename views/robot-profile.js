function render (data) {
  var validUrl = require('valid-url')
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

    <form action="/robots/edit/${data.id}" method="get">
    <input type="submit" value="edit robot">
    </form>

    <form action="/robots/delete/${data.id}" method="post">
      <input type="submit" value="delete robot">
    </form>
  `

  return html
}

module.exports = (data) => {
  return render(data)
}
