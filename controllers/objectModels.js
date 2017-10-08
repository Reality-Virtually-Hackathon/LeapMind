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

function getAmericanRoomTranslations(req, res) {
	let result = 
	{
    	"bed1" : {
                	"eng" : "bed",
               	 	"arab_vern" : "alsarir",
               	  	"arab_text" : "bed_trans1.png"
    	}
    }
 //    	"lamp1" : {
 //                	"eng" : "lamp",
 //                	"arab_vern" : "misbah", 
	// 	"Arab_text”: “lamp_trans1.png“, 
 //        	},
	// “nightstand1” : {
	// 	“eng” : “nightstand”,
	// 	“arab_vern”: “mundida”,
	// 	“arab_text”: “nightstand_trans1.png”,
	// },
	// “ball1” : {
	// 	“eng”: “soccer ball”,
	// 	“arab_vern” : “kurat alqadam”,
	// 	“arab_text” : “ball_trans1.png”,
	// },
	// “dresser1” : {
	// 	“eng” : “dresser”,
	// 	“arab_vern” : “mudamad”,
	// 	“arab_text” : “dresser_trans1.png”,
	// },
	// “dog1” : {
	// 	“eng” : “dog”,
	// 	“arab_vern” : “alka”,
	// 	“arab_text” : “dog_trans1.png”,
	// },
	// “family1” : {
	// “eng”: “family”,
	// “arab_vern”: “usra”,
	// “arab_text” : “family_trans1.png”,
	// 	}
	// };
	res.json(result);
}
//createElectionAndAddCandidates
module.exports = { getModels, getAmericanRoomTranslations };