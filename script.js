function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function opacity(box) {
    document.getElementById(box).style.display="flex";
    var elem = document.getElementById(box);
    elem.style.opacity = 0.1;
    elem.style.transition = "opacity 1s";
    setTimeout(function(){ elem.style.opacity = 1;} , 250);
}
async function charByChar() {
    let input = "Hungarian high school student~\
    Coder, hacker, gamer~\
    Main coding languages: GO, Java, C, Python, SQLite~\
    IOT technologies: Arduino, Esp32";
    let current = "<h3>";
    printElement(current, input);
}

async function printElement(current, input) {
    document.getElementById("bio").innerHTML = "<h3>";
    await sleep(250);
    for (let i = 0; i < input.length; i++) {
        await sleep(50);
        if ( input[i] == "~" ) {
            current = current + "<br>";
        } else {
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