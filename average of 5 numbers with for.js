var anumber = 0   // average number
var num = 0       // numbers
for(var i = 1; i <= 5; i++)
{
    var num = num + Number(prompt("enter number " + i + " : "))
    anumber = num / 5
}
alert("sum of your numbers : " + num + '\n' + '\n' + "average of your numbers : " + anumber)
