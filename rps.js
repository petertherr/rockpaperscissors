var userScore = $('#userTeamScore');
userScore.value = 0;
var computerScore = $('#computerTeamScore')
computerScore.value = 0;





$('#rock').click(function(){
	var opponent = getOpponentChoice();
	
	if (opponent =='paper')
		youLose('rock', opponent);
	else if (opponent == 'scissors')
		youWin('rock', opponent);
	else
		youTie('rock', opponent);

	
	
});

$('#paper').click(function(){
	var opponent = getOpponentChoice();
	if (opponent =='scissors')
		youLose('paper', opponent);
	else if (opponent == 'rock')
		youWin('paper', opponent);
	else
		youTie('paper', opponent);
});

$('#scissors').click(function(){
	var opponent = getOpponentChoice();
	if (opponent =='rock')
		youLose('scissors', opponent);
	else if (opponent == 'paper')
		youWin('scissors',	opponent);
	else
		youTie('scissors',opponent);
});


function youWin(yourHand, opponentHand){
	userScore.html(userScore.value+=1)
	$('#result').html("You win" + "<div>"+yourHand.toUpperCase()+" beats "+opponentHand.toUpperCase()+".</div>")
}

function youLose(yourHand, opponentHand){
	computerScore.html(computerScore.value+=1)
	$('#result').html("You lose" + "<div>"+yourHand.toUpperCase()+" loses to "+opponentHand.toUpperCase()+".</div>")
}

function youTie(yourHand, opponentHand){
	$('#result').html("TIE!")
}

//method...
function getOpponentChoice(){
	var randomNumber = Math.round((Math.random()*10)%3);
	var opponent;

	//switch statement
	
	switch(randomNumber) {
		case 0:
			opponent = "rock";
			break;
		case 1:
			opponent = "paper";
			break;
		case 2:
			opponent = "scissors";
			break;
		default:
			opponent = "rock";
	}

	return opponent;

}