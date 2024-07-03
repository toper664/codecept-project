Feature: Twitter Bookmark
  In order to interact with my bookmarks
  As a user
  I want to be able to access my bookmarks
  
  Background:
    Given I have logged in to my account
    
  Scenario: join community
    Given I am on Twitter home page
    When I try to check bookmarks
    Then I should be able to remove a bookmark to a post
