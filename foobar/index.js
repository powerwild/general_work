var addTwoNumbers = function(l1, l2) {
    let node1Val = '';
    let node2Val = '';
    let currNode = l1;
    while (currNode) {
        node1Val = (currNode.val).toString() + node1Val;
        currNode = currNode.next;
    };
    currNode = l2;
    while (currNode) {
        node2Val = (currNode.val).toString() + node2Val;
        currNode = currNode.next;
    }
    let newVal;
    if (node1Val.length > node2Val.length) {
        newVal = node1Val.slice((node1Val.length - 1) - node2Val.length) + (parseInt(node1Val.slice((node1Val.length - 1) - node2Val.length, node1Val.length)) + parseInt(node2Val)).toString();
    } else if (node1Val.length < node2Val.length) {
        newVal = node2Val.slice((node2Val.length - 1) - node1Val.length) + (parseInt(node2Val.slice((node2Val.length - 1) - node1Val.length, node2Val.length)) + parseInt(node1Val)).toString();
    } else {
        newVal = (parseInt(node1Val) + parseInt(node2Val)).toString();
    }
    let newHead = null;
    let prevNode;
    for (let i = newVal.length - 1; i >= 0; i--) {
        if (newHead === null) {
            newHead = new ListNode(newVal[i]);
            prevNode = newHead;
            continue
        }
        currNode = new ListNode(newVal[i]);
        prevNode.next = currNode;
        prevNode = currNode;
    }
    return newHead
}


// need to refactor for speed
var isAnagram = function(s, t) {
    if (!s && !t) return true
    if (!s || !t) return false;
    if (s.length !== t.length) return false;
    first = {};
    second = {};
    for(let i = 0; i < s.length; i++) {
        if (!first[s[i]]) first[s[i]] = 1;
        else first[s[i]] += 1;
    }
    for(let j = 0; j < t.length; j++) {
        if (!second[t[j]]) second[t[j]] = 1;
        else second[t[j]] += 1;
    }
    let keys = Object.keys(first);
    for (let k in keys) {
        let key = keys[k];
        if (!second[key] || first[key] !== second[key]) return false;
        else delete second[key];
    }
    if (second.length > 0) return false;
    else return true;
};
var groupAnagrams = function(strs) {
    if (strs.length === 1) return [[strs[0]]];
    let hash = {};
    for (let s of strs) hash[s] = [];
    for (let x of Object.keys(hash)) {
        for (let y of strs) {
            if (hash[x] && isAnagram(x, y)) {
                if (y === '') hash[x].push('');
                else hash[x].push(y);
                if (x !== y) delete hash[y];
            }
        }
    }
    return Object.values(hash).sort((a, b) => a.length - b.length);
};


