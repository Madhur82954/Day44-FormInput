const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
   output.textContent = salary.value;
});

//UC1//
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () 
{
   let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
   if (nameRegex.test(text.value)) 
   {
      textError.textContent = "";
   }
   else 
   {
      textError.textContent = " Invalid Name";
   }
});
//UC2//
const emailInput = document.querySelector("#email");
const errorEmail = document.querySelector(".email-error");
emailInput.addEventListener('input', function () {
   let emailRegex = RegExp('^(abc).?[a-z]{3,}[@](bl).?(co).?[a-z]{2,}$');
   if (emailRegex.test(emailInput.value)) {
      errorEmail.textContent = "";
   }
   else {
      errorEmail.textContent = " Invalid Email"
   }
});
//UC3//
const mobileInput = document.querySelector("#tel");
const errorMobile = document.querySelector(".tel-error");
mobileInput.addEventListener('input', function () {
   let mobileRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$");
   if (mobileRegex.test(mobileInput.value)) {
      errorMobile.textContent = "";
   }
   else {
      errorMobile.textContent = " Invalid Mobile Number"
   }
});
//UC4//
const password = document.querySelector("#pwd");
const errorPwd = document.querySelector(".pwd-error");
password.addEventListener('input', function () {
   let pwdRegex = RegExp("^[A-Z]{1}[A-Z a-z]{5,}([!*@#$%^&+=]{1}[0-9]{1,})$");//UC5//
   if (pwdRegex.test(password.value)) {
      errorPwd.textContent = "";
   }
   else {
      errorPwd.textContent = "Invalid Password";
   }
});