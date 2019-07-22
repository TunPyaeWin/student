$(document).ready(function(){
	RetrieveCourse();
});

function RetrieveCourse(){
	$('#courseTableBody').empty();
	$.ajax({
		type: 'GET',
		contentType: 'application/json; charset=utf-8',
		url: 'http://localhost:8000/Course/',
		dataType: 'json',
	}).then(function(data){
		for(var i=0; i<data.length; i++)
		{
			var courseId = data[i].id;
			var courseName = data[i].courseName;
			var major = data[i].major;
			$('#courseTableBody').append('<tr>'+
																					'<td>'+courseId+'</td>'+
																					'<td>'+courseName+'</td>'+
																					'<td>'+major+'</td>'+
																					'<td><a href="courseDetail.html?'+courseId+'"><button type="submit" class="btn btn-info">Detail</button></a></td>'+
												'<td><button type="button" class="btn btn-danger" onclick="DeleteCourse('+courseId+');">Delete</button></td>'+
											'</tr>');
		}
	});
};

function DeleteCourse(id){
    var courseId = id;
    if(courseId != "")
    {
        $.ajax({
            type: 'DELETE',
            contentType: 'application/json; charset=utf-8',
            url: 'http://localhost:8000/Course/'+courseId+'/',
            dataType: 'json',
            success: function(){
                window.location.assign("course.html")
            }
        });
    }
    else 
    {
        alert("Please insert student ID");
    }
};