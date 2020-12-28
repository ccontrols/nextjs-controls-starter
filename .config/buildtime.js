const { defaultBuildConfig } = require("@component-controls/core");

module.exports = {
  stories: ["../src/docs/*.@(mdx|tsx)"],
  pages: {
    story: {
      tabs: {
        ...defaultBuildConfig.pages.story.tabs,
        test: "@component-controls/pages/TestingPage",
      },
    },
  },
  siteUrl: `https://nextjs-controls-starter.netlify.app`,
};
