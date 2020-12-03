package com.sjsu.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.sjsu.entity.Salaries;
import com.sjsu.repository.SalaryRepository;

@Service
public class SalariesService {

  @Autowired
  private SalaryRepository repo;

  public List<Salaries> getEmpSalaries(int id) {
    List<Salaries> sal = repo.findByEmpNumberFk(id);// .orElse(null);
    return sal;
  }

}
