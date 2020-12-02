package com.sjsu.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sjsu.entity.Employees;
import com.sjsu.repository.EmployeeRepository;

@Service
public class EmployeesService {
	
	@Autowired
	private EmployeeRepository repo;

	public Employees getEmployees(int id) {
		Employees emp = repo.getOne(id);
		//DateUtil.convertDate(emp);
		return emp;
	}

	public List<Employees> getEmployeesList() {
		List<Employees> allEmployees = repo.findAll();
		return allEmployees;
	}

	public List<Employees> getAllEmployees(Integer pageNo, Integer pageSize, String sortBy) {

        Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
 
        Page<Employees> pagedResult = repo.findAll(paging);
         
        if(pagedResult.hasContent()) {
            return pagedResult.getContent();
        } else {
            return new ArrayList<Employees>();
        }
	}
	
	
	
	
	
	

}
