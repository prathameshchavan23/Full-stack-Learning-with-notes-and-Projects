var prg = document.querySelector("#progress");

var count = 0;
var int = setInterval(() => {
    if (count === 100) {  // Added the closing parenthesis here
        clearInterval(int);
    }
    count++;
    prg.style.width = count + '%';
}, 50);
