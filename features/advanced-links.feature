# BDD coverage for advanced links with link-level operation checks.
@regression @advanced-links
Feature: Advanced link navigation and operations
  As a user
  I want to navigate to advanced links and execute key operations
  So that critical behavior is validated end-to-end

  Background:
    Given I open The Internet homepage for advanced links suite

  @smoke @advanced-basic-auth
  Scenario: Basic Auth link should allow successful authentication
    When I navigate to advanced link "Basic Auth"
    And I authenticate advanced Basic Auth with configured credentials
    Then I should land on advanced path "/basic_auth"
    And I should see advanced Basic Auth success content

  @advanced-broken-images
  Scenario: Broken Images page should show broken assets in UI and API
    When I navigate to advanced link "Broken Images"
    Then I should land on advanced path "/broken_images"
    And I should validate broken images through UI and API

  @advanced-challenging-dom
  Scenario: Challenging DOM page should support table actions
    When I navigate to advanced link "Challenging DOM"
    Then I should land on advanced path "/challenging_dom"
    And I perform advanced Challenging DOM operations

  @advanced-checkboxes
  Scenario: Checkboxes page should support toggle operations
    When I navigate to advanced link "Checkboxes"
    Then I should land on advanced path "/checkboxes"
    And I perform advanced checkbox operations

  @advanced-context-menu
  Scenario: Context Menu page should show context alert
    When I navigate to advanced link "Context Menu"
    Then I should land on advanced path "/context_menu"
    And I perform advanced context menu operation
