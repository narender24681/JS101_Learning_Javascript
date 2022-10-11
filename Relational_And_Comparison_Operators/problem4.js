// Given stored username and password and input username and password, Print if the user can login or not.

var storedUsername = "Raju"
var storedPassword = "Raju@123"

var inputUsername = "Raju"
var inputPassword = "Raju@123"

if (storedUsername == inputUsername && storedPassword == inputPassword) {
  console.log("Login successfull");
}
else {
  console.log("Invalid username/password");
}
