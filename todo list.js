var todolist = [
    { id : 1, todo : "watch js course",    situation : "done"   },
    { id : 2, todo : "practice js course", situation : "undone" },
    { id : 3, todo : "play a video game",  situation : "undone" }
]

var listsize = todolist.length
var newtodolist = new Array()
var order = prompt('what do you want to do? \n - add \n - remove \n - change situation')
order = order.toLowerCase()
console.log(todolist)
if(order === "add")
{
    var tn = prompt("how many task you want to add? ") //tn : task number
    for(var i = 1; i <= tn; i++)
    {
        var addtask = prompt("enter your task")
        var ti = i + 3  // ti : task id
        var newtask = {id : ti, todo : addtask, situation : "undone"}
        todolist.push(newtask)
    }
    listsize = todolist.length
}
else if(order === "remove")
{
    var delettask = prompt('which task you want to delet? ')
    delettask = delettask.toLowerCase()
    for(var i = 0; i <= listsize; i++)
    {  if(delettask == (todolist[i].todo))
        {
            todolist.pop(todolist[i]);
        }
    }
    console.log(newtodolist)
}
else if(order === "change situation")
{
    var ts = prompt("which task's situations you want to change? ")
    todos = prompt("enter your situations : ")  //todos : todo situation
    //  ts : task situation
    for(var i = 0; i <= listsize; i++)
    {    if(ts == todolist[i].todo)  {  todolist[i].situation = todos;  }}
}
console.log(todolist)