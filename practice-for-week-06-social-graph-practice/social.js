// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    this.users[this.currentID] = {'id': this.currentID, 'name': name};
    this.follows[this.currentID] = new Set();
    return this.currentID;
  }

  getUser(userID) {
    if (this.users[userID]) return this.users[userID];
    else return null;
  }

  follow(userID1, userID2) {
    if (!this.users[userID1] || !this.users[userID2]) return false;
    else {
      this.follows[userID1].add(userID2);
      return true;
    }
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    let set = new Set();
    let arr = this.follows.entries();
    arr.forEach(el => {
      if (el[1].has(userID)) set.add(el[0]);
    })
    return set;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
