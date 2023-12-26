/* Write a code which can give grades to students accoring to their  scores:
      80-100  A
      70-89   B
      60-69   C
      0-49    F      */

 let score = prompt("Enter the score");
 if (score>=80&&score<=100){
    console.log("Grade is A");
 }
 else if (score>=70&&score<=89){
    console.log("Grade is B");
 } 
 else if (score>=60&&score<=69){
    console.log("Grade is C");
 }
 else{
    console.log("Grade is F")
 }


 // Check if the number is multiple of % or not

 let num = prompt("Enter a number");
 if (num%5===0){
    console.log("Multiple of 5");
 }
 else{
    console.log("Non multiple of 5");
 }