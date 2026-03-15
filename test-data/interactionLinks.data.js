// Test data for modal, file, auth, and frame-based interactions.
const interactionLinksData = {
  baseUrl: 'https://the-internet.herokuapp.com/',
  entryAd: {
    linkName: 'Entry Ad',
    path: '/entry_ad',
    modalTitle: 'This is a modal window',
  },
  exitIntent: {
    linkName: 'Exit Intent',
    path: '/exit_intent',
    modalTitle: 'This is a modal window',
  },
  fileDownload: {
    linkName: 'File Download',
    path: '/download',
  },
  fileUpload: {
    linkName: 'File Upload',
    path: '/upload',
    uploadFileName: 'sample-upload.txt',
    uploadedHeading: 'File Uploaded!',
  },
  floatingMenu: {
    linkName: 'Floating Menu',
    path: '/floating_menu',
    targetLink: 'News',
  },
  forgotPassword: {
    linkName: 'Forgot Password',
    path: '/forgot_password',
    email: 'qa@example.com',
    errorHeading: 'Internal Server Error',
  },
  formAuthentication: {
    linkName: 'Form Authentication',
    path: '/login',
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    securePath: '/secure',
    logoutMessage: 'You logged out of the secure area!',
  },
  frames: {
    linkName: 'Frames',
    path: '/frames',
    iframePath: '/iframe',
    nestedFramesPath: '/nested_frames',
    defaultEditorText: 'Your content goes here.',
    nestedLeftText: 'LEFT',
    nestedBottomText: 'BOTTOM',
  },
};

module.exports = { interactionLinksData };
