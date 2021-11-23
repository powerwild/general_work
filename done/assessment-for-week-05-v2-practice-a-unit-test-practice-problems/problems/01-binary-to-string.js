function binaryToString(binaryBlob) {
if (binaryBlob.length === 8) return `${String.fromCharCode(parseInt(binaryBlob, 2))}`
  return `${String.fromCharCode(parseInt(binaryBlob.slice(0, 8), 2))}${binaryToString(binaryBlob.slice(8))}`;
}
let start = Date.now();
console.log(binaryToString('010000010100001001000011'));  // 'ABC'
let end = Date.now();
console.log(end - start);


module.exports = binaryToString;
