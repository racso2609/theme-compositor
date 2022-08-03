const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const appName = "themeCompositor";
const configLocations = [
  `/home/${process.env.USER}/.config/${appName}/config.json`,
];

const defaultFile = path.join(__dirname, "../", "config.json");
const defaultTemplateFolder = path.join(__dirname, "..", "templates");
const defaultTemplate = "default";

const validateConfigFile = (file) => {
  if (!file) {
    return "please create a config file";
  }

  const { templateFolder, activeTemplate } = file;
  if (!templateFolder) file.templateFolder = defaultTemplateFolder;
  if (!activeTemplate) file.activeTemplate = defaultTemplate;

  return false;
};

const openFile = (filePath) => {
  let tempFile = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  tempFile = JSON.parse(tempFile);

  return tempFile;
};

const getAvaliableConfig = () => {
  try {
    let file = null;
    for (const filePath of configLocations) {
      const fileExists = fs.existsSync(filePath);
      if (fileExists) {
        let tempFile = openFile(filePath);
        if (!validateConfigFile(tempFile)) {
          file = tempFile;
          break;
        }
      }
    }
    if (!file) file = openFile(defaultFile);

    const hasError = validateConfigFile(file);
    if (hasError) throw new Error(hasError);

    return file;
  } catch (e) {
    exec(`notify-send  ${e.message}`, (error, stderr) => {
      console.log(error, stderr);
    });
    throw e;
  }
};

module.exports = {
  configLocations,
  configFile: getAvaliableConfig(),
};
