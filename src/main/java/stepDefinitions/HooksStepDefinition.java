package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class HooksStepDefinition {
	
	@Before
	public void Setup() {
		System.out.println("Setup");
	}
	
	@After
	public void TearDown() {
		System.out.println("TearDown");
	}
	
	@Given("DemoOneStepOne")
	public void demoonestepone() {
		System.out.println("DemoOneStepOne");
	}

	@Given("DemoOneStepTwo")
	public void demoonesteptwo() {
		System.out.println("DemoOneStepTwo");
	}

	@Given("DemoOneStepThree")
	public void demoonestepthree() {
		System.out.println("DemoOneStepThree");
	}
	
	@Given("DemoTwoStepOne")
	public void demotwostepone() {
		System.out.println("DemoTwoStepOne");
	}

	@Given("DemoTwoStepTwo")
	public void demotwosteptwo() {
		System.out.println("DemoTwoStepTwo");
	}

	@Given("DemoTwoStepThree")
	public void demotwostepthree() {
		System.out.println("DemoTwoStepThree");
	}
	
	@Given("user have {string}")
	public void user_have(String string) {
	    System.out.println(string);
	}

}
