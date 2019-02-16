var linesOfCode = 0;
var extraHands = 0;
var codeMonkey = 0;
var subContractor = 0;

// getters

const getExtraHandsCost = () => Math.round(10 * Math.pow(1.07, extraHands));

const getCodeMonkeyCost = () => Math.round(100 * Math.pow(1.07, codeMonkey));

const getSubContractorCost = () => Math.round(1000 * Math.pow(1.07, subContractor));

// button actions

const onWriteCode = () => {
    linesOfCode += 1 + extraHands;
    updateCount();
}

const onBuyExtraHands = () => {
    linesOfCode -= getExtraHandsCost();
    extraHands += 1;
    updateHands();
    updateCount();
    updateExtraHandsCost();
}

const onBuyCodeMonkey = () => {
    linesOfCode -= getCodeMonkeyCost();
    codeMonkey += 1;
    updateCodeMonkey();
    updateCount();
    updateCodeMonkeyCost();
}

const onBuySubContractor = () => {
    linesOfCode -= getSubContractorCost();
    subContractor += 1;
    updateSubContractor();
    updateCount();
    updateSubContractorCost();
}

// DOM updates

const updateCount = () => {
	document.getElementById("lines-of-code").innerHTML = linesOfCode;
    document.getElementById("extra-hands-btn").disabled = linesOfCode < getExtraHandsCost();
    document.getElementById("code-monkey-btn").disabled = linesOfCode < getCodeMonkeyCost();
    document.getElementById("sub-contractor-btn").disabled = linesOfCode < getSubContractorCost();
}

const updateHands = () => document.getElementById("extra-hands").innerHTML = extraHands;

const updateExtraHandsCost = () => document.getElementById("extra-hands-cost").innerHTML = getExtraHandsCost();


const updateCodeMonkey = () => document.getElementById("code-monkey").innerHTML = codeMonkey;

const updateCodeMonkeyCost = () => document.getElementById("code-monkey-cost").innerHTML = getCodeMonkeyCost();

const updateSubContractor = () => document.getElementById("sub-contractor").innerHTML = subContractor;

const updateSubContractorCost = () => document.getElementById("sub-contractor-cost").innerHTML = getSubContractorCost();

const updateCountPerSecond = () => {
    linesOfCode += codeMonkey + subContractor * 10;
    updateCount();
}


setInterval(updateCountPerSecond, 1000);


