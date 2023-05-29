//*********************************   INITIAL RESULT   **********************************//
let yourscore = 0
let computorscore = 0

//*********************************   GENERATING RANDOM COMPUTORS CHOISE (MAIN CODE)   **********************************//
let randomNumofRoundber = Math.floor(Math.random() * 3)
let computer = ["SNAKE", "WATER", "GUN"][randomNumofRoundber]


let yourchoise;
let NumofRound = 0
let RoundHistorytr

//Selecting you and computor to print live choises
let playerchoise = document.getElementById('div1')
let computerchoise = document.getElementById('div2')

//selecting tbody of table2 to remove all tr(which is a Roundx history) 
let BodyOfTable2 = document.getElementById('table2').firstElementChild.nextElementSibling

//Selecting result
let result = document.getElementById('result')

//Selecting ponit table to print points 
let td12 = document.getElementById('td12')
let td1 = document.getElementById('td1')




//*********************************   STARTING GAME   **********************************//
//******************************************** ALL ABOUT (WHEN PLAYERCHOISE IS SNAKE) ******************************************/
let SnakeButton = document.getElementById('SnakeButton')
SnakeButton.addEventListener('click', () => {
    SnakeButton.style.color = "green"
    WaterButton.style.color = "#40f"
    GunButton.style.color = "#40f"
    yourchoise = "SNAKE"

    //Printing live choise
    playerchoise.innerHTML = `YOU: ${yourchoise}`
    
    if (computer == "SNAKE" && yourchoise == "SNAKE") {
        result.innerHTML = `RESULT : DRAW`
    }
    else if (computer == "WATER" && yourchoise == "SNAKE") {
        result.innerHTML = `RESULT : You Win`
        yourscore = yourscore + 1
    }
    else if (computer == "GUN" && yourchoise == "SNAKE") {
        result.innerHTML = `RESULT : You Loss`
        computorscore = computorscore + 1
    }
    
    //PRINTING HISTORY
    NumofRound = NumofRound + 1
    RoundHistorytr = document.createElement('tr')
    RoundHistorytr.innerHTML = `
    <td>${`Round`}${NumofRound} </td>
    <td>${yourscore}</td>
    <td>${computorscore}</td>
    `
    let tbody = document.getElementById('tbody')
    tbody.appendChild(RoundHistorytr)
    
    
    //PRINTING POINTS
    td12.innerHTML = computorscore
    td1.innerHTML = yourscore
    //Printing live choise
    computerchoise.innerHTML = `COMPUTER: ${computer}`
    
    
    //GENERATING RANDOM COMPUTORS CHOISE
    randomNumofRoundber = Math.floor(Math.random() * 3)
    computer = ["SNAKE", "WATER", "GUN"][randomNumofRoundber]
    
    //To end the game and restart it 
    if (yourscore >= 7) {
        alert("CONRATULATION YOU WIN THE GAME")
        setTimeout(()=>{
        NumofRound = 0
        yourscore = 0
        computorscore = 0
        td1.innerHTML = "0"
        td12.innerHTML = "0"
        BodyOfTable2.innerHTML = ""
        playerchoise.innerHTML = "You"
        computerchoise.innerHTML = "Computor"
        result.innerHTML = "RESULT"
    },1000)
    
    }
    else if (computorscore >= 7) {
        alert("OOPS! YOU LOSS THE MATCH")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    else if (NumofRound > 19) {
        alert("This game is draw || Start again")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
})



//************************************************ ALL ABOUT (WHEN PLAYERCHOISE IS WATER) **************************************/
let WaterButton = document.getElementById('WaterButton')
WaterButton.addEventListener('click', () => {
    SnakeButton.style.color = "#40f"
    WaterButton.style.color = "green"
    GunButton.style.color = "#40f"
    yourchoise = "WATER"
    //Printing live choise
    //Printing live choise
    playerchoise.innerHTML = `YOU: ${yourchoise}`
    
    if (computer == "SNAKE" && yourchoise == "WATER") {
        result.innerHTML = `RESULT : You Loss`
        computorscore = computorscore + 1
    }
    else if (computer == "WATER" && yourchoise == "WATER") {
        result.innerHTML = `RESULT : DRAW`
    }
    else if (computer == "GUN" && yourchoise == "WATER") {
        result.innerHTML = `RESULT : You Win`
        yourscore = yourscore + 1
    }
    
    
    //PRINTING HISTORY
    NumofRound = NumofRound + 1
    RoundHistorytr = document.createElement('tr')
    RoundHistorytr.innerHTML = `
    <td>${`Round`}${NumofRound} </td>
    <td>${yourscore}</td>
    <td>${computorscore}</td>
    `
    let tbody = document.getElementById('tbody')
    tbody.appendChild(RoundHistorytr)
    
    //PRINTING live scoreboard
    td12.innerHTML = computorscore
    td1.innerHTML = yourscore
    //Printing live choise
    computerchoise.innerHTML = `COMPUTER: ${computer}`
    
    //GENERATING RANDOM COMPUTORS CHOISE
    randomNumofRoundber = Math.floor(Math.random() * 3)
    computer = ["SNAKE", "WATER", "GUN"][randomNumofRoundber]
    
    //To end the game and restart it 
    if (yourscore >= 7) {
        alert("CONRATULATION YOU WIN THE GAME")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    else if (computorscore >= 7) {
        alert("OOPS! YOU LOSS THE MATCH")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    else if (NumofRound > 19) {
        alert("This game is draw || Start again")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
})






//******************************************** ALL ABOUT (WHEN PLAYERCHOISE IS GUN) *******************************************/
let GunButton = document.getElementById('GunButton')
GunButton.addEventListener('click', () => {
    
    //for color changing
    SnakeButton.style.color = "#40f"
    WaterButton.style.color = "#40f"
    GunButton.style.color = "green"
    yourchoise = "GUN"
    
    //Printing live choise
    playerchoise.innerHTML = `YOU: ${yourchoise}`
    
    if (computer == "SNAKE" && yourchoise == "GUN") {
        result.innerHTML = `RESULT : You Win`
        yourscore = yourscore + 1
    }
    else if (computer == "WATER" && yourchoise == "GUN") {
        result.innerHTML = `RESULT : You Loss`
        computorscore = computorscore + 1
    }
    else if (computer == "GUN" && yourchoise == "GUN") {
        result.innerHTML = `RESULT : DRAW`
    }
    
    //PRINTING HISTORY
    NumofRound = NumofRound + 1
    RoundHistorytr = document.createElement('tr')
    RoundHistorytr.innerHTML = `
    <td>${`Round`}${NumofRound}</td>
    <td>${yourscore}</td>
    <td>${computorscore}</td>
    `
    let tbody = document.getElementById('tbody')
    tbody.appendChild(RoundHistorytr)
    
    //PRINTING POINTS
    td12.innerHTML = computorscore
    td1.innerHTML = yourscore
    //Printing live choise
    computerchoise.innerHTML = `COMPUTER: ${computer}`
    
    //GENERATING RANDOM COMPUTORS CHOISE
    randomNumofRoundber = Math.floor(Math.random() * 3)
    computer = ["SNAKE", "WATER", "GUN"][randomNumofRoundber]
    
    //To end the game and restart it 
    if (yourscore >= 7) {
        alert("CONRATULATION YOU WIN THE GAME")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    else if (computorscore >= 7) {
        alert("OOPS! YOU LOSS THE MATCH")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    else if (NumofRound > 19) {
        alert("This game is draw || Start again")
        setTimeout(()=>{
            NumofRound = 0
            yourscore = 0
            computorscore = 0
            td1.innerHTML = "0"
            td12.innerHTML = "0"
            BodyOfTable2.innerHTML = ""
            playerchoise.innerHTML = "You"
            computerchoise.innerHTML = "Computor"
            result.innerHTML = "RESULT"
        },1000)
    }
    
})