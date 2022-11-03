var exam1= +prompt("Enter Math Marks")
var exam2= +prompt("Enter Math Marks")
var exam3= +prompt("Enter Math Marks")
var exam4= +prompt("Enter Math Marks")
var exam5= +prompt("Enter Math Marks")
var obtainedmarks= sub1 + sub2 + sub3 + sub4 + sub5
var totalmarks=500
var total= obtainedmarks / totalmarks *100

if(total>=90){
    console.log("A+")
}else if(total>=80){
    console.log("A")
}else if(total>=70){
    console.log("B")
}else if(total>=60){
    console.log("C")
}else if(total>=50){
    console.log("D")
}else{
    console.log("Failed")
}