package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" },
		features = "src/main/java/Features/login.feature", // It tells where your feature files are, full path is also acceptable here
		glue = {"stepDefinitions/LoginFeature"} // It tells where your step Definition files are, full path is also acceptable here
		)
public class loginFeatureRunner {

}
