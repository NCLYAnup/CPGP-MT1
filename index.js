import confetti from 'https://cdn.skypack.dev/canvas-confetti';


/* Rules */

const myButton = document.getElementById("myButton");
const popup = document.querySelector(".popup");
const closeButton = document.getElementById("closeButton");
myButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});


const playerScoreDisplay = document.getElementById("UserScore");
const computerScoreDisplay = document.getElementById("PcScore");

let playerScore = 0;
let computerScore = 0;


const winDiv = document.getElementById("frame2");
const tieDiv = document.getElementById("frame3");
const lostDiv = document.getElementById("frame4");
const prevDiv = document.getElementById("lower");
const YPDiv = document.getElementById("YP");
const PPDiv = document.getElementById("PP");


winDiv.style.display = "none";
tieDiv.style.display = "none";
lostDiv.style.display = "none";
YPDiv.style.display = "none";
PPDiv.style.display = "none";

/* Main Logic */

document.getElementById("img1").onclick=function(){
  YPDiv.style.display = "block";
  PPDiv.style.display = "block";
  for(let i=0;i<3;i++){
    document.getElementsByClassName("playerSelection")[i].src="Paper.png";}
    if(ComputerSelection==='rock'){
      playerScore++;
      winDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      playerScoreDisplay.textContent = playerScore;
    }
    else if(ComputerSelection==='paper'){
      tieDiv.style.display = 'block';
      prevDiv.style.display = 'none';
    }
    else{
      lostDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
    
  }
  document.getElementById("img2").onclick=function(){
    YPDiv.style.display = "block";
    PPDiv.style.display = "block";
    for(let i=0;i<3;i++){
      document.getElementsByClassName("playerSelection")[i].src="Scissor.png";
    }
    if(ComputerSelection==='paper'){
      winDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    }
    else if(ComputerSelection==='scissors'){
      tieDiv.style.display = 'block';
      prevDiv.style.display = 'none';
    }
    else{
      lostDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  }
  document.getElementById("img3").onclick=function(){
    YPDiv.style.display = "block";
    PPDiv.style.display = "block";
    for(let i=0;i<3;i++){
      document.getElementsByClassName("playerSelection")[i].src="Rock.png";
    }
    if(ComputerSelection==='scissors'){
      winDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    }
    else if(ComputerSelection==='rock'){
      tieDiv.style.display = 'block';
      prevDiv.style.display = 'none';
    }
    else{
      lostDiv.style.display = 'block';
      prevDiv.style.display = 'none';
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  }
  
  /* Play Again */
  
  
  for(let i=0;i<3;i++){
    document.getElementsByClassName("PA")[i].onclick=function()
    {
      YPDiv.style.display = "none";
      PPDiv.style.display = "none";
      ComputerSelection= computerChoice();
      if(ComputerSelection==='rock'){
        for(let i=0;i<3;i++){
          document.getElementsByClassName("PcSelection")[i].src="Rock.png";
        }
      }
      else if(ComputerSelection==='paper')
      {
        for(let i=0;i<3;i++){
          document.getElementsByClassName("PcSelection")[i].src="Paper.png";
        }
      }
      else{
        for(let i=0;i<3;i++){
          document.getElementsByClassName("PcSelection")[i].src="Scissor.png";
        }
      }
      winDiv.style.display = "none";
      tieDiv.style.display = "none";
      lostDiv.style.display = "none";
      prevDiv.style.display = 'block';
      
    }
  };
  document.getElementById("PA2").onclick=function()
  {
    YPDiv.style.display = "none";
    PPDiv.style.display = "none";
    
    if(ComputerSelection==='rock'){
      
      document.getElementsByClassName("PcSelection").src="Rock.png";
      
    }
    else if(ComputerSelection==='paper')
    {
      
      document.getElementsByClassName("PcSelection").src="Paper.png";
      
    }
    else{
      
      document.getElementsByClassName("PcSelection").src="Scissor.png";
      
    }
    
    
    winDiv.style.display = "none";
    tieDiv.style.display = "none";
    lostDiv.style.display = "none";
    prevDiv.style.display = 'block';
    
    document.getElementById("hurray").style.display = "none";
    document.getElementById("hurray2").style.display = "none";
    document.getElementById("background").style.display = "none";
    document.getElementById("container").style.display = "none";
  };
  
  
  
  function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  
  let ComputerSelection= computerChoice();
  
  if(ComputerSelection==='rock'){
    for(let i=0;i<3;i++){
      document.getElementsByClassName("PcSelection")[i].src="Rock.png";
    }
  }
  else if(ComputerSelection==='paper')
  {
    for(let i=0;i<3;i++){
      document.getElementsByClassName("PcSelection")[i].src="Paper.png";
    }
  }
  else{
    for(let i=0;i<3;i++){
      document.getElementsByClassName("PcSelection")[i].src="Scissor.png";
    }
  }
  
  /* Next Button */
  
  var nextButton = document.getElementById("Next");
  
  document.getElementById("hurray").style.display = "none";
  document.getElementById("hurray2").style.display = "none";
  document.getElementById("background").style.display = "none";
  document.getElementById("container").style.display = "none";
  nextButton.addEventListener("click", function() {
    confetti();
    
    // Show the "Hurray" animation
    winDiv.style.display = "none";
    
    document.getElementById("background").style.display = "block";
    document.getElementById("hurray").style.display = "block";
    document.getElementById("container").style.display = "block";
    document.getElementById("hurray2").style.display = "block";
    
  });
  
  /* Save Score In Local Storage */
  
  function loadScores() {
    const savedPlayerScore = localStorage.getItem('playerScore');
    const savedComputerScore = localStorage.getItem('computerScore');
    if (savedPlayerScore !== null || savedComputerScore !== null) {
      playerScore = parseInt(savedPlayerScore);
      computerScore = parseInt(savedComputerScore);
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent = computerScore;
    }
  }
  loadScores();
  
  
  // Save scores to local storage
  function saveScores() {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
  }
  
  
  
  
  // Update scores before window is closed or refreshed
  window.addEventListener('beforeunload', () => {
    saveScores();
  });
  // Rest Button 
  const resetBtn =document.getElementById("reset")
  resetBtn.addEventListener('click', ()=>{
    window.location.reload()
    localStorage.setItem( 'playerScore' ,0);
    localStorage.setItem( 'computerScore' ,0)
  })
  
  
  
  
  
  