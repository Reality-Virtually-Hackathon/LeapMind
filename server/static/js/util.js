function getModels() {
	let url = '/models';
	let getRequest = $.get(url);
	getRequest.done(function(response) {
		console.log(response);
	});
}