var num = 7;
var guess = prompt("Guess a number from 1 to 10");

if(guess > num) {
	alert("Sorry you guessed to high. Try again.");
}
else if(guess < num) {
	alert("Sorry you guessed to low. Try again.");
}
else {
	alert("Great you guessed correctly!!");
}