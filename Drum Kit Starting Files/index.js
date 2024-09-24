document.querySelector("button").addEventListener("click", function(){
    alert("I got clicked!"); 
});

document.getElementById("btn").addEventListener("click", function()
{
    let r = document.getElementById("radius").value;

    document.getElementById("Area").innerHTML = r*r*3.14159
})

var nmberOfDruttons = document.querySelectorAll(".drum").length;

for(var i = 0;i< nmberOfDruttons;i++){
    var b = document.querySelectorAll(".drum")[i].innerHTML;
    switch(b){

    }
    var audio = Audio("sounds/tom-1.mp3");
audio.play();

     }
     document.adoptedStyleSheets("keypress",function(eevent){
        makeSound(eevent.key);
     })
     function makeSound(key){
        switch(key){
            case "w":
                var tom1 = new Audio("souns/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("souns/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                    var tom3 = new Audio("souns/tom-3.mp3");
                    tom3.play();
                    break;
            case "d":
                var tom4 = new Audio("souns/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                            var snare = new Audio("souns/snare.mp3");
                            snare.play();
                            break;
                            case "k":
                                var crash = new Audio("souns/crash.mp3");
                                crash.play();
                                break;
                                case "l":
                                    var kick = new Audio("souns/kick-bass.mp3");
                                    kick.play();
                                    break;

            
        }
     }