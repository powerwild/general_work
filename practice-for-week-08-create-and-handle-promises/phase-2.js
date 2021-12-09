function stretch(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 1000) {
      setTimeout(() => {
        console.log('done stretching');
        resolve(timeLeft - 1000);
      }, 1000)
    } else {
      reject("Error: you don't have enough time to stretch");
    }
  })
}


function runOnTreadmill(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 500) {
      setTimeout(() => {
        console.log('done running on treadmill');
        resolve(timeLeft - 500);
      }, 500)
    } else {
      reject("Error: you don't have enough time to run on the treadmill");
    }
  })
}


function liftWeights(timeLeft) {
  return new Promise((resolve, reject) => {
    if (timeLeft >= 2000) {
      setTimeout(() => {
        console.log('done lifting weights');
        resolve(timeLeft - 2000);
      }, 2000)
    } else {
      reject("Error: you don't have enough time to lift weights");
    }
  })
}


function workout(totalTime) {
  stretch(totalTime)
    .then(timeLeft => runOnTreadmill(timeLeft))
    .then(timeLeft2 => liftWeights(timeLeft2))
    .then((timeLeft3) => console.log(`done working out with ${timeLeft3 / 1000} seconds left`))
    .catch(reason => console.error('Uh Oh', reason));
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
