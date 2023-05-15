const fs = require("fs");
const path = require("path");
const { configFile } = require("./configFiles");

const getTemplateFile = (templateUri) => {
  const styleJson = fs.readFileSync(path.join(templateUri));
  return JSON.parse(styleJson);
};
// TODO: Change script to apply with theme base16 files
const getThemeColor = (colorName) => {
  const templateUri = path.join(
    configFile.templateFolder,
    configFile.activeTemplate + ".json"
  );

  const templateFile = getTemplateFile(templateUri);
  const colorId = templateFile[colorName] ?? colorName;

  return templateFile.palette[colorId];
};

const getTheme = () => {
  const templateUri = path.join(
    configFile.templateFolder,
    configFile.activeTemplate + ".json"
  );
  const templateFile = getTemplateFile(templateUri);

  return templateFile;
};

const actionsMethods = {
  getThemeColor,
  getTheme,
};

module.exports = {
  actionsMethods,
};
