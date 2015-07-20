package com.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sms.model.Student;
import com.sms.service.StudentServiceImpl;

/**
 * 
 * @author Dilaj
 *
 */
@RestController
@RequestMapping("/students")
public class StudentController {
	
	@Autowired
	private StudentServiceImpl studentService;
	
	@RequestMapping(method=RequestMethod.POST)
	public Student addStudent(@RequestBody Student student) {
		return studentService.registerStudent(student);
	}

	@RequestMapping(method = RequestMethod.GET)
    public List<Student> getAllStudents() {
		return studentService.getAllStudents();
    }
	
	@RequestMapping(value="/delete",method=RequestMethod.POST)
	public void deleteStudent(@RequestBody Student student) {
		 studentService.deleteStudent(student);
	}
}
