import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { AllyPage } from "@component-controls/axe-plugin";
import { ViewportPage } from "@component-controls/viewport-plugin";

const config: RunOnlyConfiguration = {
  siteTitle: `awLib`,
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  siteDescription: `Some description meta.`,
  author: 'my name',
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <AllyPage /> },
        { title: 'Viewport', render: () => <ViewportPage /> },
      ],
    },
  }  
};

export default config;