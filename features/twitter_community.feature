Feature: Twitter Community
  In order to interact with communities
  As a user
  I want to be able to see and join a community
  
  Background:
    Given I have logged in to my account
  Scenario: join community
    Given I am on Twitter community page
    When I try to explore communities
    Then I should be able to join a community I see fit
    And see their latest feeds