import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from "./TestingPage";


const config: RunOnlyConfiguration = {
  siteTitle: `awLib`,
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  siteDescription: `Some description meta.`,
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