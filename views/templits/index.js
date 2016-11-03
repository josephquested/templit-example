module.exports = (html) => {
  var templit =
  `
    <html>
      <head>
        <title> TEMPLIT </title>
        <link rel="stylesheet" href="../../index.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
  return templit
}
