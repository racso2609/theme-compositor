const fs = require("fs");
const path = require("path");
const { configFile } = require("./utils/configFiles");
const avaliableActions = {
  "--get-theme-color": {
    name: "getTheme",
    symbol: "--get-theme-color",
    description: "receive a color and retrieve the hex value",
  },
};

const manageArguments = () => {
  const validArguments = process.argv.slice(2, process.argv.length);
  // possible actions
  // --get-theme color
};

(async () => {
  if (!configFile.activeTemplate) throw new Error("No template set");

  console.log("process.argv");

  const templateUri = path.join(__dirname, "templates");
  const theme = configFile.activeTemplate;
  const files = fs.readdirSync(templateUri);

  const selectedTheme = files.find(
    (fileName) => fileName.split(".")[0] === theme
  );
  if (!selectedTheme) throw new Error("Theme does not exist!");
  let styleJson = fs.readFileSync(path.join(templateUri, selectedTheme));
  styleJson = JSON.parse(styleJson);

  console.log(styleJson);
})();
