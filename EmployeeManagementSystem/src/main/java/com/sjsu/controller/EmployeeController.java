package com.sjsu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sjsu.entity.Employees;
import com.sjsu.service.EmployeesService;

@RestController
public class EmployeeController {
	
	@Autowired
    private EmployeesService service;
	
	@GetMapping("/getEmployees/{id}")
	public Employees getEmployee(@PathVariable int id) {
		Employees emp = service.getEmployees(id);
		return emp;
	}
	
	
	@GetMapping("/getEmployees")
	public List<Employees> getEmployeeList() {
		List<Employees> emps = service.getEmployeesList();
		return emps;
	}
	
	
	//http://localhost:8080/getEmployeesPage?pageNo=1 - Change the pageNo- Each page has 25 records
	@GetMapping("/getEmployeesPage")
    public ResponseEntity<List<Employees>> getAllEmployees(
                        @RequestParam(defaultValue = "0") Integer pageNo, 
                        @RequestParam(defaultValue = "15") Integer pageSize,
                        @RequestParam(defaultValue = "empNumberPk") String sortBy) 
    {
        List<Employees> list = service.getAllEmployees(pageNo, pageSize, sortBy);
 
        return new ResponseEntity<List<Employees>>(list, new HttpHeaders(), HttpStatus.OK); 
    }
}
