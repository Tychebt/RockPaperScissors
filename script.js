function add7 (number){
console.log( number+7)
}

function multiply (x,y){
    console.log( x*y )
}

function capitalize (str){
    let cap = str.slice(0, 1).toUpperCase()
    let norm = str.slice(1)
    let res = cap + norm
    console.log( res  )
}

function lastLetter (str){
    let length = str.length;
    console.log(str.slice(length-1))
}