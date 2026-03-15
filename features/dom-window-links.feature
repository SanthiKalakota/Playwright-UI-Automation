# BDD feature for Dom-Window links suite.
# Covers: Key Presses, Large & Deep DOM, Multiple Windows,
#          Nested Frames, Notification Messages, Redirect Link.

@dom-window-links @regression
Feature: Dom and Window Feature Links

  Background:
    Given I am on the Heroku home page

  # ── Key Presses ─────────────────────────────────────────────────────────
  @dom-window-links @smoke
  Scenario: Navigate to Key Presses and detect a pressed key
    When I click the "Key Presses" link
    Then I should be on the "/key_presses" page
    And the Key Presses input is visible
    When I press the "Tab" key in the input
    Then the result should show "You entered: TAB"

  # ── Large & Deep DOM ────────────────────────────────────────────────────
  @dom-window-links
  Scenario: Navigate to Large & Deep DOM and verify deep cell
    When I click the "Large & Deep DOM" link
    Then I should be on the "/large" page
    And the large DOM page is loaded
    And the deep cell "sibling-50.3" exists in the DOM

  # ── Multiple Windows ────────────────────────────────────────────────────
  @dom-window-links @smoke
  Scenario: Navigate to Multiple Windows and open a new tab
    When I click the "Multiple Windows" link
    Then I should be on the "/windows" page
    And the Multiple Windows page is loaded
    When I open the new window
    Then the new window should be at path "/windows/new"
    And the new window should have heading "New Window"

  # ── Nested Frames ───────────────────────────────────────────────────────
  @dom-window-links
  Scenario: Navigate to Nested Frames and verify frame content
    When I click the "Nested Frames" link
    Then I should be on the "/nested_frames" page
    And the nested frames should contain texts "LEFT", "MIDDLE", "RIGHT" and "BOTTOM"

  # ── Notification Messages ───────────────────────────────────────────────
  @dom-window-links @smoke
  Scenario: Navigate to Notification Messages and trigger a flash message
    When I click the "Notification Messages" link
    Then I should be on the "/notification_message_rendered" page
    And the Notification Messages page is loaded
    When I trigger a notification
    Then a valid notification flash message should be displayed

  # ── Redirect Link ───────────────────────────────────────────────────────
  @dom-window-links
  Scenario: Navigate to Redirect Link and be redirected to status codes
    When I click the "Redirect Link" link
    Then I should be on the "/redirector" page
    And the Redirector page is loaded
    When I click the redirect link
    Then I should be redirected to "/status_codes"
