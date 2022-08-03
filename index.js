const fs = require('fs');
const path = require('path');

(async () => {
  const templateUri = path.join(__dirname, 'templates')
  const theme = 'style1'
  const files = fs.readdirSync(templateUri)

  const selectedTheme = files.find((fileName) => fileName.split('.')[0] === theme)
  if (!selectedTheme) throw new Error("Theme does not exist!")
  let styleJson = fs.readFileSync(path.join(templateUri, selectedTheme))
  styleJson = JSON.parse(styleJson)

  console.log(styleJson)

})()
