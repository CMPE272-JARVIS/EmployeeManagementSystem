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
import org.springframework.web.bind.annotation.CrossOrigin;

import com.sjsu.entity.Salaries;
import com.sjsu.service.SalariesService;

@RestController
@CrossOrigin(origins = "*")
public class SalariesController {

  @Autowired
  private SalariesService salService;

  @GetMapping("/getEmpSalary/{id}")
  public List<Salaries> getEmpSalary(@PathVariable int id) {
    List<Salaries> sal = salService.getEmpSalaries(id);
    return sal;
  }

  @GetMapping("/getAllEmpSal")
  public List<Salaries> getAllEmpSalary() {
    List<Salaries> sal = salService.getAllEmpSalaries();
    return sal;
  }

  @GetMapping("/getSalariesPage")
  public ResponseEntity<List<Salaries>> getSalariesPage(@RequestParam(defaultValue = "0") Integer pageNo,
      @RequestParam(defaultValue = "15") Integer pageSize) {// }, @RequestParam(defaultValue = "empNumberFk") String
                                                            // sortBy) {
    List<Salaries> list = salService.getAllSalaries(pageNo, pageSize);

    return new ResponseEntity<List<Salaries>>(list, new HttpHeaders(), HttpStatus.OK);
  }

}
