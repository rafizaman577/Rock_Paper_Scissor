// let yourMove = '';
let computerMoveNumber = 0;
let computerMove = '';
let result = '';

// For Computer Move:
function computerMoveFunction(){
    
}


// For Result:
function resultFunction(yourMove){
    computerMoveNumber = Math.random();

    if(computerMoveNumber<0.3){
        computerMove = 'rock';
    }else if(computerMoveNumber <0.6){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }

    if(yourMove==='rock'){
        if(computerMove==='rock'){
            result='Tie.';
        }else if(computerMove==='paper'){
            result='You Lose.';
        }else{
            result='You Win.';
        }
    }else if(yourMove==='paper'){
        if(computerMove==='rock'){
            result='You Win.';
        }else if(computerMove==='paper'){
            result='Tie.';
        }else{
            result='You Lose.';
        }
    }else{
        if(computerMove==='rock'){
            result='You Lose.';
        }else if(computerMove==='paper'){
            result='You Win.';
        }else{
            result='Tie.';
        }
    }

    alert('You chose ' + yourMove + ' Computer chose ' + computerMove + `, ` + result);
}