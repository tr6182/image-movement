//global variables 
var interValid = 0;
let change = 100;


function startMove()
{
    var image = document.getElementById("dumbMeme");
    interValid = setInterval(function() {
        image.style.left = change + "px";
        image.style.top = change + "px";
        document.getElementById("msg").innerHTML = "x = " + image.style.left + " y = " + image.style.top;
    
        
        change += 5; // change = change + 5;
    
    },500); 
}
function stopMove()
{
    function interValid()
    {clearInterval(interValid)}
    window.location.reload();
}
