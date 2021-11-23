const sha256 = require('js-sha256');

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(numBuckets = 4) {
        this.capacity = numBuckets;
        this.count = 0;
        this.data = new Array(this.capacity).fill(null);
    }

    hash(key) {
        const hashString = sha256(key).slice(0, 8);
        return parseInt(`0x${hashString}`);
    }

    hashMod(key) {
        return this.hash(key) % this.capacity;
    }

    insertNoCollisions(key, value) {
        let i = this.hashMod(key);
        if (this.data[i]) {
            throw new Error('hash collision or same key/value pair already exists!');
        }
        this.data[i] = new KeyValuePair(key, value);
        this.count++;

    }

    insertWithHashCollisions(key, value) {
        const node = new KeyValuePair(key, value);
        let i = this.hashMod(key);
        if (this.data[i]) {
            node.next = this.data[i];
        }
        this.data[i] = node;
        this.count++;
    }

    insert(key, value) {
        let i = this.hashMod(key);
        if (!this.data[i])  return this.insertNoCollisions(key, value);
        if (this.data[i]) {
            let curr = this.data[i];
            while (curr) {
                if (curr.key === key) {
                    curr.value = value;
                    return;
                }
                curr = curr.next;
            }
        }
        this.insertWithHashCollisions(key, value);
    }
}

module.exports = HashTable;
