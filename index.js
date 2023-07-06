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