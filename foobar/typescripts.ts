/*

*/
function add(x: number, y: number) {
    return x + y;
}
console.log(add(1, 2))
let message: string = 'Hello World';
console.log(message)

function increment(counter: number): number {
    return ++counter
}
//accepts only a number and returns only a number

interface Product {
    id: number,
    name: string,
    price: number
}
function getProduct(id, price): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: price
    }
}
// getProduct returns a Product
const prod = getProduct(1, 99.5);
//console.log(`The product ${prod.Name} costs $${prod.price}`) //Will notify you that Name doesn't exist on prod

const heading: HTMLHeadingElement | null = document.querySelector('h1')

//let arr: type[] = []
let strArr: string[] = ['a', 'b', 'c'];
let numArr: number[] = [1, 2, 3];
let str_num_arr: (number | string)[] = ['a', 'b', 1, 2]; //allows numbers and strings in array

let person: {
    name: string,
    age: number
}
//person will only accept an object with the preceeding form

let greeting: (name: string) => string;
// greeting can be assigned any function that accepts a string and returns a string
