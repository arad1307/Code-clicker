var linesOfCode = 0;
var extraHands = 0;


const onButtonClick = () => {
	linesOfCode += 1 + extraHands;
	updateCount();
}

const updateCount = () => {
	document.getElementById("lines-of-code").innerHTML = linesOfCode;
    document.getElementById("extra-hands-btn").disabled = linesOfCode < 10;
}

const onBuyExtraHands = () => {
	extraHands += 1;
	updateHands();
    linesOfCode -= 10;
    updateCount();
    updateExtraHandsCost();
}

const updateHands = () => document.getElementById("extra-hands").innerHTML = extraHands;

const getExtraHandsCost = () => Math.round(10 * Math.pow(1.07, extraHands));

const updateExtraHandsCost = () => document.getElementById("extra-hands-cost").innerHTML = getExtraHandsCost();