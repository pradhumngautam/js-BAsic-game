let playGame = confirm("shall we play rock, paper or scissors?");
if (playGame){
  let playerChoice = prompt("please enter rock, paper or scissors");
  if (playerChoice){
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (
        playerOne === "rock" ||
        playerOne === "paper" || 
        playerOne === "scissors"
    ){
      
        let computerChoice =Math.floor(Math.random()*3+1);
        let Computer =
          computerChoice === 1 
          ?"rock" 
          :computerChoice === 2 
          ?"paper" 
          :"scissors";

        let result =
          playerOne == Computer
           ?"Tie game!"
           :playerOne === "rock" && Computer === "paper"
           ?`playerOne : ${playerOne}\n Computer: ${Computer}\nComputer wins!`
           :playerOne === "paper" && Computer === "scissors"
           ?`playerOne : ${playerOne}\n Computer :${Computer}\nComputer wins!`
           :playerOne === "scissors" && Computer === "rock"
           ?`playerOne : ${playerOne}\nComputer :${Computer}\nComputer wins!`
           :`playerOne : ${playerOne}\nComputer: ${Computer}\nplayerOne wins!`;
        alert(result);
        let playagain = confirm("playagain?");
        playagain ? location.reload(): alert ("ok ,thanks for playing");
      }else {
      alert ("you didnt enter rock, paper or scissors.")
      }
  }else {
    alert("I guess you changed your mind. Maybe next time")
  }

} else {
    alert("ok, may be next time.")
}