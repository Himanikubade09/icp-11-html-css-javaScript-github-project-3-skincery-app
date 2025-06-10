let firstname = document.getElementById("firstname").value;
let email = document.getElementById("email");
let mobno = document.getElementById("mobno");
let pass = document.getElementById("pass");
let confirmpass = document.getElementById("confirmpass");

function fetch()
{
  if(pass != confirmpass)
  {
    alert("Password and Confirm Password should be same");
  }
  else{
    alert( `Registration Info:${firstname.value}\n`);
  }
}