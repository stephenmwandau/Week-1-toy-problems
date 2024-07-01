const ps = require("prompt-sync");
const prompt = ps({ sigint: true });

const speed = parseInt(prompt("What is your speed? "), 10);

function speedDetector(speed) {
  if (speed < 70) {
    return "OK";
  } else {
    let greatSpeed = speed - 70;
    let rem = Math.floor(greatSpeed / 5);
    if (rem < 12) {
      return `Points: ${rem}`;
    } else {
      return "License suspended";
    }
  }
}

console.log(speedDetector(speed));
