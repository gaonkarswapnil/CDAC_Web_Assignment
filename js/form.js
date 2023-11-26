function checkData()
{
    var uname=document.myform.fname.value;
    var regexp="^[a-zA-z ]{3,15}$";

    if(uname=="")
    {
        window.alert("This fild is required");
        document.getElementById("fanme").focus();
        return false;
    }
    if(!uname.match(regexp))
    {
        window.alert("Invalid Input");
        document.getElementById("fanme").focus();
        return false;
    }
}