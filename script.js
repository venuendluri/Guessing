let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let guessnumber = Math.ceil(Math.random()*100);
function checkGuess() {
    let user=parseInt(userInput.value);
    let guess=guessnumber;
    if(user>guess && user<100){
        gameResult.textContent="Its Too High";
        gameResult.style.backgroundColor="Red";
    }
    else if(user>100 || user<0){
        gameResult.textContent="You entered Wrong Number";
        gameResult.style.backgroundColor="black";

    }
    else if(user<guess && user<100){
        gameResult.textContent="Its Too Low";
        gameResult.style.backgroundColor="Blue";
    }
    else{
        gameResult.textContent="Congratulation! number is correct";
        gameResult.style.backgroundColor="Green";
        
    }
    
 
}
