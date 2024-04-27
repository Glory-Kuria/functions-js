// Write a program that takes in an array of numbers and consoles the first four items multiplied by itself 
//  and the last two added by 10. Return the array with the new values

 function arrayOfNumbers(items){
let num = items.slice(0,4)
    let newnums = items.slice(-2) 
    num.forEach(i=>{
        console.log(i*i)
    })
    newnums.forEach(i=>{
        console.log(i+10)
    })
  }
  arrayOfNumbers([10,11,2,3,4,5,67,8,10,9,15,13])


let numbers = [10,20,30,40,50,60]
let newArray = []
  function arrayOfNums(){
    numbers.slice(0,4).forEach(a=>
newArray.push(a*a)
    )
    numbers.slice(-2).forEach((a)=>
    newArray.push(a+10)
    )
    return newArray
   

  }
  console.log(arrayOfNums(numbers))
// // Write a program that takes in the following array and use a while loop to iterate and break when
// //  the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
//  function takeArray() {
//     let array = [1,2,3,4,5,6,7,8,9]
//     const arr =array.slice(0,5)
//   while(arr){
//     console.log(arr)
//   break;
//      }
//  }
//  takeArray()

 function takeArrayy(arr) {
  let i = 0
  while(i<arr.length)
  if(i ===4){
    break;
  }
   else{
    console.log(arr[i])
    i++
  }
}
takeArrayy([1,2,3,4,5,6,7,8,9,0])


// // // Write a function that takes in a an array of strings and use a continue statement when 
// // //  item is at the second index: // let fruits= ['apple','plum','banana','strawberries','kiwi']
  function arrayStrings(strings){
    for(let i =0; i<strings.length;i++){
      if(i===2)
     {
      continue;
      }
      console.log(strings[i]);
    }}
    arrayStrings(['apple','plum','banana','strawberries','kiwi'])


// // // Write a function that accepts an array of strings and console.logs each element using a for loop.
  function acceptArray(strings){
     for(let i =0; i<strings.length;i++){
       console.log(strings[i])
    }
 }
 acceptArray(["Glory","jane","ken","loice"])


// // Write a JavaScript function that takes a string as input and reverses it using a while loop.
// //   The function should return the reversed string.
 function takeString(name){ 
 while ('name'){
 console.log(name.split("").reverse("").join(""))
 break;
}
return name.split("").reverse("").join("")

 }
takeString('yvonne')

function takesNum(numbers){
    let nums = numbers.slice(0,4)
    let newnum = numbers.slice(-2)
    nums.forEach(i =>{
console.log(i*3)
})
newnum.forEach( i=>{
  (i+10)
})
    return numbers
}
takesNum([1,2,3,4,5]);


let name="Arsenal"
function reverseString(str){
  let reverseString =""
  let i = str.length-1
  while(i>=0){
    reverseString+=str[i]
    i--
  }
  return reverseString
}
console.log(reverseString(name))


y=[1,2,3,4,5]
w=[6,7,8,9,0]
z=y.concat(w)
console.log(z)

x=[[1,2,3],[1,5,6,7],[8,9,5]]
u= x.flat(Infinity)
console.log(u)


// multyplying a number by itself
let a=[1,2,3,4,5,6]
let b=a.reduce()
console.log(b)



 