const fs= require('fs');
fs.writeFileSync("Hello.txt","This is from node.js");
const employees = (empname, age) =>
{
    return("My name is" + empname + " and my age is:" +age);
}

console.log(employees("Thushar",'46'));
