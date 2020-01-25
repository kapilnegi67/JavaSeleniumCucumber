Feature: Free CRM Login Feature With Example

Scenario Outline: With Example Free CRM Login Test Scenario

Given User is already on Login Page
When title of Login Page is Cogmento CRM
Then User enters "<username>" and "<password>"
Then User clicks on Login button
Then User is on Home Page
Then close the browser

Examples:
    | username | password |
    | kapil_negi67@yahoo.com | Freecrm@2020 |
    | kapil_negi671@yahoo.com | Freecrm1@2020 |
    | abc@def.com | somepassword |
