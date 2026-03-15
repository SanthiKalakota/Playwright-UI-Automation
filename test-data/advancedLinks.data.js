// Test data for advanced navigation flows and operations.
const advancedLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  basicAuth: {
    linkName: 'Basic Auth',
    path: '/basic_auth',
    username: 'admin',
    password: 'admin',
  },
  brokenImages: {
    linkName: 'Broken Images',
    path: '/broken_images',
    minBrokenRenderedImages: 1,
    minBrokenApiResponses: 1,
  },
  challengingDom: {
    linkName: 'Challenging DOM',
    path: '/challenging_dom',
    expectedRowCount: 10,
  },
  checkboxes: {
    linkName: 'Checkboxes',
    path: '/checkboxes',
  },
  contextMenu: {
    linkName: 'Context Menu',
    path: '/context_menu',
    expectedAlertMessage: 'You selected a context menu',
  },
};

module.exports = { advancedLinksData };
