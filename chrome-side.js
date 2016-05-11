function run() {
	appendScript("jquery.js");
	appendScript("page-side.js");
}

function appendScript(scriptPath) {
	var script = document.createElement('script');
	script.src = chrome.extension.getURL(scriptPath);
	document.getElementsByTagName('head')[0].appendChild(script);
}