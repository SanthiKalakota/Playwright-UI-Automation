# BDD scenarios for browser interaction and JavaScript behavior pages.
@regression @browser-ui-links
Feature: Browser UI links navigation and operations
  As a user
  I want to navigate through browser-driven UI pages
  So that hover, slider, scroll, dialog, and geolocation behaviors are validated

  Background:
    Given I open homepage for browser UI links suite

  @browser-geolocation
  Scenario: Geolocation should display configured coordinates
    When I navigate to browser UI link "Geolocation"
    Then I should be on browser UI path "/geolocation"
    And I perform geolocation operation

  @browser-horizontal-slider
  Scenario: Horizontal Slider should move to the target value
    When I navigate to browser UI link "Horizontal Slider"
    Then I should be on browser UI path "/horizontal_slider"
    And I perform horizontal slider operation

  @browser-hovers
  Scenario: Hovers should reveal the first user profile
    When I navigate to browser UI link "Hovers"
    Then I should be on browser UI path "/hovers"
    And I perform hovers operation

  @browser-infinite-scroll
  Scenario: Infinite Scroll should load more content
    When I navigate to browser UI link "Infinite Scroll"
    Then I should be on browser UI path "/infinite_scroll"
    And I perform infinite scroll operation

  @browser-inputs
  Scenario: Inputs should accept and increment a numeric value
    When I navigate to browser UI link "Inputs"
    Then I should be on browser UI path "/inputs"
    And I perform inputs operation

  @browser-jquery-ui-menus
  Scenario: JQuery UI Menus should open the Downloads submenu
    When I navigate to browser UI link "JQuery UI Menus"
    Then I should be on browser UI path "/jqueryui/menu"
    And I perform jquery ui menus operation

  @browser-javascript-alerts
  Scenario: JavaScript Alerts should handle alert confirm and prompt dialogs
    When I navigate to browser UI link "JavaScript Alerts"
    Then I should be on browser UI path "/javascript_alerts"
    And I perform javascript alerts operations

  @browser-javascript-error
  Scenario: JavaScript onload event error should expose page error behavior
    When I navigate to browser UI link "JavaScript onload event error"
    Then I should be on browser UI path "/javascript_error"
    And I perform javascript error operation
