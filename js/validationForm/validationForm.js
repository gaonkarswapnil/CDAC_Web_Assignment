function checkData() {
    var uname = document.myform.fname.value;
    var upass = document.myform.password.value;
    var email = document.myform.email.value;
    var contact = document.myform.contact.value;
    var uedu = document.myform.edu;
    var regName = "^[a-zA-Z ]{3,20}$";
    // var regpass = "^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,18}$";
    var regContact = "^[7-9]\d{9}$";
    var regEmail = " /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
    if (uname == "") {
        window.alert("This field is required");
        document.getElementById("fname").focus();
        return false;
    }
    if (!uname.match(regName)) {
        window.alert("New field must contain only character min-3 and max-20 characters");
        document.getElementById("fname").focus();
        return false;
    }

    if (upass == "") {
        window.alert("This field is required");
        document.getElementById("password").focus();
        return false;
    }
    if (!upass.match(regpass)) {
        window.alert("password Invalid. Please try again");
        document.getElementById("password").focus();
        return false;
    }

    if (email == "") {
        window.alert("This field is required");
        document.getElementById("email").focus();
        return false;
    }
    if (!email.match(regEmail)) {
        window.alert("email Invalid. Please try again");
        document.getElementById("email").focus();
        return false;
    }

    if (contact == "") {
        window.alert("This field is required");
        document.getElementById("email").focus();
        return false;
    }
    if (!contact.match(regContact)) {
        window.alert("contact Invalid. Please try again");
        document.getElementById("contact").focus();
        return false;
    }


    if (uedu[0].checked == false && uedu[1].checked == false && uedu[2].checked == false && uedu[3].checked == false) {
        window.alert("Please select your Qualification");
        return false;
    }
}