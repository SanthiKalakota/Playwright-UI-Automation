// Test data for Digest Authentication and dynamic UI flows.
const authDynamicLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  digestAuthentication: {
    linkName: 'Digest Authentication',
    path: '/digest_auth',
    username: 'admin',
    password: 'admin',
    expectedAuthScheme: 'Digest',
    expectedRealmText: 'Protected Area',
  },
  disappearingElements: {
    linkName: 'Disappearing Elements',
    path: '/disappearing_elements',
    minimumMenuLinks: 4,
  },
  dragAndDrop: {
    linkName: 'Drag and Drop',
    path: '/drag_and_drop',
    expectedLeftHeaderAfterSwap: 'B',
    expectedRightHeaderAfterSwap: 'A',
  },
  dropdown: {
    linkName: 'Dropdown',
    path: '/dropdown',
    optionOne: 'Option 1',
    optionTwo: 'Option 2',
  },
  dynamicContent: {
    linkName: 'Dynamic Content',
    path: '/dynamic_content',
    maxRefreshAttempts: 3,
  },
  dynamicControls: {
    linkName: 'Dynamic Controls',
    path: '/dynamic_controls',
    inputText: 'playwright dynamic controls',
  },
  dynamicLoading: {
    linkName: 'Dynamic Loading',
    path: '/dynamic_loading',
    expectedText: 'Hello World!',
  },
};

module.exports = { authDynamicLinksData };
