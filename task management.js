var employes = [
    { id : 1, name : "alex mercer",  job: "front-end"      },
    { id : 2, name : "james heler",  job: "front-end"      },
    { id : 3, name : "negan smith",  job: "back-end"       },
    { id : 4, name : "daryl dixon",  job: "back-end"       },
    { id : 5, name : "logan nelson", job: "photo designer" }
]

var employes_task = [
    { id : 1, name : "alex mercer",  task : "come at 9 morning" },
    { id : 2, name : "james heler",  task : "come at 9 morning" },
    { id : 3, name : "negan smith",  task : "come at 9 morning" },
    { id : 4, name : "daryl dixon",  task : "come at 9 morning" },
    { id : 5, name : "logan nelson", task : "come at 9 morning" }
]

while(asktask != "done")
{
    var asktask = prompt('what do you want to do ? '  +
                         '\n -------------------- \n examples : ' +
                         '\n - add task \n - remove task \n - show tasks' +
                         '\n --------------------')
    if(asktask === "add task")
    {
        var employe_name = prompt("enter a employe name :")
        employe_name = employe_name.toLowerCase()
        var tn = prompt("how many task you want to add? ") //tn : task number
        for(var i = 1; i <= tn; i++)
        {
            var addtask = prompt("enter your task : ")
            var newtask = { id : (i + 5), name : employe_name, task : addtask }
            employes_task.push(newtask)
        }
    }
    var tasks_number = employes_task.length
    if(asktask === "remove task")
    {
        var employe_name = prompt("enter a employe name :")
        employe_name = employe_name.toLowerCase()
        var remove_task = prompt("which task of " + employe_name +
                          " you want to remove?" +
                          '\n look at consol log for see his tasks : ')
        for(var i = 1; i <= tasks_number; i++)
        {
            if(remove_task === employes_task.task)
            {  employes_task.pop(employes_task[i]);  }
        }
    }
    var tasks_number = employes_task.length
    if(asktask === "show tasks")
    {
        for(var i = 1; i <= tasks_number; i++)
        {  console.log(employes_task[i].name + " | " + employes_task[i].task)  }
    }
}