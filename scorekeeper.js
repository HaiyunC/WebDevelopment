var gameOverScoreDisplay = document.querySelector("#gameOverScore")
var inputScore = document.querySelector("#scoreInput")
var buttonP1 = document.querySelector("#p1")
var buttonP2 = document.querySelector("#p2")
var resetButton = document.querySelector("#reset")
var p1Display = document.querySelector("#scoreOne")
var p2Display = document.querySelector("#scoreTwo")
var gameOver = false
var p1Score = 0
var p2Score = 0
var winningScore = 5

inputScore.addEventListener("change",function(){
	gameOverScoreDisplay.textContent = this.value
	winningScore = Number(this.value)
	reset()
})

buttonP1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++
		if (p1Score === winningScore) {
			p1Display.classList.add("winner")
			gameOver=true
		}
		p1Display.textContent = p1Score
	}	
})


buttonP2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++
		if (p2Score === winningScore) {
			p2Display.classList.add("winner")
			gameOver=true
		}
		p2Display.textContent = p2Score
	}
})

 function reset(){
 	gameOver = !gameOver
 		p1Score = 0;
 		p2Score = 0;
 		p1Display.textContent = 0
 		p2Display.textContent = 0
 		p1Display.classList.remove("winner")
 		p2Display.classList.remove("winner")
 		gameOver = false
 }

 resetButton.addEventListener("click",function() { 	
 		reset() 		
 })


