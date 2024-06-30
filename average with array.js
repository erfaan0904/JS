var nums      = new Array()
var a_size    = prompt("how many numbers you want to enter?")
var a_sum     = 0
var a_average = 0
while(isNaN(Number(a_size)) == true)
{ a_size = Number(prompt("enter again your number : ")) }
for(var i = 1; i <= a_size; i++)
{
    a = prompt("enter " + i + "st number : ")
    while(isNaN(Number(a)) == true)
    { a = Number(prompt("enter again your " + i + "st number : ")) }
    while(a == "" || a == " ")
    { a = Number(prompt("enter again your " + i + "st number : ")) }
    nums.push(a)
}
for(var i = 1; i <= a_size; i++)
{    a_sum += i    }
a_average = a_sum / a_size
console.log("your numbers sum : " + a_sum + '\n' + '\n' + "yor numbers average : " + a_average)