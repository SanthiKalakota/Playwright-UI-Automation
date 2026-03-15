# BDD scenarios for digest and dynamic link operations.
@regression @auth-dynamic-links
Feature: Digest and dynamic links navigation and operations
  As a user
  I want to navigate through digest and dynamic links
  So that key behaviors are validated with UI and API checks

  Background:
    Given I open homepage for auth dynamic suite

  @auth-digest
  Scenario: Digest Authentication should validate credentials through API
    When I navigate to auth dynamic link "Digest Authentication"
    Then I should be on auth dynamic path "/digest_auth"
    And I verify digest authentication through API

  @auth-disappearing-elements
  Scenario: Disappearing Elements should allow menu navigation operation
    When I navigate to auth dynamic link "Disappearing Elements"
    Then I should be on auth dynamic path "/disappearing_elements"
    And I perform disappearing elements operation

  @auth-drag-drop
  Scenario: Drag and Drop should swap columns
    When I navigate to auth dynamic link "Drag and Drop"
    Then I should be on auth dynamic path "/drag_and_drop"
    And I perform drag and drop operation

  @auth-dropdown
  Scenario: Dropdown should allow selecting multiple options
    When I navigate to auth dynamic link "Dropdown"
    Then I should be on auth dynamic path "/dropdown"
    And I perform dropdown selection operation

  @auth-dynamic-content
  Scenario: Dynamic Content should change after refresh
    When I navigate to auth dynamic link "Dynamic Content"
    Then I should be on auth dynamic path "/dynamic_content"
    And I perform dynamic content refresh operation

  @auth-dynamic-controls
  Scenario: Dynamic Controls should support checkbox and input operations
    When I navigate to auth dynamic link "Dynamic Controls"
    Then I should be on auth dynamic path "/dynamic_controls"
    And I perform dynamic controls operation

  @auth-dynamic-loading
  Scenario: Dynamic Loading should show Hello World in both examples
    When I navigate to auth dynamic link "Dynamic Loading"
    Then I should be on auth dynamic path "/dynamic_loading"
    And I perform dynamic loading operations
