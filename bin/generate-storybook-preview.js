#!/usr/bin/env node
const fs = require("fs");
const chalk = require("chalk");
const paths = require('./paths');
const constants = require('./constants');
const { allIconsMap } = require('@digibearapp/digibear-svg-icons');
const { prefixName } = require("./utils");

function generateStorybookPreview() {
    let fileLines = generateStoriesFileLines(Object.keys(allIconsMap).map(name => prefixName(name)).join(",\n\t\t\t\t"))
    createStoriesFile(fileLines);
}

function generateStoriesFileLines(iconKeys) {
    return `\
${constants.HEADER}
import { DigibearIconsRegistryContext } from "../src/lib/DbIcon/DbIcon.types";
import { DigibearIconsRegistry } from "@digibearapp/digibear-svg-core";
import { ${iconKeys} } from "@digibearapp/digibear-svg-icons";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    const registry = new DigibearIconsRegistry();
    registry.registerIcons([${iconKeys}]);

    return (
      <DigibearIconsRegistryContext.Provider value={registry}>
        <Story />
      </DigibearIconsRegistryContext.Provider>
    );
  },
];

`
}

function createStoriesFile(fileLines) {
    try {
        fs.writeFileSync(paths.STORIES_PREVIEW_PATH, fileLines);
        console.log(`${chalk.inverse.green(" DONE ")} preview.js created.`);
    } catch (err) {
        console.error(
            `${chalk.inverse.red(" FAIL ")} Failed to created preview.js.`
        );
        console.group();
        console.error(err);
        console.groupEnd();
        return;
    }
}

module.exports = { generateStorybookPreview }