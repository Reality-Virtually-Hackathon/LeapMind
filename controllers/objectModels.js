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
	           	"arab_text" : "bed_trans1.png", 
		},
	 
	    "lamp1" : {
	        	"eng" : "lamp",
	        	"arab_vern" : "misbah",
				"Arab_text": "lamp_trans1.png", 
	    },

		"nightstand1" : {
			"eng" : "nightstand",
			"arab_vern": "mundida",
			"arab_text": "nightstand_trans1.png",
		},

		"ball1" : {
			"eng": "soccer ball",
			"arab_vern" : "kurat alqadam",
			"arab_text" : "ball_trans1.png",
		},

		"dresser1" : {
			"eng" : "dresser",
			"arab_vern" : "mudamad",
			"arab_text" : "dresser_trans1.png",
		},

		"dog1" : {
			"eng" : "dog",
			"arab_vern" : "alka",
			"arab_text" : "dog_trans1.png",
		},

		"Self_Photo1": {
			"eng" : "This is a photo of me",
			"arab_vern" : "hadhih surat li",
			"arab_text" : "SelfPhoto_trans1.png"
		},

		"Family_Photo1" : {
			"eng" : "this is a photo of my family",
			"arab_vern" : "hadhih surat min eayilati",
			"arab_text" : "family_trans1.png",
		},

		"map_1" : {
			"eng" : "here is a map of my country",
			"arab_vern" : "wafima yali kharitat libaladiin", 
			"arab_text" : "map_trans1.png",
		}, 

		"flagUS" : {
			"eng" : "this is the flag of the United States",
			"arab_vern" : "hadha hu eilm alwilayat almutahida",
			"arab_text" : "flagUS_trans.png" ,
		}, 

		"Shakira" : { 
			"eng" : "Shakira is my favorite singer",
			"arab_vern" : "shakiraan hu almaghniu almufadal ladaya",
			"arab_text" : "Shakira_trans1.png", 
		},

		//SYRIA
		
		"bed2" : {
	        "eng" : "bed",
	       	"arab_vern" : "alsarir",
	       	"arab_text" : "bed_trans2.png",
		},
	 
		"lamp2" : {
	        "eng" : "lamp",
		    "arab_vern" : "misbah",
			"Arab_text": "lamp_trans2.png" ,
		},

		"nightstand2" : {
			"eng" : "nightstand",
			"arab_vern": "mundida",
			"arab_text": "nightstand_trans2.png",
		},

		"easel1" : {
			"eng": "painting",
			"arab_vern" : "lawha",
			"arab_text" : "painting_trans2.png"
		},

		"dresser2" : {
			"eng" : "dresser",
			"arab_vern" : "mudamad",
			"arab_text" : "dresser_trans2.png",
		},

		"cat1" : {
			"eng" : "cat",
			"arab_vern": "qut",
			"arab_text": "cat_trans2.png",
		},

		"Self_Photo2": {
			"eng" : "This is a photo of me",
			"arab_vern" : "hadhih surat li",
			"arab_text" : "SelfPhoto_trans2.png"
		},

		"Family_Photo2" : {
			"eng" : "this is a photo of my family",
			"arab_vern" : "hadhih surat min eayilati",
			"arab_text" : "family_trans2.png"
		},

		"map_2" : {
			"eng" : "here is a map of my country",
			"arab_vern" : "wafima yali kharitat libaladiin", 
			"arab_text" : "map_trans2.png",
		}, 

		"flag_Syria" : {
			"eng" : "this is the flag of Syria",
			"arab_vern" : "hadha eilm suria",
			"arab_text" : "flagSyria_trans.png" ,
		}, 

		"Shakira" : { 
			"eng" : "Shakira is my favorite singer",
			"arab_vern" : "shakiraan hu almaghniu almufadal ladaya",
			"arab_text" : "Shakira_trans2.png", 
		}
	}

	res.json(result);
}
//createElectionAndAddCandidates
module.exports = { getModels, getAmericanRoomTranslations };