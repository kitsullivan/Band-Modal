var bioModal = document.querySelector("#bioModal");

var bandName = document.querySelector(".bandName");

var closeBtn = document.querySelector(".close");

//open modal on click of band name
bandName.onclick = function() {
	bioModal.style.display = "block";
}

//close modal on click of X
closeBtn.onclick = function() {
	bioModal.style.display = 'none';
}

//close modal on click outside of modal
window.onclick = function(event) {
	if (event.target == bioModal) {
		bioModal.style.display = 'none';
	}
}

