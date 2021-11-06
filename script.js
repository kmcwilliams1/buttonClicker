
// this has to stay at the top. it is for getting the high scores names and appending 
// them to the page. do not move it, ya dingus!

// let namee = localStorage.getItem("name") 
//     var list = document.createElement("li")
//     list.innerText = namee
// const appendHereEl = document.getElementById('append-here') 
//  appendHereEl.append(list)


//adding ID's to the buttons




// //starting the game   
const startEl = document.getElementById('start')
startEl.addEventListener('click', startGame)
function startGame(event) {
  // timerId = setInterval(timer, 1000)
  // timerEl.textContent = timeLeft;
  createButtons()
  event.preventDefault()
  startEl.classList.add('hide')
}

//how to say if all buttons are clicked, refresh them
// if(hasBeenClicked.length === 5){
//   createButtons()
// }


let numbers = [1, 2, 3, 4, 5, 6]
let hasBeenClicked = []
let numberz = [1, 2, 3, 4, 5, 6]

function createButtons() {
  let buttonDiv = document.querySelector(".buttons");
  while (numbers.length > 0) {
    let button = document.createElement("button");
    let randomNumber = Math.floor(Math.random() * numbers.length)
    // console.log(numbers[randomNumber])
    button.className = "buttons"
    button.setAttribute("id", numbers[randomNumber])
    button.innerHTML = numbers[randomNumber];
    numbers.splice(randomNumber, 1)
    button.onclick = function () {
      getNumber(this)
    }
    buttonDiv.appendChild(button);
  }
}


 function getNumber (event) {
  let clickedNumber = parseInt(event.innerHTML)
  let alreadyClicked = false
  console.log(clickedNumber)
  if(clickedNumber === numberz[0] && numberz && alreadyClicked === false)
   {
    alreadyClicked = true
    numberz.shift()
    this.addClass("hide")
    console.log(numberz)
    hasBeenClicked.push(clickedNumber)
    console.log(hasBeenClicked)
  } else {
    console.log ("wrong number/ clicked same one twice")
  }
}







//timer   all working!

// const timerEl = document.getElementById('timer');
// var timeLeft = 10;
// var timerId;
// function timer () {
//    timeLeft--;
//    timerEl.textContent = timeLeft;
//    if(timeLeft <=0){
//    endQuiz();
// }
// }





// //ending the game

// const scoresEl = document.getElementById('scores)
// function endGame(){
//     scoreEl.ClassList.remove('hide')
// }



//for displaying and saving high scores

// const clickEl = document.querySelector('.click')
// clickEl.addEventListener('click' , submitName) 
// function submitName(){
// const nameEl = document.getElementById('name')
// var list = document.createElement("li")
// list.innerText = nameEl.value
// appendHereEl.append(list)
// localStorage.setItem("name" , nameEl.value)
// }