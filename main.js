function dummy() {
  console.log("This is a dummy file");
}

function myFunction() {
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunctionCheck() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}