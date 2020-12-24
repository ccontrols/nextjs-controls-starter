const { defaultBuildConfig } = require("@component-controls/core");

module.exports = {
  stories: ["../src/docs/*.@(mdx|tsx)"],
  pages: {
    story: {
      tabs: [
        ...defaultBuildConfig.pages.story.tabs,
        {
          route: "test",
          title: "Testing",
          template: "@component-controls/pages/TestingPage",
        },
      ],
    },
  },
  siteUrl: `https://nextjs-controls-starter.netlify.app`,
};
