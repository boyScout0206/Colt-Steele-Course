var years = prompt("How old are you in years?");
var leapYearDays = (years - (years % 4)) / 4;
var daysAlive = years * 365 + leapYearDays;
alert("You have been alive for roughly " + daysAlive + " days. Congrats!");
console.log("User has been alive for " + daysAlive + " days");