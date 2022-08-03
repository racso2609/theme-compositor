const fs = require("fs");
const path = require("path");
const { configFile } = require("./configFiles");

const getTemplateFile = (templateUri) => {
  const styleJson = fs.readFileSync(path.join(templateUri));
  return JSON.parse(styleJson);
};

const getThemeColor = (colorName) => {
  const templateUri = path.join(
    configFile.templateFolder,
    configFile.activeTemplate + ".json"
  );
  const templateFile = getTemplateFile(templateUri);
  return templateFile.colors[colorName];
};

const actionsMethods = {
  getThemeColor,
};

module.exports = {
  actionsMethods,
};
