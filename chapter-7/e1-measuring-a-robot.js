/*
  CHAPTER 7 - EXERCISE 1

  MEASURING A ROBOT

  It’s hard to objectively compare robots by just letting them solve a few
  scenarios. Maybe one robot just happened to get easier tasks, or the kind of
  tasks that it is good at, whereas the other didn’t.

  Write a function 'compareRobots' which takes two robots (and their starting
  memory). It should generate a hundred tasks, and let each of the robots solve
  each of these tasks. When done, it should output the average number of steps
  each robot took per task.

  For the sake of fairness, make sure that you give each task to both robots,
  rather than generating different tasks per robot.
*/


// compareRobots function
// ----------------------
function compareRobots(robot1, memory1, robot2, memory2) {
  const N_TASKS = 100;
  let movesRobot1 = 0,
      movesRobot2 = 0;
  for (let i = 0; i < N_TASKS; i++) {
    let state = VillageState.random();
    movesRobot1 += runRobot(state, robot1, memory1);
    movesRobot2 += runRobot(state, robot2, memory2);
  }
  let robot1Avg = movesRobot1 / N_TASKS;
  let robot2Avg = movesRobot2 / N_TASKS;
  console.log(`Robot 1 average: ${robot1Avg}\nRobot 2 average: ${robot2Avg}`);
}


// updated runRobot function that returns the number of turns it took to
// complete delivery
// ---------------------------------------------------------------------
function runRobot(state, robot, memory) {
  let cnt = 0;
  while (true) {
    if (state.parcels.length == 0)
      return cnt;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    cnt++;
  }
}
