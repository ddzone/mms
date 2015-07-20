angular.module('controllers',['studentService']).
	controller('studentCtrl', ['$scope','studentFactory',function($scope,studentFactory){
		
		
        $scope.studentList = [];
        $scope.student = {};
        $scope.disabled = 'true';
		
        getAllStudents();
        
		$scope.addStudent = function(student){
			console.log('new student is to be added');
			console.log(student);
			studentFactory.addStudent(student);
			$scope.disabled = 'true';
		}

		$scope.editStudent = function(student){
			console.log('edit a student');
			$scope.student = student;
			console.log(student);
			$scope.disabled = 'false';
		}
		
		$scope.deleteStudent = function(deleteStudent){
			console.log('delete a student');
			$scope.student = {};
			var student = {};
			var tempList = [];
			
			for(var i = 0; i < $scope.studentList.length; i++){
				student = $scope.studentList[i];
				if(student.id !== deleteStudent.id){
					tempList.push(student);
				}
			}
			
			$scope.studentList = tempList;
			studentFactory.deleteStudent(student);
			
		}
		
		function getAllStudents(){
			studentFactory.getAllStudents().then(function(students) {
				$scope.studentList = students;
				console.log($scope.studentList);
            },
            function(data) {
                console.log('students retrieval failed.');
            });
		};
		
		
}]);