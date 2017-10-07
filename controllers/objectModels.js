const availableModelsFolder = 'server/static/3DModels';
const fs = require('fs');
/**
* Gets all 3D models available on the server/static folder
* @returns array of strings or empty array if no models are available
*/
function getModels(req, res) {
	let modelsList = [];
	fs.readdirSync(availableModelsFolder).forEach(file => {
		if(file.toLowerCase() !== ".ds_store" && file.indexOf(".zip") === -1) {
			modelsList.push(file);
		}
	});
	res.json(modelsList);
}
//createElectionAndAddCandidates
module.exports = { getModels };