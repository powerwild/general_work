/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let node1Val = [];
    let node2Val = [];

    let currNode = l1;
    while (currNode) {
        node1Val.push(currNode.val);
        currNode = currNode.next ? currNode.next : null;
    };
    currNode = l2
    while (currNode) {
        node2Val.push(currNode.val);
        currNode = currNode.next ? currNode.next : null;
    };
    node1Val = node1Val.reverse();
    node2Val = node2Val.reverse();
    let sNode;
    let lNode;
    let valS;
    let valL;
    if(node1Val.length >= node2Val.length) {
        sNode = node2Val;
        lNode = node1Val;
        valS = node2Val.length - 1;
        valL = node1Val.length - 1;
    } else {
        sNode = node1Val;
        lNode = node2Val;
        valS = node1Val.length - 1;
        valL = node2Val.length - 1;
    }
    while(valS >= 0 && valL >= 0) {
        lNode[valL] = (lNode[valL] + sNode[valS]);
        if (lNode[valL] > 9) {
            let diff = Math.floor(lNode[valL] / 10);
            lNode[valL] = lNode[valL] % 10;
            lNode[valL - 1] += diff;

        }
        valS--;
        valL--;
    }
    let newHead = null;
    let prevNode = null;
    for(let i = lNode.length - 1; i >= 0; i--) {
        if (newHead === null) {
            newHead = new ListNode(lNode[i]);
            prevNode = newHead;
            continue
        };
        currNode = new ListNode(lNode[i]);
        prevNode.next = currNode;
        prevNode = currNode;
    }
    return newHead;
};


var addTwoNumbers = function(l1, l2) {
    let node1Val = [];
    let node2Val = [];

    let currNode = l1;
    while (currNode) {
        node1Val.push(currNode.val);
        currNode = currNode.next ? currNode.next : null;
    };
    currNode = l2
    while (currNode) {
        node2Val.push(currNode.val);
        currNode = currNode.next ? currNode.next : null;
    };
    node1Val = node1Val.reverse();
    node2Val = node2Val.reverse();
    let sNode;
    let lNode;
    let valS;
    let valL;
    if(node1Val.length >= node2Val.length) {
        sNode = node2Val;
        lNode = node1Val;
        valS = node2Val.length - 1;
        valL = node1Val.length - 1;
    } else {
        sNode = node1Val;
        lNode = node2Val;
        valS = node1Val.length - 1;
        valL = node2Val.length - 1;
    }
    while(valS >= 0 && valL >= 0) {
        lNode[valL] = (lNode[valL] + sNode[valS]);
        if (lNode[valL] > 9) {
            let diff = Math.floor(lNode[valL] / 10);
            lNode[valL] = lNode[valL] % 10;
            lNode[valL - 1] += diff;

        }
        valS--;
        valL--;
    }
    let newHead = null;
    let prevNode = null;
    for(let i = lNode.length - 1; i >= 0; i--) {
        if (newHead === null) {
            newHead = new ListNode(lNode[i]);
            prevNode = newHead;
            continue
        };
        currNode = new ListNode(lNode[i]);
        prevNode.next = currNode;
        prevNode = currNode;
    }
    return newHead;
};
