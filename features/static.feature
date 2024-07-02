Feature: Static Website
  In order to see my class materials
  As a user
  I want to be able to access my teacher website

  Scenario: get materials
    Given I am on landing page
    When I try to find my materials
    Then I should be able to download my materials
