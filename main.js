var linesOfCode = 0;

const onButtonClick = () => {
	linesOfCode += 1;
	updateCount();
}


const updateCount = () => document.getElementById("lines-of-code").innerHTML = linesOfCode;