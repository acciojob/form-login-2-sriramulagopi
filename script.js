//your JS code here. If required.
let first = document.getElementById("name1");
let last = document.getElementById("name2");
let number = document.getElementById("number");
let mail =  document.getElementById("mail");
let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
	alert(`
	First Name:${first.value}
	Last Name:${last.value} 
	Phone Number:${number.value}
	Email ID:${mail.value}
	`);
})