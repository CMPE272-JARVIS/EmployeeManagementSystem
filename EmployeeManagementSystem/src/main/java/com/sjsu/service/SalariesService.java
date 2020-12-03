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

  public List<Salaries> getAllEmpSalaries() {
    List<Salaries> sal = repo.findAll();
    return sal;
  }

  public List<Salaries> getAllSalaries(Integer pageNo, Integer pageSize, String sortBy) {

    Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

    Page<Salaries> pagedResult = repo.findAll(paging);

    if (pagedResult.hasContent()) {
      return pagedResult.getContent();
    } else {
      return new ArrayList<Salaries>();
    }
  }

}
