// Test data for secure, DOM, table, and editor interaction links.
const secureDomLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  secureFileDownload: {
    linkName: 'Secure File Download',
    path: '/download_secure',
    fallbackPath: '/login',
  },
  shadowDom: {
    linkName: 'Shadow DOM',
    path: '/shadowdom',
    expectedText: "Let's have some different text!",
  },
  shiftingContent: {
    linkName: 'Shifting Content',
    path: '/shifting_content',
    menuExamplePath: '/shifting_content/menu',
  },
  slowResources: {
    linkName: 'Slow Resources',
    path: '/slow',
    minStatus: 200,
  },
  sortableDataTables: {
    linkName: 'Sortable Data Tables',
    path: '/tables',
  },
  statusCodes: {
    linkName: 'Status Codes',
    path: '/status_codes',
    targetCode: '200',
    apiPath: '/status_codes/200',
  },
  typos: {
    linkName: 'Typos',
    path: '/typos',
    expectedPattern: "won't|won,t",
  },
  wysiwygEditor: {
    linkName: 'WYSIWYG Editor',
    path: '/tinymce',
    editorText: 'Updated by automation',
  },
};

module.exports = { secureDomLinksData };
