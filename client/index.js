var csi = new CSInterface();

var body = document.querySelector("body");
var buttons = document.querySelectorAll('button');
var penToolBtn = document.querySelector("#pen-tool");
var addAnchorBtn = document.querySelector("#add-anchor");
var delAnchorBtn = document.querySelector("#del-anchor");
var convertPtBtn = document.querySelector("#convert-point");
var pathSelectBtn = document.querySelector("#path-select");
var dirSelectBtn = document.querySelector("#direct-select");

penToolBtn.addEventListener("click", penTool);
addAnchorBtn.addEventListener("click", addAnchor);
delAnchorBtn.addEventListener("click", delAnchor);
convertPtBtn.addEventListener("click", convertPt);
pathSelectBtn.addEventListener("click", pathSelect);
dirSelectBtn.addEventListener("click", dirSelect);

// Apply user theme options

window.addEventListener("load", colorize);
csi.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, colorize);

function colorize() {
	var skin = csi.getHostEnvironment().appSkinInfo;
	var skinBg = skin.panelBackgroundColor.color;
	var skinBgR = skinBg.red;
	var skinBgG = skinBg.green;
	var skinBgB = skinBg.blue;
	var skinBgA = skinBg.alpha;
	console.log(skinBg);

	checkTool();

	body.style = 'background: rgba('+skinBgR+','+skinBgG+','+skinBgB+','+skinBgA+');';

	if(skinBgR == 240) {
		theme = 'lightest';
	} else if(skinBgR == 184) {
		theme = 'light';
	} else if(skinBgR == 83) {
		theme = 'dark';
	} else if(skinBgR == 50) {
		theme = 'darkest';
	}

	body.classList.add(theme);

}
function checkTool() {
	console.log(csi.evalScript("currentTool()"));
}

function deselectBtns() {
	for(i = 0; i < buttons.length; i++) {
		buttons[i].classList.remove('active');
	}
}

function penTool() {
	deselectBtns();
	penToolBtn.classList.add('active');
	csi.evalScript("penTool()");
}
function addAnchor() {
	deselectBtns();
	addAnchorBtn.classList.add('active');
	csi.evalScript("addAnchor()");
}
function delAnchor() {
	deselectBtns();
	delAnchorBtn.classList.add('active');
	csi.evalScript("delAnchor()");
}
function convertPt() {
	deselectBtns();
	convertPtBtn.classList.add('active');
	csi.evalScript("convertPt()");
}
function pathSelect() {
	deselectBtns();
	pathSelectBtn.classList.add('active');
	csi.evalScript("pathSelect()");
}
function dirSelect() {
	deselectBtns();
	dirSelectBtn.classList.add('active');
	csi.evalScript("dirSelect()");
}