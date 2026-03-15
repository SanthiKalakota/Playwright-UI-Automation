const { HomePage } = require('../pages/homePage');
const { FeaturePage } = require('../pages/featurePage');
const { AbTestingPage } = require('../pages/abTestingPage');
const { AddRemoveElementsPage } = require('../pages/addRemoveElementsPage');
const { BasicAuthPage } = require('../pages/basicAuthPage');
const { BrokenImagesPage } = require('../pages/brokenImagesPage');
const { ChallengingDomPage } = require('../pages/challengingDomPage');
const { CheckboxesPage } = require('../pages/checkboxesPage');
const { ContextMenuPage } = require('../pages/contextMenuPage');
const { DigestAuthPage } = require('../pages/digestAuthPage');
const { DisappearingElementsPage } = require('../pages/disappearingElementsPage');
const { DragAndDropPage } = require('../pages/dragAndDropPage');
const { DropdownPage } = require('../pages/dropdownPage');
const { DynamicContentPage } = require('../pages/dynamicContentPage');
const { DynamicControlsPage } = require('../pages/dynamicControlsPage');
const { DynamicLoadingPage } = require('../pages/dynamicLoadingPage');
const { EntryAdPage } = require('../pages/entryAdPage');
const { ExitIntentPage } = require('../pages/exitIntentPage');
const { FileDownloadPage } = require('../pages/fileDownloadPage');
const { FileUploadPage } = require('../pages/fileUploadPage');
const { FloatingMenuPage } = require('../pages/floatingMenuPage');
const { ForgotPasswordPage } = require('../pages/forgotPasswordPage');
const { FormAuthenticationPage } = require('../pages/formAuthenticationPage');
const { FramesPage } = require('../pages/framesPage');
const { GeolocationPage } = require('../pages/geolocationPage');
const { HorizontalSliderPage } = require('../pages/horizontalSliderPage');
const { HoversPage } = require('../pages/hoversPage');
const { InfiniteScrollPage } = require('../pages/infiniteScrollPage');
const { InputsPage } = require('../pages/inputsPage');
const { JQueryUiMenusPage } = require('../pages/jqueryUiMenusPage');
const { JavaScriptAlertsPage } = require('../pages/javascriptAlertsPage');
const { JavaScriptErrorPage } = require('../pages/javascriptErrorPage');
const { KeyPressesPage } = require('../pages/keyPressesPage');
const { LargeDomPage } = require('../pages/largeDomPage');
const { MultipleWindowsPage } = require('../pages/multipleWindowsPage');
const { NestedFramesPage } = require('../pages/nestedFramesPage');
const { NotificationMessagesPage } = require('../pages/notificationMessagesPage');
const { RedirectLinkPage } = require('../pages/redirectLinkPage');
const { SecureFileDownloadPage } = require('../pages/secureFileDownloadPage');
const { ShadowDomPage } = require('../pages/shadowDomPage');
const { ShiftingContentPage } = require('../pages/shiftingContentPage');
const { SlowResourcesPage } = require('../pages/slowResourcesPage');
const { SortableDataTablesPage } = require('../pages/sortableDataTablesPage');
const { StatusCodesPage } = require('../pages/statusCodesPage');
const { TyposPage } = require('../pages/typosPage');
const { WysiwygEditorPage } = require('../pages/wysiwygEditorPage');

// Factory class for all page objects used by tests and step definitions.
class POManager {
  constructor(page, options = {}) {
    this.page = page;
    this.baseUrl = options.baseUrl || 'https://the-internet.herokuapp.com/';
  }

  getHomePage() {
    return new HomePage(this.page, this.baseUrl);
  }

  getFeaturePage() {
    return new FeaturePage(this.page);
  }

  getAbTestingPage() {
    return new AbTestingPage(this.page);
  }

  getAddRemoveElementsPage() {
    return new AddRemoveElementsPage(this.page);
  }

  getBasicAuthPage() {
    return new BasicAuthPage(this.page);
  }

  getBrokenImagesPage() {
    return new BrokenImagesPage(this.page);
  }

  getChallengingDomPage() {
    return new ChallengingDomPage(this.page);
  }

  getCheckboxesPage() {
    return new CheckboxesPage(this.page);
  }

  getContextMenuPage() {
    return new ContextMenuPage(this.page);
  }

  getDigestAuthPage() {
    return new DigestAuthPage(this.page);
  }

  getDisappearingElementsPage() {
    return new DisappearingElementsPage(this.page);
  }

  getDragAndDropPage() {
    return new DragAndDropPage(this.page);
  }

  getDropdownPage() {
    return new DropdownPage(this.page);
  }

  getDynamicContentPage() {
    return new DynamicContentPage(this.page);
  }

  getDynamicControlsPage() {
    return new DynamicControlsPage(this.page);
  }

  getDynamicLoadingPage() {
    return new DynamicLoadingPage(this.page);
  }

  getEntryAdPage() {
    return new EntryAdPage(this.page);
  }

  getExitIntentPage() {
    return new ExitIntentPage(this.page);
  }

  getFileDownloadPage() {
    return new FileDownloadPage(this.page);
  }

  getFileUploadPage() {
    return new FileUploadPage(this.page);
  }

  getFloatingMenuPage() {
    return new FloatingMenuPage(this.page);
  }

  getForgotPasswordPage() {
    return new ForgotPasswordPage(this.page);
  }

  getFormAuthenticationPage() {
    return new FormAuthenticationPage(this.page);
  }

  getFramesPage() {
    return new FramesPage(this.page);
  }

  getGeolocationPage() {
    return new GeolocationPage(this.page);
  }

  getHorizontalSliderPage() {
    return new HorizontalSliderPage(this.page);
  }

  getHoversPage() {
    return new HoversPage(this.page);
  }

  getInfiniteScrollPage() {
    return new InfiniteScrollPage(this.page);
  }

  getInputsPage() {
    return new InputsPage(this.page);
  }

  getJQueryUiMenusPage() {
    return new JQueryUiMenusPage(this.page);
  }

  getJavaScriptAlertsPage() {
    return new JavaScriptAlertsPage(this.page);
  }

  getJavaScriptErrorPage() {
    return new JavaScriptErrorPage(this.page);
  }

  getKeyPressesPage() {
    return new KeyPressesPage(this.page);
  }

  getLargeDomPage() {
    return new LargeDomPage(this.page);
  }

  getMultipleWindowsPage() {
    return new MultipleWindowsPage(this.page);
  }

  getNestedFramesPage() {
    return new NestedFramesPage(this.page);
  }

  getNotificationMessagesPage() {
    return new NotificationMessagesPage(this.page);
  }

  getRedirectLinkPage() {
    return new RedirectLinkPage(this.page);
  }

  getSecureFileDownloadPage() {
    return new SecureFileDownloadPage(this.page);
  }

  getShadowDomPage() {
    return new ShadowDomPage(this.page);
  }

  getShiftingContentPage() {
    return new ShiftingContentPage(this.page);
  }

  getSlowResourcesPage() {
    return new SlowResourcesPage(this.page);
  }

  getSortableDataTablesPage() {
    return new SortableDataTablesPage(this.page);
  }

  getStatusCodesPage() {
    return new StatusCodesPage(this.page);
  }

  getTyposPage() {
    return new TyposPage(this.page);
  }

  getWysiwygEditorPage() {
    return new WysiwygEditorPage(this.page);
  }
}

module.exports = { POManager };
