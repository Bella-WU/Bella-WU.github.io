var lineOne = ["From fairest creatures we desire increase,", "When forty winters shall besiege thy brow,", "Music to hear, why hear'st thou music sadly?", "For shame deny that thou bear'st love to any,"];
var lineTwo = ["And see the brave day sunk in hideous night;", "Not from the stars do I my judgement pluck;", "And make the earth devour her own sweet brood;", "Hast thou, the master mistress of my passion;"];
var lineThree = ["For all that beauty that doth cover thee,", "Is but the seemly raiment of my heart,", "How can I then be elder than thou art?", "Whose strength's abundance weakens his own heart,"];
var lineFour = ["The perfect ceremony of love's rite,", "For through the painter must you see his skill,", "Delights to peep, to gaze therein on thee;", "Then were not summer's distillation left,"];
var lineFive = ["Leese but their show; their substance still lives sweet.", "And see thy blood warm when thou feel'st it cold.", "That beauty still may live in thine or thee.", "And you must live, drawn by your own sweet skill."];

function newLineOne() {
	var randomNumber = Math.floor(Math.random() * (lineOne.length));
	document.getElementById("lineOneDisplay").innerHTML = lineOne[randomNumber];
}

function newLineTwo() {
	var randomNumber = Math.floor(Math.random() * (lineTwo.length));
	document.getElementById("lineTwoDisplay").innerHTML = lineTwo[randomNumber];
}

function newLineThree() {
	var randomNumber = Math.floor(Math.random() * (lineThree.length));
	document.getElementById("lineThreeDisplay").innerHTML = lineThree[randomNumber];
}

function newLineFour() {
	var randomNumber = Math.floor(Math.random() * (lineFour.length));
	document.getElementById("lineFourDisplay").innerHTML = lineFour[randomNumber];
}

function newLineFive() {
	var randomNumber = Math.floor(Math.random() * (lineFive.length));
	document.getElementById("lineFiveDisplay").innerHTML = lineFive[randomNumber];
}