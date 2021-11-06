const path = require("path");

module.exports = Object.freeze({
    STORIES_PATH: path.join(__dirname, "../src/stories/DbIcon.stories.tsx"),
    STORIES_PREVIEW_PATH: path.join(__dirname, "../.storybook/preview.js")
});