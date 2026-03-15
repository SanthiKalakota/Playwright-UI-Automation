# BDD scenarios for Add/Remove Elements navigation and button operations.
@regression @add-remove
Feature: Add/Remove Elements
  As a user
  I want to navigate to the Add/Remove Elements page from the homepage
  So that I can dynamically add and remove elements and verify the counts

  Background:
    Given I open the The Internet homepage

  @smoke
  Scenario: Navigate to Add/Remove Elements page from homepage
    When I navigate to "Add/Remove Elements" link
    Then I should be on path "/add_remove_elements/"

  Scenario: Add multiple elements and verify count
    When I navigate to "Add/Remove Elements" link
    Then I should be on path "/add_remove_elements/"
    And I add 3 elements
    Then I should see 3 delete buttons

  Scenario: Remove all added elements and verify empty state
    When I navigate to "Add/Remove Elements" link
    Then I should be on path "/add_remove_elements/"
    And I add 3 elements
    Then I should see 3 delete buttons
    When I remove all elements
    Then I should see 0 delete buttons

  Scenario: Add a single element and remove it
    When I navigate to "Add/Remove Elements" link
    Then I should be on path "/add_remove_elements/"
    And I add 1 elements
    Then I should see 1 delete buttons
    When I remove all elements
    Then I should see 0 delete buttons
