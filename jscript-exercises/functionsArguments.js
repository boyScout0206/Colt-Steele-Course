function sayHello() {
	var name = prompt("What is your name?");
	console.log("well hello there " + name + "!");
	var age = prompt("how old are you " + name + "?");
	var wiseAss = prompt("SO!!! " + name + " thinks he's a hotshot just because he's " + age + " years old huh?!");
	while( (wiseAss !== "yes" || wiseAss !== "yeah") || (wiseAss !== "no" || wiseAss !== "nah")) {
		wiseAss = prompt("speak in simple terms for us simple folks " + name + "...");
	}
	console.log("O... ok. Sorry I get worked up easily. Nice meeting you " + name + ".");

}

