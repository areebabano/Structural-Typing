// Structural Typing 

type person1Type = {
    name: string,
    age: number,
    slot: string
}

type person2Type = {
    name: string,
    age: number,
    slot: string
}


let person1: person1Type = {
    name:  "Fabiha",
    age: 17,
    slot: "Thursday"
}

let person2: person2Type = {
    name:  "Rubab",
    age: 18,
    slot: "Thursday",
}

person1 = person2

person2 = person1

// person1 = {
//     name:  "Rubab",
//     age: 18,
//     slot: "Thursday",
// }













