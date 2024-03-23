 var name= prompt("please enter your name");
 var gender =prompt("please enter your gender (male/female)");
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
 var inputArray=[];
 takeInput();
 printItems();

 function takeInput(){ 
     
    let in1=0 ,in2=0,in3=0;
     in1=prompt("do you make to-do list in daily basis? (yes/no)")
   
    while(in1!='yes'&&in1!="no"){
          alert("you input is invalid plesse try again and answer wilth yes or no ");
          in1=prompt("do you make to-do list in daily basis? (yes/no)");
      }
     inputArray[0]=in1;

      in2=prompt("do you think making a to-do list is a waste of time? (yes/no)");
      
      while(in2!='yes'&&in2!="no"){
          alert("you input is ivalid plesse try again and answer wilth yes or no ");
          in2(prompt("do you think making a to-do list is a waste of time? (yes/no)"));
     }
     inputArray[1]=in2;
      in3 =prompt("would you like to use out to-do list app? (yes/no)");
     while(in3!='yes'&&in3!="no"){
          alert("you input is ivalid plesse try again and answer wilth yes or no ");
          in3=prompt("would you like to use out to-do list app? (yes/no)");
      }
     inputArray[2]=in3;
}
function printItems(){
        for(let i=0;i<inputArray.length;i++){
            console.log(inputArray[i]);
        }
}

