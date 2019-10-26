var elements = document.getElementsByClassName("column");
var i;
for (i = 0; i < elements.length; i++) {
	elements[i].style.msFlex = "25%";  // IE10
	elements[i].style.flex = "25%";
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('expand');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// Go through all of the images with our custom class
for (var i = 0; i < imgs.length; i++) {
	var img = imgs[i];
// and attach our click listener for this image.
	img.onclick = function(evt) {
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
	modal.style.display = "none";
}