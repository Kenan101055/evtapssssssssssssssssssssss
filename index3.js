const users = [
    {name: "Elvin", surname: "Huseynov"},
    {name: "Ruslan", surname: "Mammadov"}
] 
let a = users.map((element)=> `${element.name} ${element.surname}`)
console.log(a);
