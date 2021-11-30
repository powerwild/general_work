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
    let arr = Object.entries(this.follows);
    arr.forEach(el => {
      if (el[1].has(userID)) set.add(Number(el[0]));
    })
    return set;
  }

  getRecommendedFollows(userID, degrees) {
    let recFollows = [];
    let notRec = new Set([...this.getFollows(userID)])
    notRec.add(userID);
    let queue = [...this.getFollows(userID)];
    let lastEl = queue[queue.length - 1];
    while (degrees > 0) {
      let curr = queue.shift();
      let follows = this.getFollows(curr);
      follows.forEach(el => {
        if (!notRec.has(el)) {
          recFollows.push(el);
          queue.push(el);
        }
      })
      if (curr === lastEl) {
        degrees--;
        lastEl = queue[queue.length - 1];
      }
    }
    return recFollows;
  }
}

module.exports = SocialNetwork;
