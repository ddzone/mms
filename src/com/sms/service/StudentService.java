package com.sms.service;

import java.util.List;

import com.sms.model.Student;
/**
 * 
 * @author Dilaj
 *
 */
public interface StudentService {
	
	List<Student> getAllStudents();
	Student registerStudent(Student student);
	void deleteStudent(Student student);
}
