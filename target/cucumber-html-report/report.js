$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/Features/taggedHooks.feature");
formatter.feature({
  "name": "Tagged Hooks Demo",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "This is first test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "StepOne",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepTwo",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.steptwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepThree",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepthree()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This is second test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Second"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "StepOne",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepTwo",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.steptwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepThree",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepthree()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This is third test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Third"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "StepOne",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepTwo",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.steptwo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "StepThree",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggedHooksStepDefinition.stepthree()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});