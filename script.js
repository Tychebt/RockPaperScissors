function capitalize (str){
    let cap = str.slice(0, 1).toUpperCase()
    let norm = str.slice(1)
    let res = cap + norm
    return res
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
    let res

    for(let i = 0; i<5; i++){
        res = playRound(computerSelection, playerSelection)
        console.log(res)
        if(res.indexOf('Win')>=1){countPlayer++}
        else if(res.indexOf('Lose')>=4){countPC++}
    }
    if(countPlayer>countPC){return 'You won the game !'}
    else if(countPC>countPlayer){return 'You lost the game !'}
    else {return 'This is a tie !'}
}
