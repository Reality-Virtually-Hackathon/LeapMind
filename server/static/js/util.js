function getModels() {
	let url = '/models';
	let getRequest = $.get(url);
	getRequest.done(function(response) {
		return response;
	});
}