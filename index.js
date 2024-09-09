let generate = document.getElementById('generateBtn');
let display = document.getElementById('passwordDisplay');
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = upperCase.toLowerCase();
let number = "1234567890";
let specialSymbol = "~!@#$%^&*()_+=[]{}|<>,.?/";

generate.onclick = function(){
    let res = "";

    let options = [];
    if (document.getElementById('UpperCase').checked) {
        options.push(upperCase);
    }
    if (document.getElementById('LowerCase').checked) {
        options.push(lowerCase);
    }
    if (document.getElementById('SpecialSymbol').checked) {
        options.push(specialSymbol);
    }
    if (document.getElementById('Number').checked) {
        options.push(number);
    }

    if (options.length === 0) {
        display.textContent = "Please select at least one option!";
        return;
    }

    let passwordLength = 12;

    for (let i = 0; i < passwordLength; i++) {
        let randomOptionIndex = Math.floor(Math.random() * options.length);
        let charSet = options[randomOptionIndex];
        let randomCharIndex = Math.floor(Math.random() * charSet.length);
        res += charSet[randomCharIndex];
    }

    display.textContent = res;
};
