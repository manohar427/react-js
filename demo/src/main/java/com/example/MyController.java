package com.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

	@RequestMapping("/")
	public Customer getName() {

		Customer c = new Customer();
		c.setAge(12);
		c.setName("Manohar");
		return c;
	}
}
