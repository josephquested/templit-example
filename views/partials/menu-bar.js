module.exports = (data) => {
  var html =
  `
    <span id="menu-bar">
      <input class="nav" type="button" onclick="location.href='/'" value="home"/>
      <input class="nav" type="button" onclick="location.href='/robots'" value="robots"/>
      <input class="nav" type="button" onclick="location.href='/robots/create'" value="create robot"/>
    </span>
    <hr>
  `
  return html
}
