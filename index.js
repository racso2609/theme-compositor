const { actionsMethods } = require("./utils/commandActions");
const { configFile } = require("./utils/configFiles");
const { actions } = require("./utils/flags");

(async () => {
  if (!configFile.activeTemplate) throw new Error("No template set");

  actions.forEach((action) => {
    const result = actionsMethods[action.type](action.body);
    console.log(result);
  });
})();
