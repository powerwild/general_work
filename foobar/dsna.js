const arr = [];


const toHash = (str) => {
    let index = 0;
    for (let s of str) {
        let sCode = s.charCodeAt();
        index += sCode % 5;
    }
    return index;
}

const hashInsert = (key, value) => {
    let i = toHash(key);
    if (!arr[i]) return arr[i] = value;
    while (true) {
        if (!arr[i]) {
            arr[i] = value;
            break;
        }
        else i++;
    }
    return;
};

hashInsert('arrow', 'yes')
hashInsert('worra', 'no')
console.log(arr)
