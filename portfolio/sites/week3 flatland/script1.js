
let sqaure = document.getElementById('square');
let words = document.getElementById('words');

document.onload = greeting()

square.addEventListener('click', (event) => clicked());
/* square.addEventListener('click', function clicked(event) : this is normal function.*/ 
square.addEventListener('mouseover', (e) => changeColour('gray'));
sqaure.addEventListener('mouseout', (e) => changeColour('red'));

function changeColour(color) {
    square.style.background = color;
}

function clicked() {
    let msg = "Build a <br>" + createBuzzwordPhrase();
    words.innerHTML = msg;
}


function greeting() {
    words.innerHTML = "Welcome to Flatland.<br> I am Square.";
}


/* Buzzword Phrase Generator (JavaScript)*/

function createBuzzwordPhrase() {
    /* See https://en.wikipedia.org/wiki/List_of_buzzwords */
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return  buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}