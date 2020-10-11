
var d = new Date();
document.querySelector(".timeDate").innerHTML = d

function nRP(){
	// var nRP = document.getElementById("notesRedP").innerHTML;
	var textInput;//text input field and its value
	var x;// 
	var notesSection;//  phrase element
	var newElem;
	var elemDetails;

		textInput = document.getElementById("notesRed").value;
		newElem = document.createElement("h1");
		elemDetails = document.createTextNode(textInput);
		newElem.appendChild(elemDetails)

		notesSection = document.getElementById("notesRedP")
		notesSection.appendChild(newElem)

		console.log(newElem)


}

function myFunc2(){
	var textInput = document.getElementById("redEmployee").value
	// var newEmployee = document.getElementById("newEmployee");
	var newElem = document.createElement("h6")
	var newElemData = document.createTextNode(textInput)
	newElem.appendChild(newElemData);
	var x = document.getElementById("newEmployee")
	x.appendChild(newElem)
	console.log(x)
	// var ding = document.getElementById("toStart").value;
	// console.log(ding)
	var e = document.getElementById("nameUpdate");
	e.style.color="#ffb900";
	e.style.fontSize="100px"
	e.innerHTML = textInput


	}
