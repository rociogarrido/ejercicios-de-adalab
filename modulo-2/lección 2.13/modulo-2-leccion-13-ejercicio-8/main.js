const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const raceWinner = runners.reduce((winner, runner) => {
  if (winner.time > runner.time) {
    return runner;
  } else {
    return winner;
  }
}, runners[0]);

console.log(raceWinner);
