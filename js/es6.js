let name = "noona"
let age = 17 

let person = {
    name, age
}

/* let person= {
name : name,
age: age} */

console.log(person)

//Destructuring
let person2 = {
    name2 : "noona2",
    age2: 20 
}

//let name = person2.name
//let age2 = person2['age2']
let {name2, age2} = person2
console.log(person2)

let array = [1,2,3,4] 
let [a,...rest] = array 

console.log(rest)

//spread 
let person3 = {name:"noona3", age:12} 

let person4 = {...person3, address : "Suwon", name: "Jimin"} //객체를 하나 더 생성
let person5 = person3 //주소 값을 가져옴 


console.log(person4) 
console.log(person5)

let c = [1,2]
let d = [...c,3]

console.log(d)

let e = [...c, ...d]
console.log(e)

//삼항연산자 
let person10 = {name :"누나", age: 17} 

/* if(person10){
    console.log(person10.name)
}else {
    console.log("there is no person")
} */

console.log(person10?person10:"there is no person")