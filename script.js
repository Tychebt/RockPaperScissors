/*function add7 (number){
console.log( number+7)
}

function multiply (x,y){
    console.log( x*y )
}*/

function capitalize (str){
    let cap = str.slice(0, 1).toUpperCase()
    let norm = str.slice(1)
    let res = cap + norm
    return res
}

function lastLetter (str){
    let length = str.length;
    console.log(str.slice(length-1))
} 

function computerSelection(){
    let res = Math.floor(Math.random() * 3)
    if(res === 0){
        return "Rock"
    }
    else if(res === 1){
        return "Paper"
    }
    else if(res === 2){
        return "Scissors"
    }
}


function playerSelection(){
    let res = prompt('Rock, Paper or Scissors ?', 'Rock')
    res = capitalize(res)
    return res
}

function playRound(computerSelection, playerSelection){
    computerSelection = computerSelection()
    playerSelection = playerSelection()

    let res

    if(computerSelection == playerSelection){
        res = `Tie! ${computerSelection} and ${playerSelection}`
    }
    else if(computerSelection == "Rock" && playerSelection === "Scissors"){
        res = `You Lose! ${computerSelection} beat ${playerSelection}`
    }
    else if(computerSelection == "Paper" && playerSelection === "Rock"){
        res = `You Lose! ${computerSelection} beat ${playerSelection}`
    }
    else if(computerSelection == "Scissors" && playerSelection === "Paper"){
        res = `You Lose! ${computerSelection} beat ${playerSelection}`
    }
    else {res = `You Win! ${playerSelection} beat ${computerSelection}`}
    return res
}

function game(){
    let countPC = 0
    let countPlayer = 0

    for(let i = 0; i<5; i++){
        playRound(computerSelection, playerSelection).indexOf == -1

        
    }
}
