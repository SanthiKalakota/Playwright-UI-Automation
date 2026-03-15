# BDD scenarios for A/B Testing navigation and content checks.
@regression @ab-testing
Feature: A/B Testing
  As a user
  I want to navigate to the A/B Testing page from the homepage
  So that I can verify the page loads with correct content

  Background:
    Given I open the The Internet homepage

  @smoke
  Scenario: Navigate to A/B Testing page from homepage
    When I navigate to "A/B Testing" link
    Then I should be on path "/abtest"

  Scenario: A/B Testing page displays valid heading and description
    When I navigate to "A/B Testing" link
    Then I should be on path "/abtest"
    And I should see A/B Testing page content
