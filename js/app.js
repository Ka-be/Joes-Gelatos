const container = document.querySelector(".container");
const title = container.querySelector(".title");
const background = container.querySelector(".ice-bg")
const walk = 50; // 50px - Limit for the moving (25px to -25px)


// Tracking the mouse coord.
function movingShadow(e){
	const { offsetWidth: width, offsetHeight: height } = container;
	let { offsetX: x, offsetY: y } = e;

	// normalize mouse coord to childern elements of container (Reset x et y at 0 in normal flow)
	if (this !== e.target){
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	//Set 0 mouse coord to the center of the container - Give pixels values
	const xWalk = (x /width * walk) - (walk / 2);
	const yWalk = (y /width * walk) - (walk / 2);

	// Set text shadow
	title.style.textShadow = `${xWalk}px ${yWalk}px 0 hsla(310, 33%, 22%, 0.8)`;

	// Set moving of Ices background
	background.style.transform = `translate(${-xWalk}px, ${-yWalk}px)`;
};


container.addEventListener("mousemove", movingShadow);
