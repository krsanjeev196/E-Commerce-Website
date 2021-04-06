function validation(){
	var userfirstname = document.getElementById('firstname').value;
	var userlastname = document.getElementById('lastname').value;
	var number = document.getElementById('number').value;
	var email = document.getElementById('email').value;
	var line1 = document.getElementById('line1').value;
	var line2 = document.getElementById('line2').value;
	var pincode = document.getElementById('pin').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var password = document.getElementById('password').value;
	var cpassword = document.getElementById('cpassword').value;


	var namecheck = /^[A-Za-z]{3,50}$/;
	var numbercheck = /^[6789][0-9]{9}$/;
	var emailcheck = /^[a-z0-9._]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;
	var line1check = /^[A-Za-z0-9-,]{1,}$/;
	var line2check = /^[A-Za-z0-9-,]{1,}$/;
	var pincheck = /^[0-9]{6}$/;
	var citycheck = /^[A-Za-z]{2,}$/;
	var statecheck = /^[A-Za-z]{2,}$/;
	var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9_!@#$%^&*]{8,16}$/;

if (namecheck.test(userfirstname)) {
	document.getElementById('errorfirstname').innerHTML = " ";
}
else{
	document.getElementById('errorfirstname').innerHTML = "**Invalid name ";
	return false;
}
if (namecheck.test(userlastname)) {
	document.getElementById('errorlastname').innerHTML = " ";
}
else{
	document.getElementById('errorlastname').innerHTML = "**Invalid name ";
	return false;
}
if (numbercheck.test(number)) {
	document.getElementById('errornumber').innerHTML = " ";
}
else{
	document.getElementById('errornumber').innerHTML = "**Invalid number";
	return false;
}
if (emailcheck.test(email)) {
	document.getElementById('erroremail').innerHTML = " ";
}
else{
	document.getElementById('erroremail').innerHTML = "**Invalid email syntax ";
	return false;
}

/*

if (line1check.test(line1)) {
	document.getElementById('errorline1').innerHTML = " ";
}
else{
	document.getElementById('errorline1').innerHTML = "**Invalid ";
	return false;
}


if (line2check.test(line2)) {
	document.getElementById('errorline2').innerHTML = " ";
}
else{
	document.getElementById('errorline2').innerHTML = "**Invalid ";
	return false;
}

*/


if (pincheck.test(pincode)) {
	document.getElementById('errorpin').innerHTML = " ";
}
else{
	document.getElementById('errorpin').innerHTML = "**Invalid Pin-Code ";
	return false;
}
if (citycheck.test(city)) {
	document.getElementById('errorcity').innerHTML = " ";
}
else{
	document.getElementById('errorcity').innerHTML = "**Invalid";
	return false;
}
if (statecheck.test(state)) {
	document.getElementById('errorstate').innerHTML = " ";
}
else{
	document.getElementById('errorstate').innerHTML = "**Invalid ";
	return false;
}
if (passwordcheck.test(password)) {
	document.getElementById('errorpassword').innerHTML = " ";
}
else{
	document.getElementById('errorpassword').innerHTML = "**Atleast 1 uppercase, 1 lowercase, 1 numeric, 1 special-character and password should be between 8 to 16 characters";
	return false;
}
if (cpassword.match(password)) {
	document.getElementById('errorcpassword').innerHTML = " ";
}
else{
	document.getElementById('errorcpassword').innerHTML = "**Password not matching";
	return false;
}

}