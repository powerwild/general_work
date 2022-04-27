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


const dataJSON = await fetch('')
