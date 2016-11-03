function render (data) {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  var html =
  `
    ${header}
    ${menuBar}
    <h3>welcome to the templit robot database!</h3>
    <p>
    this is a serverside app. it was built using the
    <a href="https://github.com/josephquested/templit">templit framework</a>
    on <a href="http://expressjs.com/">express.js</a>.
    </p>
  `

  return html
}

module.exports = (data) => {
  return render(data)
}
