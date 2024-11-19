function validation(){
	return (validation1() && ageValide() && mailValide());
}
function validation1(){

	if (document.getElementById("N").value == "" && document.getElementById("R").value == "" && document.getElementById("M").value == "" && document.getElementById("A").value == "") {
		alert("1");
		return false;
	}
	if(!document.getElementById("FR").checked && !document.getElementById("AR").checked &&!document.getElementById("ENG").checked ){
		alert("2");
		return false;
	}
	if(document.getElementById("Profession").value== "None"){
		alert("3");
		return false;
	}
	return true;
}
function ageValide(){
	var age = document.getElementById("A").value;
	if(isNaN(age) || (age < 8 && age > 100)){
		return false;
	}
	return true;
}
function mailValide(){
	var emailReg =  /^([a-zA-Z0-9_.-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
	return emailReg.test(document.getElementById("M").value);
}