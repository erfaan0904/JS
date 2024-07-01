var users = [
    { id : 1, name : "alex",   lastname : "mercer", age : 24},
    { id : 2, name : "artor",  lastname : "morgan", age : 30},
    { id : 3, name : "thomas", lastname : "shelby", age : 18}, ]

users.forEach(function(user)
{  console.log("name      : " + user.name + '\n' + "last name : " + user.lastname)  })
