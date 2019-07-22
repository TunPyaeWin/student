$(document).ready(function() {
    var dataId = document.URL.substr(document.URL.lastIndexOf('?') + 1);
    InsertDataIntoStudentUpdateModal(dataId)
    InsertDataIntoCourseUpdateModal(dataId)
    
    $("#updateStudentBtn").click(function() {
        UpdateStudent(dataId);
    });

    $("#deleteStudentBtn").click(function() {
        DeleteStudent(dataId);
    });


    $("#updateCourseBtn").click(function() {
        UpdateCourse(dataId);
    });


    $("#deleteCourseBtn").click(function() {
        DeleteCourse(dataId);
    });

});

function UpdateStudent(id) {
    var studentId = id
    var studentName = $("#uStudentName").val();
    var dateOfBirth = $("#uDateOfBirth").val();
    var emailAddress = $("#uEmailAddress").val();
    var mobileNumber = $("#uMobileNumber").val();
    var gender = $("#uGender").val();
    var address = $("#uAddress").val();
    var courseId = $("select#courseName").val();

    var putData = {
        "studentName": studentName,
        "dateOfBirth": dateOfBirth,
        "emailAddress": emailAddress,
        "mobileNumber": mobileNumber,
        "gender": gender,
        "address": address,
        "courseId": courseId,
    };

    $.ajax({
        type: 'PUT',
        contentType: 'application/json; charset=utf-8',
        url: 'http://localhost:8000/Student/' + studentId + '/',
        data: JSON.stringify(putData),
        dataType: 'json',
        success: function() {
            window.location.assign("student.html")
        }
    });
};

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

function InsertDataIntoStudentUpdateModal(id) {
    $.ajax({
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        url: 'http://localhost:8000/Student/'+id+'/',
        dataType: 'json',
    }).then(function(data) {
        $('#uStudentId').val(data.id);
        $('#uStudentName').val(data.studentName);
        $('#uDateOfBirth').val(data.dateOfBirth);
        $('#uEmailAddress').val(data.emailAddress);
        $('#uMobileNumber').val(data.mobileNumber);
        $('#uGender').val(data.gender);
        $('#uAddress').val(data.address);
        $('#courseName').find(":selected").text(data.courseName);
        $.ajax({
                url: "http://localhost:8000/Course/"
            }).then(function(coursedata){
                $.each(coursedata, function( k, v ) {
                        $('#courseName').append('<option value="'+v.id+'">'+v.courseName+'</option>');                 
                });
            });
    });
};


function UpdateCourse(id){
    var courseId = id;
    var courseName = $("#uCourseName").val();
    var major = $("#uMajor").val();
    if(courseName != "" && major != "")
    {
        var putData = {
            "courseName": courseName,
            "major": major,
        };
        $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: 'http://localhost:8000/Course/'+courseId+'/',
            data: JSON.stringify(putData),
            dataType: 'json',
            success: function(){
                window.location.assign("course.html")
            }
        });
    }
    else 
    {
        alert("Please insert data");
    }
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

function InsertDataIntoCourseUpdateModal(id){
    $.ajax({
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        url: 'http://localhost:8000/Course/'+id+'/',
        dataType: 'json',
    }).then(function(data){
        console.log(data);
        $('#uCourseId').val(data.id);
        $('#uCourseName').val(data.courseName);
        $('#uMajor').val(data.major);
    });
};