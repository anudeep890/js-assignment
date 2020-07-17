console.log("Question 1")
num = prompt("Enter a number");

function number(num=0){
   let n = num%2;
   return n;
}

let check = number(num);
if(num == 0){
    console.log("Please reload the page and enter any number ")
}
else{
    if(check === 0){
        console.log("The number entered is "
        + num +" and Number is even" );
     }
     else{
        console.log("The number entered is "
        + num +" and Number is Odd");
     }
}



