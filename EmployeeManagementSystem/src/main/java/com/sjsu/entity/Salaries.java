package com.sjsu.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "salaries")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Salaries implements Serializable {

  @Id
  @Column(name = "emp_no")
  private Integer empNumberFk;

  @Column(name = "salary")
  private Integer salary;

  @Column(name = "from_date")
  private String fromdate;

  @Column(name = "to_date")
  private String toDate;

  public Salaries() {
  }

  public Salaries(Integer empNumberFk, Integer salary, String fromdate, String toDate) {
    this.empNumberFk = empNumberFk;
    this.salary = salary;
    this.fromdate = fromdate;
    this.toDate = toDate;
  }

  public Integer getEmpNumberFk() {
    return this.empNumberFk;
  }

  public void setEmpNumberPk(Integer empNumberFk) {
    this.empNumberFk = empNumberFk;
  }

  public Integer getSalary() {
    return this.salary;
  }

  public void setSalary(Integer salary) {
    this.salary = salary;
  }

  public String getFromdate() {
    return this.fromdate;
  }

  public void setFromdate(Date fromdate) {
    this.fromdate = fromdate;
  }

  public String getToDate() {
    return this.toDate;
  }

  public void setToDate(Date toDate) {
    this.toDate = toDate;
  }

}
