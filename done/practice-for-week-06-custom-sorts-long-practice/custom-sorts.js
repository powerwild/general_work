function ageSort(users) {
  let swap = 0;
    for (let i = 0; i < users.length - 1; i++) {
      if (users[i].age > users[i + 1].age) {
        [users[i], users[i + 1]] = [users[i + 1], users[i]];
        swap++;
      }
      if (i === users.length - 2 && swap > 0) {
        swap = 0;
        i = -1;
      }
    }
    return users;
}

function oddEvenSort(arr) {
  
}

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code her
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
