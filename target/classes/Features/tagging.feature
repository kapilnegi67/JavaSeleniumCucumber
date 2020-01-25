Feature: Tagging explanation

@SmokeTest
Scenario: Login with correct username and password
Given Dummy Correct Login with username and password

@SmokeTest @RegressionTest
Scenario: Login with incorrect username and password
Given Dummy InCorrect Login with username and password

@RegressionTest
Scenario: Create a User
Given Dummy Create a User

@SmokeTest @RegressionTest
Scenario: Send an email
Given Dummy Send an email

Scenario: Enter material details
Given Dummy Enter material details

@User
Scenario: Search User
Given Dummy Search User
