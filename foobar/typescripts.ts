/*

*/
// function add(x: number, y: number) {
//     return x + y;
// }
// console.log(add(1, 2))
// let message: string = 'Hello World';
// console.log(message)

function increment(counter: number): number {
    return ++counter
}
//accepts only a number and returns only a number

interface Product {
    id: number,
    name: string,
    price: number
}
function getProduct(id: number, price: number): Product {
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: price
    }
}
// getProduct returns a Product
const prod = getProduct(1, 99.5);
//console.log(`The product ${prod.Name} costs $${prod.price}`) //Will notify you that Name doesn't exist on prod

// const heading: HTMLHeadingElement | null = document.querySelector('h1')


//let arr: type[] = []
let strArr: string[] = ['a', 'b', 'c'];
let numArr: number[] = [1, 2, 3];
let str_num_arr: (number | string)[] = ['a', 'b', 1, 2]; //allows numbers and strings in array
let tuple: [number, string, boolean, string?] = [10, 'apples', true];
//tuples are arrays with fixed lengths and positional types for elements and can have optional elements at end


let person: {
    name: string,
    age: number
}
//person will only accept an object with the preceeding form

let employee: object;
//employee can only be assigned an object

let manager: Object;
//manager can only be assigned an object but also inherits the functionality of the builtin Object like the toString() and valueOf() methods

let greeting: (name: string) => string;
// greeting can be assigned any function that accepts a string and returns a string



// Types are number, bigint, string, boolean, null, undefined, symbol

//Number
let x: number = 9.99; //Decimal
let bin: number = 0b100; //Binary
let octal: number = 0o10; //Octal
let hexa: number = 0XA; //Hexadecimal
let big: bigint = 9007199254750991n; //Big Integers

//String
let fName: string = 'John';
let sentence: string = `This string
spans multiple
lines!!!`; //back ticks can be used for string interpolation or spanning multiple lines

//Boolean
let isActive: boolean = true;



//enum
enum Month {
    Jan=1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
//enums can also be indexed. index starts at 0 by default but can be set to start with a specific value
function isItSummer(mon: Month): boolean {
    let isSummer: boolean;
    switch (mon) {
        case Month.Jun || Month.Jul || Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}
const req = {
    id: 1,
    status: ApprovalStatus[1],
    description: 'This request is ready for approval'
}
req.status = ApprovalStatus[2]
if (req.status === ApprovalStatus[2]) console.log('Request is approved.')


let something: any;
something = 5.333333;
console.log(something.toFixed(1))
//any lets any type be assigned to the variable and call the builtin methods for the value assigned


function log(mess): void {
    console.log(mess);
}
//void is typically used for a function that doesn't return a value


function throwsError(): never {
    throw new Error("Doesn't return!")
}
function func(a: number | string): boolean {
    if (typeof a === 'string') return true;
    if (typeof a === 'number') return false;
    return throwsError();
}
//never type is used when a function only throws an error or will infinitely loop


let unionType: string | number | boolean;
// | allows multiple types to be assigned


type letters = string;
type lettersAndNumbers = string | number;
let str: letters = 'abc';
// types can be given an alias to use


let accepted: 'yes' | 1 | true;
//accepted can only be assigned one of the specified values


function multiply(a: number, b: number, c?:number): number {
    if (c !== undefined) return a * b * c;
    else return a * b;
}
//create an optional parameter with ?


//overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

class Person {
    private name: string;
    protected password: string;
    public email: string;
    readonly birthDate: Date;
    /*
    constructor(private name: string, protected password: string, public email: string, readonly birthDate: Date) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate
    }
    */
}
/*
    private - only methods and properties within the class can access the property
    protected - only accessible from within the class or a class that inherits from it
    public - default accessible anywhere anytime
    readonly - makes property immutable
*/
abstract class APerson {
    constructor(name: string, ein: number) {
    }
    abstract getSalary(): number
}
// abstract classes cannot be instatiated and can only be inherited from. has at least on abstract method that the child class with provide functionality to.


interface Human {
    firstName: string;
    middleName?: string;
    lastName: string;
}
interface FuncFormat {
    (str: string, isUpper: boolean): string
}
//interface can be used to create custom typing for paramters or unassigned variables
//interfaces can inherit from multiple other interfaces via extends i1, i2, i3
//interfaces can inherit from classes but if private or protected properties are inherited then the interface can only be implemented by that class or its children
interface Partner {
    name: string;
    credit: number;
}
interface Identity {
    id: number;
    name: string;
}
interface Contact {
    email: string;
    phone: string;
}
type Employee = Identity & Contact
type Customer = Partner & Contact
// & can be used to combine interfaces into one type that has all properties from the included interfaces
