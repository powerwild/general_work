var addTwoNumbers = function(l1, l2) {
    let node1Val = '';
    let node2Val = '';

    let currNode = l1;
    while (currNode) {
        node1Val += currNode.val;
        currNode = currNode.next ? currNode.next : null;
    };
    currNode = l2
    while (currNode) {
        node2Val += currNode.val;
        currNode = currNode.next ? currNode.next : null;
    };
    node1Val = parseInt(node1Val.split('').reverse().join(', '));
    node2Val = parseInt(node2Val.split('').reverse().join(', '));
    newValue = (node1Val + node2Val).toString();
    let newHead = null
    for(let i = newValue.length - 1; i >= 0; i--) {
        if (newHead === null) {
            newHead = ListNode(newValue[i]);
            currNode = newHead;
            continue
        };
        currNode.next = ListNode(newValue[i]);
        currNode = currNode.next;
    }
    return newHead;
};
