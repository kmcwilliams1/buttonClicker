// let namee = localStorage.getItem("name") 
//     var list = document.createElement("li")
//     list.innerText = namee
// const appendHereEl = document.getElementById('append-here') 
//  appendHereEl.append(list)



// //timer
// const timerEl = document.getElementById('timer');
// var timeLeft = 10;
// var timerId; 
// function timer () {
//     timeLeft--;
//     timerEl.textContent = timeLeft;
//     if(timeLeft <=0){
//     endGame();
// }


// let numbers = [1,2,3,4,5,6]
// while (numbers.length > 0 ){
//    var randomNumber = Math.floor(Math.random()* numbers.length)
//    console.log(numbers[randomNumber])
//    numbers.splice(randomNumber , 1)
// }

// //buttons and getting them to disappear on click
// const oneBtn = document.getElementById('1')
// const twoBtn = document.getElementById('2')
// const threeBtn = document.getElementById('3')
// const fourBtn = document.getElementById('4')
// const fiveBtn = document.getElementById('5')
// const sixBtn = document.getElementById('6')
// const clickMeEl = document.getElementsByClassName('clickMe')

// clickMeEl.addEventListener('click' , function(){
//     this.id.ClassList.add('hide')  //how to get this to make buttons disappear on click?
// })



// //starting the game    why are the buttons showing and why isnt the timer going?
const startEl = document.getElementById('start')
startEl.addEventListener('click' , startGame)
function startGame (){
    timerId = setInterval(timer, 1000)
    timerEl.textContent = timeLeft;
    startEl.classList.add('hide')
   
}





//for displaying and saving high scores
// const clickEl = document.querySelector('.click')
// clickEl.addEventListener('click' , submitName) 
// function submitName(){
// const nameEl = document.getElementById('name')
// console.log('hello!')
// var list = document.createElement("li")
// list.innerText = nameEl.value
// appendHereEl.append(list)
// localStorage.setItem("name" , nameEl.value)
// }




// //ending the game

// const scoresEl = document.getElementById('scores)

// function endGame(){
//     scoreEl.ClassList.remove('hide')
//     buttonsEl.classList.add('hide')

// }

