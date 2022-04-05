var datamap = new Map([
	[document.getElementById("band-1"), document.getElementById("band1")],
	[document.getElementById("band-2"), document.getElementById("band2")],
	[document.getElementById("band-3"), document.getElementById("band3")],
	[document.getElementById("band-4"), document.getElementById("band4")],
	[document.getElementById("band-5"), document.getElementById("band5")],
	[document.getElementById("band-6"), document.getElementById("band6")],
	[document.getElementById("band-7"), document.getElementById("band7")],
	[document.getElementById("band-8"), document.getElementById("band8")],
	[document.getElementById("band-9"), document.getElementById("band9")],
	[document.getElementById("band-10"), document.getElementById("band10")],
	[document.getElementById("band-11"), document.getElementById("band11")],
	[document.getElementById("band-12"), document.getElementById("band12")],
	[document.getElementById("band-13"), document.getElementById("band13")],
	[document.getElementById("band-14"), document.getElementById("band14")],
	[document.getElementById("band-15"), document.getElementById("band15")],
	[document.getElementById("band-16"), document.getElementById("band16")],
	[document.getElementById("band-17"), document.getElementById("band17")],
	[document.getElementById("band-18"), document.getElementById("band18")],
	]);

datamap.forEach((value, key) => {
	doModal(key, value);
});

function doModal(anchor, popupbox) {
	var span = popupbox.getElementsByClassName("close")[0];

	anchor.addEventListener("click", function(event) {
		popupbox.style.display = "block";
	});

	span.addEventListener("click", function (event) {
		popupbox.style.display = "none";
	});
	window.addEventListener("click", function (event) {
	if (event.target == popupbox) {
		popupbox.style.display = 'none';
		}
	});
}
