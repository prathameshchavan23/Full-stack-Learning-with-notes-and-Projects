var startbtn = document.querySelector("#start");
var stopbtn = document.querySelector("#stop")
var tag = document.querySelector("h3");
var int;

startbtn.addEventListener('click', function() {
    var count = 0;
     int = setInterval(function() {
        tag.textContent = count;  // Corrected from h3 to tag
        count++;
        console.log(count);
    }, 1000);
});

stopbtn.addEventListener("click",function(){
    clearInterval(int);
})

