module.exports = {
  stories: [
    '../src/docs/*.@(mdx|tsx)',
  ],
  pages: {
    story: {
      tabs: [{ route: 'page' }, { route: 'test' }],
    },
  }
};