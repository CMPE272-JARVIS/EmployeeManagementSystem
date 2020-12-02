package com.sjsu.util;

import java.text.SimpleDateFormat;

import com.sjsu.entity.Employees;

public class DateUtil {
	
	public static Employees  convertDate(Employees emp) {
		String pattern = "MM-dd-yyyy";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		simpleDateFormat.format(emp.getBirthDate());
		simpleDateFormat.format(emp.getHireDate());
		//System.out.println(emp.toString());
		return emp;
	}

}
