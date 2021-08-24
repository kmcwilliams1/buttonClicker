
// this has to stay at the top. it is for getting the high scores names and appending 
// them to the page. do not move it, ya dingus!
// let namee = localStorage.getItem("name") 
//     var list = document.createElement("li")
//     list.innerText = namee
// const appendHereEl = document.getElementById('append-here') 
//  appendHereEl.append(list)




            
            // //starting the game   
            const startEl = document.getElementById('start')
            startEl.addEventListener('click' , startGame)
            function startGame (e){
               // timerId = setInterval(timer, 1000)
               // timerEl.textContent = timeLeft;
               e.preventDefault()
               startEl.classList.add('hide')
               let numbers = [1,2,3,4,5,6]
               while (numbers.length > 0 ){
       var randomNumber = Math.floor(Math.random()* numbers.length)
       console.log(numbers[randomNumber])
       numbers.splice(randomNumber , 1)

      var button = document.createElement("button");
     
      var buttonDiv = document.querySelector(".buttons");
      button.innerHTML = numbers[randomNumber];
      buttonDiv.appendChild(button);
       
   }
  


}
//how to say if all buttons are clicked, refresh them?






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