package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class TaggedHooksStepDefinition {
	
	// Global Hook: Applicable to all the scenarios
	@Before
	public void setup() {
		System.out.println("Setup Method");
	}
	
	// Global Hook: Applicable to all the scenarios
	@After
	public void tearDown() {
		System.out.println("Tear Down\n\n");
	}
	
	// Local Hook: a setup for scenarios with tag @First will run before the global setup for tag @First
	@Before("@First")
	public void beforeFirst() {
		System.out.println("beforeFirst");
	}
	
	// Local Hook: a tear down for scenarios with tag @First will run after the global teardown for tag @First
	@After("@First")
	public void AfterFirst() {
		System.out.println("AfterFirst\n\n");
	}
	
	@Given("StepOne")
	public void stepone() {
	    System.out.println("StepOne");
	}

	@Given("StepTwo")
	public void steptwo() {
		System.out.println("StepTwo");
	}

	@Given("StepThree")
	public void stepthree() {
		System.out.println("StepTwo");
	}

}
