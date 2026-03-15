// Test data for keyboard, DOM, window, frame, notification and redirect scenarios.
const domWindowLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  keyPresses: {
    linkName: 'Key Presses',
    path: '/key_presses',
    key: 'Tab',
    expectedResult: 'You entered: TAB',
  },
  largeDom: {
    linkName: 'Large & Deep DOM',
    path: '/large',
    // Table node at column 50, row 50 – used to verify deep DOM access.
    // 50 rows × 3 columns; sibling-50.3 is the final (deepest) cell.
    targetCellId: 'sibling-50.3',
  },
  multipleWindows: {
    linkName: 'Multiple Windows',
    path: '/windows',
    newWindowPath: '/windows/new',
    newWindowHeading: 'New Window',
  },
  nestedFrames: {
    linkName: 'Nested Frames',
    path: '/nested_frames',
    nestedLeftText: 'LEFT',
    nestedMiddleText: 'MIDDLE',
    nestedRightText: 'RIGHT',
    nestedBottomText: 'BOTTOM',
  },
  notificationMessages: {
    linkName: 'Notification Messages',
    path: '/notification_message_rendered',
    // The flash message uses one of several possible texts.
    possibleMessages: ['Action successful', 'Action unsuccesful, please try again', 'Action unsuccessful, please try again'],
  },
  redirectLink: {
    linkName: 'Redirect Link',
    path: '/redirector',
    redirectedPath: '/status_codes',
    // API endpoint that returns a redirect (301/302) response.
    apiEndpoint: '/redirect',
    minRedirectStatus: 200,
  },
};

module.exports = { domWindowLinksData };
