// Test data for browser-driven UI interaction scenarios.
const browserUiLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  geolocation: {
    linkName: 'Geolocation',
    path: '/geolocation',
    latitude: 37.7749,
    longitude: -122.4194,
  },
  horizontalSlider: {
    linkName: 'Horizontal Slider',
    path: '/horizontal_slider',
    targetValue: '4',
  },
  hovers: {
    linkName: 'Hovers',
    path: '/hovers',
    expectedUser: 'name: user1',
  },
  infiniteScroll: {
    linkName: 'Infinite Scroll',
    path: '/infinite_scroll',
    minimumParagraphs: 5,
  },
  inputs: {
    linkName: 'Inputs',
    path: '/inputs',
    inputValue: '42',
  },
  jqueryUiMenus: {
    linkName: 'JQuery UI Menus',
    path: '/jqueryui/menu',
    downloadItem: 'Downloads',
    fileItem: 'PDF',
  },
  javascriptAlerts: {
    linkName: 'JavaScript Alerts',
    path: '/javascript_alerts',
    promptText: 'Playwright prompt text',
  },
  javascriptOnloadError: {
    linkName: 'JavaScript onload event error',
    path: '/javascript_error',
    expectedText: 'This page has a JavaScript error in the onload event',
  },
};

module.exports = { browserUiLinksData };
