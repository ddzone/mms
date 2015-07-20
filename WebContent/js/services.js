angular.
module('studentService',[]).
factory('studentFactory', ['$http','$q', function($http,$q){

	function addStudent(student) {
		console.log(student);
		deferred = $q.defer();
		$http({
			method: 'POST',
		    url: 'students.json',
		    data: student
		 }).success(function(data){
			deferred.resolve(data);   
		 }).error(function(){
			deferred.reject(error); 
		 });
		
		 return deferred.promise;
	};
	
	function getAllStudents() {
		var test;
		deferred = $q.defer();
		$http({
			method: 'GET',
		    url: 'students.json'
		 }).success(function(data){
			 deferred.resolve(data);  
		 }).error(function(){
			deferred.reject(error); 
		 });
		 return deferred.promise;
	};
	
	function deleteStudent(student) {
		var test;
		deferred = $q.defer();
		$http({
			method: 'POST',
		    url: 'students/delete.json',
		    data: student
		 }).success(function(data){
			 deferred.resolve(data);  
		 }).error(function(){
			deferred.reject(error); 
		 });
		 return deferred.promise;
	};
	
	
	return ({
		addStudent: addStudent,
		getAllStudents: getAllStudents,
		deleteStudent: deleteStudent
	});

}]);