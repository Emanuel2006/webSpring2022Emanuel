/*These lines of javascript are supposed to display the information given in the form in the paragraphs in the after div and make the beofore div disappear when the button with the id "input_username_username_button" is pressed*/
function submitForum(){
         var x = document.getElementById("before");
         if (x.style)
          let username=docuemt.userform.imput_username.value;
          let userEmail=document.userform.imput_email.value;
          let userPhoneNum=document.userform.imput_phoenNumber.value;
          let usernameResult=document.getElementById("nameResult");
          let emailResult=document.getElementById("emailResult");
          let phoneResult=document.getElementById("phoneNumResult");

          usernameResult.innerHTML=username; 
          emailResult.innerHTML=userEmail;
          phoneResult.innerHTML=userphoneNum;
  console.log(userEmail, userPhone, userPhoneName);
}
// extra credit "Ivan"
   var x = document.getElementById("before");
   var y = document.getElementById("after");
  if (x.style.display === "none") {
 x.style.display = "block";
 x.style.opacity = "1";
 y.style.display = "none"
 y.style.opacity ="0"
}

/*These lines of javascript cause the form is reappear when the button in the results are pressed.*/
function returnHome(){
  var x = document.getElementById("before");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}