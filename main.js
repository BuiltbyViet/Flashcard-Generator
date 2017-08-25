var getClozeCards = require("./ClozeCard.js");
var getBasicCards = require("./BasicCard.js");
var inquirer = require("inquirer");


var firstQuestion = new getClozeCards("Cloud Strife takes the identity of Zack Fair in the game FF7.(State both first and last name)", "Zack Fair");
var secondQuestion = new getBasicCards("Where do you find Vincent Valentine in the game?", "Nibelheim");
var thirdQuestion = new getBasicCards("What is the name of the city where Aerith dies?", "City of the Ancients")
var fourthQuestion = new getClozeCards("Tifa works at the bar called Seventh Heaven located in the Sector Seven slums","Seventh Heaven");
var fifthQuestion = new getBasicCards("What is Red XII's real name?","Nanaki");
var sixthQuestion = new getBasicCards("Who is the human operator of Cait Sith?","Reeve")

startQuiz();
function startQuiz() {
	inquirer.prompt([
{
	name: "question1",
	message: firstQuestion.partial,

},

					])

.then(function(user){
	if (user.question1===firstQuestion.cloze) {
		console.log("You suprisingly got the right answer!");
}

	else {console.log("That is totally wrong! The answer is: "+ firstQuestion.cloze)
}

	inquirer.prompt([
{
	name: "question2",
	message: secondQuestion.front,

},

					])

	.then(function(user){
if (user.question2===secondQuestion.back) {
	console.log("You suprisingly got the right answer!");
}

else {console.log("That is totally wrong! The answer is: "+ secondQuestion.back)
}

inquirer.prompt([
{
	name: "question3",
	message: thirdQuestion.front,

},

					])

	.then(function(user){
if (user.question3===thirdQuestion.back) {
	console.log("You suprisingly got the right answer!");
}

else {console.log("That is totally wrong! The answer is: "+ thirdQuestion.back)
}

inquirer.prompt([
{
	name: "question4",
	message: fourthQuestion.partial,

},

					])

.then(function(user){
	if (user.question4===fourthQuestion.cloze) {
		console.log("You suprisingly got the right answer!");
}

	else {console.log("That is totally wrong! The answer is: "+ fourthQuestion.cloze)
}

inquirer.prompt([
{
	name: "question5",
	message: fifthQuestion.front,

},

					])

	.then(function(user){
if (user.question5===fifthQuestion.back) {
	console.log("You suprisingly got the right answer!");
}

else {console.log("That is totally wrong! The answer is: "+ fifthQuestion.back)
}

inquirer.prompt([
{
	name: "question6",
	message: sixthQuestion.front,

},

					])

	.then(function(user){
if (user.question6===sixthQuestion.back) {
	console.log("You suprisingly got the right answer!");
}

else {console.log("That is totally wrong! The answer is: "+ sixthQuestion.back)
}

inquirer.prompt([
{
	type:"confirm",
	name:"endQ",
	message: "Do you want to play again?",
	default: true

}
])

.then(function(user){
	if (user.endQ) {
		startQuiz();
	}
})

});

});

});

});
});
});

};



