$(document).ready(function() {
	var dataId = document.URL.substr(document.URL.lastIndexOf('?') + 1);
	$("#createStudentBtn").click(function(){
		CreateStudent()
	});

	$("#createCourseBtn").click(function(){
		CreateCourse()
	});

    $.ajax({
        url: 'http://localhost:8000/Course/',
    }).then(function(coursedata){
        $.each(coursedata, function( k, v ) {
            $('#course_name').append('<option value="'+v.id+'">'+v.courseName+'</option>');                  
        });
    });
});

function CreateStudent(){
	var studentName = $("#rStudentName").val();
	var dateOfBirth = $("#rDateOfBirth").val();
	var emailAddress = $("#rEmailAddress").val();
	var mobileNumber = $("#rMobileNumber").val();
	var gender = $("#rGender").val();
	var address = $("#rAddress").val();
	var courseId = $("#rCourseId").val();
	var course_select = $("select#course_name").val();

	if(studentName != "" && dateOfBirth != "" && emailAddress != "" && mobileNumber != "" && gender != "" && address != "" && courseId != "")
	{
	var postData = {
		"studentName": studentName,
		"dateOfBirth": dateOfBirth,
		"emailAddress": emailAddress,
		"mobileNumber": mobileNumber,
		"gender": gender,
		"address": address,
		"courseId": course_select,
	};

	$.ajax({
		type: 'POST',
		contentType: 'application/json; charset=utf-8',
		url: 'http://localhost:8000/Student/',
		data: JSON.stringify(postData),
		dataType: 'json',
		success: function (){
			window.location.assign("student.html")
		}
	});
	}
	else{
		alert("Please insert data");
	}
};

function CreateCourse(){
	var courseName = $("#rCourseName").val();
	var major = $("#rMajor").val();
	if(courseName != "" && major != "")
	{
		var postData = {
			"courseName": courseName,
			"major": major,
		};
		$.ajax({
			type: 'POST',
			contentType: 'application/json; charset=utf-8',
			url: 'http://localhost:8000/Course/',
			data: JSON.stringify(postData),
			dataType: 'json',
			success: function(){
				window.location.assign("course.html")
			}
		});
	}
	else 
	{
		alert("Please insert data.");
	}
};