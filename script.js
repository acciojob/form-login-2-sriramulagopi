//your JS code here. If required.
let first = document.getElementById("name1");
let last = document.getElementById("name2");
let number = document.getElementById("number");
let mail =  document.getElementById("mail");
let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("First Name:"+first.value);
    console.log("Last Name:"+last.value);
    console.log("Phone Number:"+number.value);
    console.log("Email ID:"+mail.value);
})