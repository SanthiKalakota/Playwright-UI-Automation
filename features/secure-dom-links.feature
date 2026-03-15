# BDD scenarios for secure and advanced DOM/table/editor links.
@regression @secure-dom-links
Feature: Secure and DOM links navigation and operations
  As a user
  I want to navigate through secure and DOM-heavy links
  So that protected routes and complex UI behaviors are validated

  Background:
    Given I open homepage for secure dom links suite

  @secure-file-download
  Scenario: Secure File Download should enforce protected access behavior
    When I navigate to secure dom link "Secure File Download"
    Then I should be on secure dom path "/download_secure" or "/login"
    And I perform secure file download operation

  @shadow-dom
  Scenario: Shadow DOM should expose paragraph content from shadow root
    When I navigate to secure dom link "Shadow DOM"
    Then I should be on secure dom path "/shadowdom"
    And I perform shadow dom operation

  @shifting-content
  Scenario: Shifting Content should open menu example
    When I navigate to secure dom link "Shifting Content"
    Then I should be on secure dom path "/shifting_content"
    And I perform shifting content operation

  @slow-resources
  Scenario: Slow Resources should load correctly and return API success
    When I navigate to secure dom link "Slow Resources"
    Then I should be on secure dom path "/slow"
    And I perform slow resources operation

  @sortable-data-tables
  Scenario: Sortable Data Tables should sort last names ascending
    When I navigate to secure dom link "Sortable Data Tables"
    Then I should be on secure dom path "/tables"
    And I perform sortable data tables operation

  @status-codes
  Scenario: Status Codes should show 200 status text and API code
    When I navigate to secure dom link "Status Codes"
    Then I should be on secure dom path "/status_codes"
    And I perform status codes operation

  @typos
  Scenario: Typos page should contain the expected typo variation
    When I navigate to secure dom link "Typos"
    Then I should be on secure dom path "/typos"
    And I perform typos operation

  @wysiwyg-editor
  Scenario: WYSIWYG Editor should show and update editor text
    When I navigate to secure dom link "WYSIWYG Editor"
    Then I should be on secure dom path "/tinymce"
    And I perform wysiwyg editor operation
