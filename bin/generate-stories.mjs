import fs from "fs";
import chalk from "chalk";
import * as paths from "./paths.mjs";
import * as constants from "./constants.mjs";
import { allIconsMap } from "@digibearapp/digibear-svg-icons";

export function generateDbStories() {
  let fileLines = generateStoriesFileLines(
    Object.keys(allIconsMap)
      .map((key) => `"${key}"`)
      .join(",\n\t\t\t\t")
  );
  createStoriesFile(fileLines);
}

function generateStoriesFileLines(iconKeys) {
  return `\
${constants.HEADER}
import { Story } from '@storybook/react';
import { DbIcon, DbIconProps } from '..';

export default {
    title: 'Example/DbIcon',
    component: DbIcon,
    argTypes: {
        iconName: {
            options: [${iconKeys}],
            control: { type: 'select' }
        },
        iconStyle: {
            options: ['line', 'fill', 'duotone'],
            control: { type: 'radio' }
        },
        color: { control: 'color' },
        secondaryColor: { control: 'color' },
        opacity: { control: 'number' },
        secondaryOpacity: { control: 'number' },
        size: { control: 'number' },
        flippedH: { control: 'boolean' },
        flippedV: { control: 'boolean' },
    },
};

const Template: Story<any> = (args) => {
    const dbIconProps: DbIconProps = {
        iconName: args.iconName,
		iconStyle: args.iconStyle,
        color: args.color,
        secondaryColor: args.secondaryColor,
        opacity: args.opacity,
        secondaryOpacity: args.secondaryOpacity,
        size: args.size,
        flippedH: args.flippedH,
        flippedV: args.flippedV,
    }
    return (<DbIcon {...dbIconProps} />);
};

export const Icon = Template.bind({});
Icon.args = {
    iconName: "watermelon",
    iconStyle: "line",
    color: "black",
    secondaryColor: "black",
    opacity: 1.0,
    secondaryOpacity: 0.16,
    size: 128.0,
    flippedH: false,
    flippedV: false,
};

`;
}

function createStoriesFile(fileLines) {
  try {
    fs.writeFileSync(paths.STORIES_PATH, fileLines);
    console.log(`${chalk.inverse.green(" DONE ")} DbIcon.stories.tsx created.`);
  } catch (err) {
    console.error(
      `${chalk.inverse.red(" FAIL ")} Failed to created DbIcon.stories.tsx.`
    );
    console.group();
    console.error(err);
    console.groupEnd();
    return;
  }
}
