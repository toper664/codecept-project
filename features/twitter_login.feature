Feature: Twitter Login
  In order to see my Twitter Account
  As a user
  I want to be able to log in to my account

  Scenario: login
    Given I am on Twitter login page
    When I try to enter my email and password
    Then I should be able to login
    And see Twitter dashboard with my account
