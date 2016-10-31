module.exports = (html) => {
  var templit =
  `
    <html>
      <head>
        <title> templit - home </title>
        <link rel="stylesheet" href="home.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
  return templit
}
