function getModels() {
	let url = '/models';
	let getRequest = $.get(url);
	getRequest.done(function(response) {
		return response;
	});
}
function getTranslations(divRef, callback) {
	let url='/getAmericanRoomTranslations';
	let getRequest = $.get(url);
	getRequest.done(function(response) {
		console.log(response);
		callback(divRef, response);
	});
}