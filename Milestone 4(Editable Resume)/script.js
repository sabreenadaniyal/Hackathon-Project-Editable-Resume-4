//Get reference to the form & diaplay area
var Form = document.getElementById("resume-form");
var resumedisplayElement = document.getElementById("resume-display");
//Handle form submittion
Form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var Dob = document.getElementById("Dob").value;
    var Address = document.getElementById("Address").value;
    var Email = document.getElementById("email").value;
    var mobile = document.getElementById("phone").value;
    var Education = document.getElementById("education").value;
    var Skills = document.getElementById("skills").value;
    var Experience = document.getElementById("experience").value;
    //generate the resume content dynamically
    var resumeHTML = "\n  <h2><b> Editable Resume </b></h2>\n  <h3> Personal Information </h3>\n  <p><b> Name:</b><span contenteditable=\"true\"> ".concat(name, " </span></p>\n  <p><b> Dob:</b><span contenteditable=\"true\"> ").concat(Dob, " </span></p>\n  <p><b> Address:</b><span contenteditable=\"true\"> ").concat(Address, " </span></p>\n  <p><b> Email:</b><span contenteditable=\"true\"> ").concat(Email, " </span></p>\n  <p><b> mobile:</b><span contenteditable=\"true\"> ").concat(mobile, " </span></p>\n  \n  <h3> Education </h3>\n  <p> ").concat(Education, " </p>\n\n  <h3> Skills </h3>\n  <p contenteditable=\"true\"> ").concat(Skills, " </p>\n\n  <h3> Experience </h3>\n  <p contenteditable=\"true\"> ").concat(Experience, " </p> ");
    //Display generated resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume diaplay element is missing");
    }
});
