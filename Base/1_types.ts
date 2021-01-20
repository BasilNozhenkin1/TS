/*
Strings
 */
const str: string = 'Hello';
/*
Boolean
 */
const isFetching: boolean = true;
const isLoading: boolean = false;
/*
Num
 */
const int: number = 32;
const float: number = 3.2;
const other: number = 3e9;
/*
Arrays
 */
const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5];

const wordArray: string[] = ['World', 'is', 'a', 'beautiful', 'place'];
const wordArray2: Array<string> = ['World', 'is', 'a', 'beautiful', 'place'];
/*
Tuple
 */
const mydata: [string, number] = ['Vasiliy', 26];
/*
Any type
 */
let changeThisDatatype: any = 42;
changeThisDatatype = 'hello world';
/*
fns
 */
function sayHelloToUsername(username:string):void {
    console.log(username);
}
sayHelloToUsername('guest');
/*
never
 */
function throwNewError(message:string): never {
    throw new Error(message);
}

function infinite():never {
    while (true) {

    }
}
/*
types
 */
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = '2245';
const id2: ID = 1;