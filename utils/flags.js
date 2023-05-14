const availableFlags = {
  "--get-theme-color": {
    name: "getThemeColor",
    symbol: "--get-theme-color",
    description: "receive a color and retrieve the hex value",
  },
  "--get-theme": {
    name: "getTheme",
    symbol: "--get-theme",
    description: "return the actual theme",
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

export default config = {
  availableFlags,
  actions: manageArguments(),
};
