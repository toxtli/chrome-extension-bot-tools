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