var math_operation = new Array()
var input = prompt("ENTER A MATH IPERATION LIKE : 1 + 2 OR ANYTHING ELSE ")
math_operation = input.split(" ")
var array_size = math_operation.length
for(var i = 0; i <= (array_size - 1); i++)
{
    // console.log(math_operation[i] + " - " + typeof(math_operation[i]))

    if(math_operation[i] === "+")
    {
        answer = Number(math_operation[i - 1]) + Number(math_operation[i + 1])
        console.log(answer)
    }
    if(math_operation[i] === "-")
    {
        answer = Number(math_operation[i - 1]) - Number(math_operation[i + 1])
        console.log(answer)
    }
    if(math_operation[i] === "*")
    {
        answer = Number(math_operation[i - 1]) * Number(math_operation[i + 1])
        console.log(answer)
    }
    if(math_operation[i] === "/")
    {
        answer = Number(math_operation[i - 1]) / Number(math_operation[i + 1])
        console.log(answer)
    }
    if(math_operation[i] === "**")
    {
        answer = Number(math_operation[i - 1]) ** Number(math_operation[i + 1])
        console.log(answer)
    }
}
