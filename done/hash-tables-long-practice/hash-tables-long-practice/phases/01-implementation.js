// Use these to store the key/value pairs in your hash table
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable { // get O(1), set O(1), delete O(1)

    constructor(numBuckets = 2) {
        this.count = 0;
        this.capacity = numBuckets;
        this.data = new Array(numBuckets).fill(null);

    }

    hash(key) {
        let hashValue = 0;

        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue;
    }

    hashMod(key) {
        return this.hash(key) % this.data.length;
    }

    read(key) {
        let i = this.hashMod(key);
        let curr = this.data[i];

        while (curr) {
            if (curr.key === key) return curr.value;
            curr = curr.next;
        }
    }


    insert(key, value) {
        if (this.count / this.capacity >= .7) this.resize();
        const i = this.hashMod(key);
        const hash = new KeyValuePair(key, value);

        if (!this.data[i]) {
            this.data[i] = hash;
            this.count++;
        }

        let curr = this.data[i];
        while (curr) {
            if (curr.key === key) {
                curr.value = value;
                return;
            }
            curr = curr.next;
        }

        hash.next = this.data[i];
        this.data[i] = hash;
        this.count++;
    }


    resize() {
        const oldData = this.data;
        this.capacity *= 2;
        this.data = new Array(this.capacity).fill(null);
        this.count = 0;

        oldData.forEach(el => {
            if (el) {
                if (el.next) {
                    let curr = el.next;
                    while (curr) {
                       this.insert(curr.key, curr.value);
                       curr = curr.next;
                    }
                }
                this.insert(el.key, el.value)
            }
        })
    }


    delete(key) {
        let i = this.hashMod(key);
        if (this.data[i].key === key) {
            this.data[i] = this.data[i].next;
            this.count--;
            return;
        }

        if (this.data[i]) {
                let curr = this.data[i];
                while (curr.next) {
                    if (curr.next.key === key) {
                        curr.next = curr.next.next;
                        this.count--;
                        return;
                    }

                    curr = curr.next;
                }
                
            this.data[i] = undefined;
            this.count--;
        }
    }

}


module.exports = HashTable;
