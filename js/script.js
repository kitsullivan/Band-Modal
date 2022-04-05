var modal = document.querySelector("#bioModal");

var bandName = document.querySelector(".bandName");

var closeBtn = document.querySelector(".close");

//open modal on click of band name
bandName.onclick = function () {
  modal.style.display = "block";
};

//close modal on click of X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

//close modal on click outside of modal
window.onclick = function (event) {
  if (event.target !== modal) {
    modal.style.display = "none";
  }
};
