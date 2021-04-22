function capitalize (str){
    let cap = str.slice(0, 1).toUpperCase()
    let norm = str.slice(1)
    let res = cap + norm
    return res
}

/*function computerSelection(){
    let result = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    console.log("resultat pc" + result);
    
    return result
}*/


//function playerSelection(){
    var player
    var resultatFinal = document.querySelector('.Resultat-FIN');
    var resultatPc = document.querySelector('.Resultat-PC');
    const buttons = document.querySelectorAll('button');

      buttons.forEach((button) => {
        
        let i= 0
        button.addEventListener('click', () => {
    
         i++
        if(i<5){
            //ALEA PC
        let result = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
        console.log("resultat pc" + result);
        resultatPc.textContent = result

            //SELECTION JOUEUR
        player = document.createElement('div')
        player.textContent = button.id
        document.body.appendChild(player)

            //AFFICHAGE RESULTAT COMBAT
            
            if(resultatPc.textContent == player.textContent){
                resultatFinal.textContent  = `Tie! ${resultatPc.textContent} and ${player.textContent}`
            }
            else if(resultatPc.textContent == "Rock" && player.textContent === "Scissors"){
                resultatFinal.textContent = `You Lose! ${resultatPc.textContent} beat ${player.textContent}`
            }
            else if(resultatPc.textContent== "Paper" && player.textContent === "Rock"){
                resultatFinal.textContent = `You Lose! ${resultatPc.textContent} beat ${player.textContent}`
            }
            else if(resultatPc.textContent == "Scissors" && player.textContent === "Paper"){
                resultatFinal.textContent = `You Lose! ${resultatPc.textContent} beat ${player.textContent}`
            }
            else {
                resultatFinal.textContent = `You Win! ${player.textContent} beat ${resultatPc.textContent}`
            }

        }
        else{alert('STOP !');}
    });
    
      });
//}


/*function playRound(computerSelection, playerSelection){
    var computerSelection = computerSelection()
    playerSelection = playerSelection()

    let res

    if(computerSelection == player){
        res = `Tie! ${computerSelection} and ${player}`
        console.log("nul" + res);
    }
    else if(computerSelection == "Rock" && player === "Scissors"){
        res = `You Lose! ${computerSelection} beat ${player}`
        console.log("lose player 1" + res);
    }
    else if(computerSelection == "Paper" && player === "Rock"){
        res = `You Lose! ${computerSelection} beat ${player}`
        console.log("lose player 2" + res);
    }
    else if(computerSelection == "Scissors" && player === "Paper"){
        res = `You Lose! ${computerSelection} beat ${player}`
        console.log("lose player 3" + res);
    }
    else {res = `You Win! ${player} beat ${computerSelection}`
    console.log("lose pc" + res);}
    return res
}*/

/*
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
}*/