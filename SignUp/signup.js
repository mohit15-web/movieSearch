function validateForm(e) {
  e.preventDefault();
  var Username = document.forms["myForm"]["name"].value;
  var Useremail = document.forms["myForm"]["email"].value;
  var Userpassword = document.forms["myForm"]["password"].value;

  console.log(Username, Useremail, Userpassword);

  let users = [];

  let user = {
    name: Username,
    email: Useremail,
    password: Userpassword,
  };

  users.push(user);

  console.log(users);

  let userString = JSON.stringify(users);
  localStorage.setItem("userList", userString);
}
