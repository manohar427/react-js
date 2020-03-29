package com.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("\test")
public class MyController {

	@GetMapping("abc")
	public String getName() {
		return "Manohar";
	}
}
