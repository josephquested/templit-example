module.exports = (html) => {
  var templit =
  `
    <html>
      <head>
        <title> templit - profile </title>
        <link rel="stylesheet" href="profile.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
  return templit
}
