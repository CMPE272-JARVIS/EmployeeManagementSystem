package com.sjsu.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.sjsu.entity.Salaries;

@Repository
public interface SalaryRepository extends JpaRepository<Salaries, Integer> {
  List<Salaries> findByEmpNumberFk(Integer empNumberFk);
}
