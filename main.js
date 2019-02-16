var linesOfCode = 0;
var extraHands = 0;


const onButtonClick = () => {
	linesOfCode += 1 + extraHands;
	updateCount();
}

const updateCount = () => document.getElementById("lines-of-code").innerHTML = linesOfCode;

const onBuyExtraHands = () => {
	extraHands += 1;
	updateHands();
}

const updateHands = () => document.getElementById("extra-hands").innerHTML = extraHands;
