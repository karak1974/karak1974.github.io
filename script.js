function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function opacity(box) {
	document.getElementById(box).style.display="flex";
	var elem = document.getElementById(box);
	elem.style.opacity = 0.1;
	elem.style.transition = "opacity 1s";
	setTimeout(function() {elem.style.opacity = 1;} , 250);
}

async function charByChar() {
	let input = "Hungarian high school student~\
	Coder, hacker, gamer~\
	Main coding languages: GO, Java, C, Python, SQLite~\
	IOT technologies: Arduino, Esp32";
	let current = "<h3>";
	printElement(current, input);

	for (let i = 0; i < document.getElementsByTagName('button').length; i++) {
		document.getElementsByTagName('button')[i].addEventListener('mouseout', function() {
			document.getElementsByTagName('button')[i].style.opacity = '0.8';
			document.getElementsByTagName('button')[i].style.transition = '0.8s';
		});

		document.getElementsByTagName('button')[i].addEventListener('mouseover', function() {
			document.getElementsByTagName('button')[i].style.opacity = '1.0';
			document.getElementsByTagName('button')[i].style.transition = '0.8s';
		});

		document.getElementsByTagName('button')[i].addEventListener('click', function() {
			if (i == 0) {
				// Discord
				window.open('https://dsc.bio/wolfylink', '_blank');
			}
			else if (i == 1) {
				// Github
				window.open('https://github.com/karak1974/', '_blank');
			}
			else if (i == 2) {
				// Twitter
				window.open('https://twitter.com/wolfy_42', '_blank');
			}
			else if (i == 3) {
				// Telegram
				window.open('https://t.me/wolfy_42', '_blank');
			}
		});
	}

	for (let j = 0; j < document.getElementsByTagName('a').length; j++) {
		document.getElementsByTagName('a')[j].addEventListener('click', function() {
			if (j == 0) {
				location.replace(location);
			}
			else if (j == 1) {
				window.open('https://github.com/karak1974/flag_submit_system', '_blank');
			}
			else if (j == 2) {
				window.open('https://github.com/karak1974/no', '_blank');
			}
		});
	}
}

async function printElement(current, input) {
	document.getElementById("bio").innerHTML = "<h3>";
	await sleep(250);

	for (let i = 0; i < input.length; i++) {
		await sleep(40);

		if ( input[i] == "~" ) {
			current = current + "<br>";
		}
		else {
			current = current + input[i];
		}

		document.getElementById("bio").innerHTML = current;
	}

	opacity("project");
	opacity("projects");
	await sleep(500);
	opacity("contact");
	opacity("contacts");
	document.getElementById("bio").innerHTML = current + "</h3>";
}
