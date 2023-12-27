// printnumbers from 1 to 5

for (let i=1; i<=5; i++){
        console.log(i);
}

let a=1
while(a<=5){
        console.log(a);
    a++
}

let y=1;
do{
        console.log(y);
    y++
}
while(y<=5);


//WAP to print all the keys of the given object

let student={
name:"Saurav",
age: 23,
cgpa: 3.0
}
for (let key in student){
    console.log("key=", key)
}


/*Write a program to print key and value in 'key - value' format of given object.
 var myObj = {city: ""Kathmandu"", state: ""Bagmati"", country: ""Nepal""}" */
 
 let  myObj = {
    city: "Kathmandu",
    state: "Bagmati", 
    country: "Nepal"
    }
    for (let key in myObj){
        console.log("key=",key,"value=",myObj[key])
    }