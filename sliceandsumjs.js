var mdnum = prompt("enter a multi-digit numer : ")   // grt multi-digit numbers
var mdna  = []    // multi-digit number array
var smn   = 0     // sum of multi-digit number slices
var mdnl  = (mdnum.length) - 1

for(var i = 0; i <= mdnl; i++)
{  
    mdna = mdnum.split('')
    for(var j = 0; j <= i; j++)
    { mdna[j] = Number(mdna[j])  }
}

for(var i = 0; i <= mdnl; i++)
{
    if(isNaN(mdna[i]) == true)
    {
        mdnum = prompt("enter again a multi-digit numer : ")
        mdna  = mdnum.split('')
        mdnl  = mdnum.length
        for(var i = 0; i <= (mdnl - 1); i++)
        {
            mdna[i] = Number(mdna[i]);
            smn = smn + mdna[i]   
        }
    }
    else
    {
        for(var i = 0; i <= mdnl; i++)
        {  smn = smn + mdna[i]  }
    }
}
alert("your number : " + mdnum + '\n' + "sum of your number digits : " + smn)