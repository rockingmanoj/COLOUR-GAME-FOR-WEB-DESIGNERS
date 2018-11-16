var numsquares = 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var messageDisplay = document.querySelector("#message");
var cd = document.getElementById("cd");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
cd.textContent = pickedcolor;
easyBtn.addEventListener("click", function()
{

hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numsquares = 3;
colors = generateRandomColors(numsquares);
	pickedcolor = pickColor();
	cd.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click", function()
{

hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numsquares = 6;
colors = generateRandomColors(numsquares);
	pickedcolor = pickColor();
	cd.textContent = pickedcolor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		
	}
});
resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numsquares);
	pickedcolor = pickColor();
	cd.textContent = pickedcolor;
	this.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		if (clickedcolor == pickedcolor) {
			messageDisplay.textContent = "YOU ARE CORRECT";
			resetButton.textContent = "PLAY AGAIN";
			changeColors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN";
		}
	});
}
function changeColors(color){
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}
function generateRandomColors(num){
	var arr = []
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor())
	}
	return arr;
}
function randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}