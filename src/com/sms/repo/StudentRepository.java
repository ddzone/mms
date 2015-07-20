package com.sms.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sms.model.Student;

/**
 * 
 * @author Dilaj
 *
 */
@Repository("studentRepository")
public interface StudentRepository extends CrudRepository<Student, String>{
		Student findByFirstName(String firstName);
}
