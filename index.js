let users = ["mahesh", "test", "raju"];

for (let  i =0; i< users.length; i++) {
  console.log(users[i])
}

const listofobj = [
  {name:"mahesh",age:25},
  {name:"raju", age:28}
                ];


for (let j= 0; j< listofobj.length; j++) {
  const toLog = listofobj[j].name + " age is " + listofobj[j].age;
  console.log(toLog);
}

