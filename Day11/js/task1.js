var p1 = "Rock";
var p2 = "scissors";

if (p1 === p2) {
  console.log("It's a tie");
} else if (p1 === "Rock" && p2 === "scissors") {
  console.log("Player One wins");
} else if (p1 === "Rock" && p2 === "Paper") {
  console.log("Player Two wins");
} else if (p1 === "Paper" && p2 === "Rock") {
  console.log("Player One wins");
} else if (p1 === "Paper" && p2 === "scissors") {
  console.log("Player Two wins");
} else if (p1 === "scissors" && p2 === "Paper") {
  console.log("Player One wins");
} else if (p1 === "scissors" && p2 === "Rock") {
  console.log("Player Two wins");
}