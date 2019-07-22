$(document).ready(function(){
	$.ajax({
		url: 'http://localhost:8000/Student/',
	}).then(function(data){
		for(let i=0; i<data.length; i++){
			$.when(
				$.ajax({url: 'http://localhost:8000/Course/'+data[i].courseId+'/'})
				).then(function(courseData){					
					$('#studentTableBody').append('<tr>'+
												'<td>'+data[i].id+'</td>'+
												'<td>'+data[i].studentName+'</td>'+
												'<td>'+data[i].dateOfBirth+'</td>'+
												'<td>'+data[i].emailAddress+'</td>'+
												'<td>'+data[i].mobileNumber+'</td>'+
												'<td>'+data[i].gender+'</td>'+
												'<td>'+data[i].address+'</td>'+
												'<td>'+courseData.courseName+'</td>'+
												'<td><a href="studentDetail.html?'+data[i].id+'"><button type="submit" class="btn btn-info">Detail</button></a></td>'+
												'<td><button type="button" class="btn btn-danger" onclick="DeleteStudent('+data[i].id+');">Delete</button></td>'+
											'</tr>');
				}); 
			
		};
	});
});

/*Student RETRIEVE Data Function*/


function DeleteStudent(id) {
    var studentId = id;
    if (studentId != "") {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',
            url: 'http://localhost:8000/Student/' + studentId + '/',
            dataType: 'json',
            success: function() {
                window.location.assign("student.html")
            }
        });
    } else {
        alert("Please insert student ID");
    }
}