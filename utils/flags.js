const availableFlags = {
  "--get-theme-color": {
    name: "getThemeColor",
    symbol: "--get-theme-color",
    description: "receive a color and retrieve the hex value",
  },
};

const manageArguments = () => {
  const validArguments = process.argv.slice(2, process.argv.length);
  const formatArgs = [];
  Object.keys(availableFlags).forEach((flag) => {
    if (validArguments.includes(flag)) {
      const flagIndex = validArguments.indexOf(flag);
      const flagContentIndex = flagIndex + 1;

      const action = {
        type: availableFlags[flag].name,
        body: validArguments[flagContentIndex],
      };
      formatArgs.push(action);
    }
  });
  return formatArgs;
};

module.exports = {
  availableFlags,
  actions: manageArguments(),
};
