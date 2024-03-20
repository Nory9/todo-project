var name= prompt("please enter your name");
var gender =prompt("please enter your gender (male/female)");
print(gender);
if(gender!="male"&&gender!="female"){
    alert('you entered your gender wrong please try again');
    gender =prompt("please enter your gender (male/female)");
}
var age=prompt("please enter yor age");
while(age <=0){
    alert("your age should be above zero");
    age=prompt("please enter yor age");
}
 var welcome_message =confirm("do you want a welcoming message?");
 if(welcome_message==true){
    if(gender=='female'){
        alert(`welcome Ms ${name} to TO-DO website`);
    }
    else if(gender=='male'){
        alert(`welcome Mr ${name} to TO-DO website`);
    }
    else
        alert(`welcome ${name} to TO-DO website`);
 }