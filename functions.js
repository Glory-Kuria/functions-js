// use a function to reverse all the elements in the string in ascending order and the specific ements in descending order

function sort(){
    let words=["home","country","place"];
    console.log(words.sort());
    console.log(words.reverse());
}
sort()

// return positive if an element within the array is positive,negative if an element is negative,else zero
function num(number){
    number.forEach(i=>{
        if(i>0){
            console.log('positive');
        }
        else{
            console.log('negative')
        }
        if(i==0){
            console.log('zero')
        }    
    });
}
    num([5,-2,-1,7,0]);

    
// function employees(){

// }

// write a function that takes in an array of numbers and uses the forEach() method to console.log each number multiplied by2
function numbers(nums){
    nums.forEach(i=>{
        console.log(i*2)
    })
}
numbers([12,16,70,80,50,])

// write a function that takes in an array ofnumbers and consoles the first four items multiplied by 8
// and the last two added by 5
function array(items){
    let newvalue=items.slice(0,4)
    let newvalue2=items.slice(-2)
    newvalue.forEach(i=>{
        console.log(i*8);
    })
    newvalue2.forEach(i=>{
        console.log(i +5)
    })
}
array([10,12,4,90,5,73,20,5,8])

