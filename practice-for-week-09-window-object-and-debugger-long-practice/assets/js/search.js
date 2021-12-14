export function findElementById(id) {
    // Return the element in the DOM with corresponding `id
    let stack = [...document.body.childNodes];
    while (stack.length) {
        let curr = stack.pop()
        if (curr.id === id) return curr;
        if (curr.childNodes.length) {
            stack = [...curr.childNodes].concat(stack);
        }
    }
    console.log(`Id name is not present`);
    return;
}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    let stack = [...document.body.childNodes];
    while (stack.length) {
        let curr = stack.pop()
        if (curr.tagName === tag) return curr;
        if (curr.childNodes.length) {
            stack = [...curr.childNodes].concat(stack);
        }
    }
    console.log(`Tag is not present`);
    return;
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    let stack = [...document.body.childNodes];
    while (stack.length) {
        let curr = stack.pop()
        if (curr.className === cls) return curr;
        if (curr.childNodes.length) {
            stack = [...curr.childNodes].concat(stack);
        }
    }
    console.log(`Class name is not present`);
    return;
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    let stack = [...document.body.childNodes];
    let tagged = [];
    while (stack.length) {
        let curr = stack.pop()
        if (curr.tagName === tag) tagged.push(curr);
        if (curr.childNodes.length) {
            stack = [...curr.childNodes].concat(stack);
        }
    }
    if (tagged.length) return tagged;
    else return console.log(`Tag is not present`);
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    let stack = [...document.body.childNodes];
    let classed = [];
    while (stack.length) {
        let curr = stack.pop()
        if (curr.className === cls) classed.push(curr);
        if (curr.childNodes.length) {
            stack = [...curr.childNodes].concat(stack);
        }
    }
    if (classed.length) return classed;
    else return console.log(`Class name is not present`);
}
