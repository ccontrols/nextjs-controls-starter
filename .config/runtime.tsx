import React from 'react';
import { RunConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from "./TestingPage";


const config: RunConfiguration = {
  title: `awLib`,
  siteUrl: `https://nextjs-controls-starter.netlify.app`,
  description: `Some description meta.`,
  author: 'my name',
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <TestingPage /> },
      ],
    },
  }  
};

export default config;