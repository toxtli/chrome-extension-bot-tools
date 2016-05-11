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
	$('.bt-request-buffed').click();
}

function toxCountSelector(selector) {
	alert( document.querySelectorAll(selector).length );
}