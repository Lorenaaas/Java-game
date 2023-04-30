const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div =  document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

rock_div.addEventListener('click', function() {
    game("rock");
});

paper_div.addEventListener('click', function() {
   game("paper");
});
scissors_div.addEventListener('click', function() {
    game("scissors");
});
lizard_div.addEventListener('click', function() {
    game("lizard");
});

spock_div.addEventListener('click', function() {
   game("spock");
});

