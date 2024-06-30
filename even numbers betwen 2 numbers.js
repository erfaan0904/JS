var num1 = prompt("Enter 1st number : ")  // FIRST  NUMBER
while(isNaN(Number(num1)) == true)
{ num1 = prompt("Enter again 1st number : ") }

var num2 = prompt("Enter 2st number : ")  // SECOND NUMBER
while(isNaN(Number(num2)) == true)
{ num2 = prompt("Enter again 2st number : ") }

console.log("even numbers between " + num1 + " and " + num2 + " : ")
for(var i = num1; i <= num2; i++)
{    if((i % 2) == 0) { console.log(i) }    }
