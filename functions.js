// use a function to reverse all the elements in the string in ascending order and the specific ements in descending order

function sort(){
    newarray =[]
    let words=["home","country","place","palestine","parking","pole"];
    words.forEach(i => {
        if(i[0]=="p"||i[0]=="P"){
        let newwords=i.split("").sort().reverse("").join("")
        newarray.push(newwords)
        console.log(newarray);
        }
         else{
             let newwords = i.split("").sort().join("")
            newarray.push(newwords)
         }
    }
        )
        console.log(newarray)
    
}
sort()

// return positive if an element within the array is positive,negative if an element is negative,else zero
function num(){
    let element=[]
    let number =  [2,-3,4,0,-5]
    number.forEach(i=>{
        if(i>0){
            let result = "positive"
            element.push(result)
        }
        else if(i<0){
            result ="negative"
            element.push(result)
        
    }
       else{
            result = "zero"
            element.push(result)
        }    
    });
    
    return element
}

// let a = [5,-2,-1,7,0]
   console.log( num());

    
 function employees(){
let arremployees = [
    {name:"Rachael",id:"g5766f",salary:100000},
    {name:"Glory",id:"3546790",salary:100000},
    {name:"Jane",id:"46fhfg7",salary:30000}
]
return arremployees.sort ((b,a) => a.salary -b.salary)
 }
 console.log (employees())

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


function array(numbers){
    let num = numbers.slice(0,4)
    let newnums = numbers.slice(-4) 
    num.forEach(i=>{
        console.log(i*i)
    })
    newnums.forEach(i=>{
        console.log(i+5)
    })
}
array([11,12,50,3,6,6,7,0,5])

// const numbers =[4,6,8,10,12,11]
// function array(numbers){
//     numbers.forEach((number,index)=>{
// if (index<4){
//     numbers[index]=number*8
// }
//     else if(index>=numbers.length-2){
//         numbers [index]= number+5
//     }
//     })

// console.log(numbers)
// }
// array(numbers)

