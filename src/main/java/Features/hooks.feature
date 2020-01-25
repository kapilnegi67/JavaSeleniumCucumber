Feature: Hooks Demo

Scenario: Hooks DemoOne
Given DemoOneStepOne
Given DemoOneStepTwo
Given DemoOneStepThree

Scenario: Hooks DemoTwo
Given DemoTwoStepOne
Given DemoTwoStepTwo
Given DemoTwoStepThree

Scenario Outline: Hooks DemoScenarioOutline
Given user have "<name>"

Examples:
| name  |
| name1 |
| name2 |
| name3 |
| name4 |