var toxData;
alert('ENABLED: ' + window.location.href);
console.log('Tox bot tools loaded correctly for ' + window.location.href);

function toxScrollDown(times) {
	var interval = 1000,cont = 0;
	var doSomething = function(){
		if (cont < times){
			$(document).scrollTop($(document).height());
		} else {
			clearInterval(intervalId);
		}
		cont++;
	};
	var intervalId = setInterval(doSomething, interval);
	console.log(intervalId);
}

function toxLinkedinScrollAdd(times) {
	var interval = 1000,cont = 0;
	var doSomething = function(){
		if (cont < times){
			$(document).scrollTop($(document).height());
		} else {
			clearInterval(intervalId);
			$('.bt-request-buffed').click();
		}
		cont++;
	};
	var intervalId = setInterval(doSomething, interval);
	console.log(intervalId);
}

function toxLinkedinAdd() {
	toxClickOn('.bt-request-buffed');
}

function toxClickOn(selector) {
	$(selector).click();
}

function toxCountSelector(selector) {
	alert( document.querySelectorAll(selector).length );
}

function toxFacebookInactiveUsers() {
	$('div.fsl.fwb.fcb a[href="#"]').each(function() {
		console.log($(this).text());
	});
}

function toxFacebookGetIds() {
	toxData = [];
	$('div.fsl.fwb.fcb > a').each(function(){
		var dataFb = $(this).data('gt');
		if (dataFb) {
			var fbid = dataFb.engagement.eng_tid;
			toxData.push(fbid);
			console.log(fbid);
		}
	});
}