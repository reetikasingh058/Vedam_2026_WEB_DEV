//Print all odd numbers from 1 to 30.

for(let i=1;i<=30;i=i+2){
    console.log(i);
}

//Find the sum of all even numbers from 1 to 20.
let sum =0;
for(let i =2;i<=20;i=i+2){
    sum= sum+i;
}
console.log("Sum of even numbers from 1 to 20 is", sum);

//Find the factorial of a number.
//Example: Input = 5

let fact=1;
for(let i=5;i>0;i--){
    fact= fact*i;
}
console.log("Factorial of 5 is", fact);

// Print the multiplication table of a number entered by the user.

for( let i=1;i<=10;i++){
   let multiple = 5*i;
console.log(multiple);
}

//let i=1;
//while(i<=10){
//   // let multiple=5*i;
//   // console.log(multiple);
//   // i++;
//}
//Q6. Print each character of a string separately.
//let str = "coding";

let str="coding";
for(let i =0;i<str.length;i++){
    console.log(str[i]);
}

//Count uppercase and lowercase letters separately.
//let str = "HelloWORLD";
let str1 = "HelloWORLD";
 let uppercasecount=0;
    let lowercasecount=0;
for(let i=0;i<str1.length;i++){
    if(str1[i]>='A' && str1[i]<='Z'){
        uppercasecount++;
    }
    else{
        lowercasecount++;
    }
}
 console.log("Uppercase count is", uppercasecount);
    console.log("Lowercase count is", lowercasecount);

    //Find the second-largest element.
//let arr = [10, 20, 5, 40, 30];
let arr = [10, 20, 5, 40, 30];
arr.sort((a, b) => a - b);

    console.log(arr[arr.length-2]);
//Find how many times a particular number appears.
//let arr = [2, 4, 2, 5, 2, 7];
//let target = 2;

arr1=[2, 4, 2, 5, 2, 7];
arr1.sort((a,b)=> a-b);
let target=2;
let count=0;
for( i =0;i<arr1.length;i++){
    if(arr1[i]===target){
        count++;
    }
}
console.log("Count of", target, "is", count);

//Create a new array containing only positive numbers.
//let arr = [-2, 5, -7, 8, 10, -1];
//Output: [5, 8, 10]
let arr2 = [-2, 5, -7, 8, 10, -1];
let positivearr=[];
for(let i =0;i<arr2.length;i++){
    if(arr2[i]>0){
        positivearr.push(arr2[i]);
    }
}
console.log("Positive array is", positivearr);

