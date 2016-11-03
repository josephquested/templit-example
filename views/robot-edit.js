function render (data) {
  var header = require('./partials/header')(data)
  var menuBar = require('./partials/menu-bar')()

  var html =
  `
    ${header}
    ${menuBar}
    <br>
    <h2>EDIT ROBOT DETAILS</h2>
    <form action="/robots/${data.id}" method="post">
      NAME <br><input type="text" value="${data.name}" name="name"><br><br>
      QUOTE <br><input type="text" value="${data.quote}" name="quote"><br><br>
      IMAGE URL <br><input type="text" value="${data.imgURL}" name="imgURL"><br><br>
      <input type="submit" value="Submit">
    </form>
  `

  return html
}

module.exports = (data) => {
  return render(data)
}
