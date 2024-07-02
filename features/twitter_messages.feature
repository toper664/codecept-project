Feature: Twitter Messages
  In order to communicate with my friends
  As a user
  I want to be able to send messages at Twitter
  
  Background:
    Given I have logged in to my account

  Scenario: send messages
    Given I am on Twitter messages page
    When I try to create a new chat room
    And send a message
    Then I should see my messages sent

  Scenario: new group
    Given I am on Twitter messages page
    When I try to create a new group chat room
    Then I should see the room created