# BDD scenarios for modal, upload, auth, and frame interactions.
@regression @interaction-links
Feature: Interaction-heavy links navigation and operations
  As a user
  I want to navigate through interaction-heavy links
  So that modal, file, auth, and frame behaviors are validated

  Background:
    Given I open homepage for interaction links suite

  @interaction-entry-ad
  Scenario: Entry Ad should show and close the modal
    When I navigate to interaction link "Entry Ad"
    Then I should be on interaction path "/entry_ad"
    And I perform entry ad operation

  @interaction-exit-intent
  Scenario: Exit Intent should show the modal on exit
    When I navigate to interaction link "Exit Intent"
    Then I should be on interaction path "/exit_intent"
    And I perform exit intent operation

  @interaction-file-download
  Scenario: File Download should download a file and expose a valid link
    When I navigate to interaction link "File Download"
    Then I should be on interaction path "/download"
    And I perform file download operation

  @interaction-file-upload
  Scenario: File Upload should upload a sample file
    When I navigate to interaction link "File Upload"
    Then I should be on interaction path "/upload"
    And I perform file upload operation

  @interaction-floating-menu
  Scenario: Floating Menu should stay visible while scrolling
    When I navigate to interaction link "Floating Menu"
    Then I should be on interaction path "/floating_menu"
    And I perform floating menu operation

  @interaction-forgot-password
  Scenario: Forgot Password should submit the email form
    When I navigate to interaction link "Forgot Password"
    Then I should be on interaction path "/forgot_password"
    And I perform forgot password operation

  @interaction-form-authentication
  Scenario: Form Authentication should login and logout successfully
    When I navigate to interaction link "Form Authentication"
    Then I should be on interaction path "/login"
    And I perform form authentication operation

  @interaction-frames
  Scenario: Frames should support iframe and nested frame checks
    When I navigate to interaction link "Frames"
    Then I should be on interaction path "/frames"
    And I perform frames operations
