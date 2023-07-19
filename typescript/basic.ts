/********************************************************************************************************************** */

// string
let vara: string = "hello"; // Declaration of vara
vara = "hi"; // Modification of the existing vara variable

console.log(vara);  // Output: "hi"
/********************************************************************************************************************** */

// number
let num: number = 10;
console.log(num);
/********************************************************************************************************************** */

// boolean
let isAdmin: boolean = true;
console.log({isAdmin});

/********************************************************************************************************************** */

//// MULTIPLE TYPES (UNION TYPES) OR OPERATOR
let testStringOrNumber: string | number;
 testStringOrNumber = 10;
 testStringOrNumber = "hello";
 console.log({testStringOrNumber})

/********************************************************************************************************************** */
//  Array

let strings: Array<string | number> = ['hello', 'world', 21];
console.log({strings});

let arrayStringNumberBoolean: Array<string | number | boolean> = ['string', 30, true]
console.log({arrayStringNumberBoolean})

let arrayAny: Array<any> = ["sajjad", 25, true]
console.log({arrayAny})

let arrayMethod: (number | string)[] = ['string', 12]
console.log({arrayMethod})

/********************************************************************************************************************** */

// Obect
let user: {
  username: string,
  age: number,
  isAdmin: boolean
} = {
   username: "sajad",
   age: 25,
   isAdmin: true
}

let user1: {
    id: number,
    name: string,
    age: number,
    isUser: boolean,
}

user1 = {
    id: 1,
    name: "string",
    age: 200,
    isUser: false,
}

console.log({user, user1})
/********************************************************************************************************************** */

// Functions
function users(params:(string | number)[]): (number | string )[] {
    console.log(params)
    return params
}

console.log({users: users(['sajjad', 'lama dev', 32])})

function funObj(params: {name: string, age: number, id: number}): {name: string, age: number, id: number} {
    return params;
}

console.log(funObj({name: "string", age: 10, id: 10}))

/********************************************************************************************************************** */

//// TYPE ALIASES

type UserType = {
    username: string;
    age: number;
    phone?: string;
  };
  
  let betterFunc = (user: UserType) => {
    return user
  };

  console.log(betterFunc());

  // interface

  type func1 = () => void;

  // single level inheritance
  interface IUser {
    id: number,
    name: string,
  }

  interface IUser1 extends IUser {
    password: string,
    isUser1: boolean,
  }

  // multilevel inheritance

  interface IUser12 extends IUser1 {
    flag: boolean
  }

  function name1 (user: IUser12): IUser12 {
       console.log(user.isUser1);
       return user

  }


  // generics

  interface IAuthor {
    id: number;
    username: string;
  }
  
  interface ICategory {
    id: number;
    title: string;
  }
  
  interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
  }

  interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }

  const obj: IPostBetter<string> = {
    id: 1,
    title: 'string',
    desc: "desc",
    extra: ['sa']
  }

  interface IPostEvenBetter<T extends object> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
  }

  let obj2: IPostEvenBetter<{id: number}> = {
    id: 12,
    title: "title",
    desc: 'desc',
    extra: [{id: 1}]
  }

  let obj3: IPostEvenBetter<IAuthor> = {
    id: 12,
    title: "title",
    desc: 'desc',
    extra: [{id: 1, username: "ddd"}]
  }