// Function that display value
function display(val) {
	document.getElementById("display").value += val
}

// Function that evaluates the digit and return result
function solve() {
	let x = document.getElementById("result").value
	let y = math.evaluate(x)
	document.getElementById("result").value = y
}

// Function that clear the display
function clearAll() {
	document.getElementById("display").value = ""
}

function clearLast() {
	let text = document.getElementById("display").value;
	document.getElementById("display").value = text.substring(0, text.length - 1);
}

// Equal sign, calulates what's in the input
function calculate() {

	let result = document.getElementById("display").value;
	result = result.replace(/[a-zA-Z]/g, "");
	result = parse(result);
	document.getElementById("display").value = result;
}

function parse(str) {
	return Function(`'use strict'; return (${str})`)()
}

function calculateSQRT() {
	calculate();
	let result = document.getElementById("display").value;
	document.getElementById("display").value = Math.sqrt(result);
}


function calculateInverse() {
	calculate();
	let result = document.getElementById("display").value;
	document.getElementById("display").value = 1 / result;
}

function changeSign() {
	let result = document.getElementById("display").value;

	const transformedExpr = result.replace(/^([\+\-]?\d+)|([\+\-]\d+)/g, (fullMatch, p1, p2) => {
		if (p1) {
			return (p1.startsWith("-") ? "+" : "-") + p1.substring(1);
		} else {
			return (p2.startsWith("+") ? "-" : "+") + p2.substring(1);
		}
	});

	document.getElementById("display").value = transformedExpr;
}
