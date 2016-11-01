module.exports = (data) => {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  var html =
  `
    ${header}
    ${menuBar}
    <br>
    <h2>ENTER ROBOT DETAILS</h2>
    <form action="/robots" method="post">
      NAME <br><input type="text" name="name"><br><br>
      QUOTE <br><input type="text" name="quote"><br><br>
      IMAGE URL <br><input type="text" name="imgURL"><br><br>
      <input type="submit" value="Submit">
    </form>
  `

  return html
}
