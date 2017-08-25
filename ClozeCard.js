
var ClozeCard = function(text, cloze) {	
	this.fullText = text;
	this.cloze = cloze; 
	this.partial = text.replace(cloze,"...");

//if the cloze deletion is not part of the full text, an error will occur
if (text.includes(cloze)===false) {
	throw error;
};

}

module.exports = ClozeCard;