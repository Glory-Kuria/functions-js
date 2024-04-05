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



// Write a program that takes in the following array and use a while loop to iterate and break when
//  the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
// let arrNum = [1,2,3,4,5,6,7,8,9] 
//  function takeArray() {
//     let array = [1,2,3,4,5,6,7,8,9]
//     const arr =num.slice(0,5)
//  while(arr){
//     console.log(arr)
//  break;
//     }
// }
// takeArray()


// Write a function that takes in a an array of strings and use a continue statement when 
//  item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

 function arrayStrings(item){
     for(let i = 0; i < item.length; i++){
        if  (i ===2){
            continue;
         }
         console.log(item[i]);
    }
}
 arrayStrings(['apple','plum','banana','strawberries','kiwi'])


// Write a function that accepts an array of strings and console.logs each element using a for loop.
 function acceptArray(strings){
     for(let i =0; i<strings.length;i++){
       console.log(strings[i])
    }
}
acceptArray(["Glory","jane","ken","loice"])


// Write a JavaScript function that takes a string as input and reverses it using a while loop.
//   The function should return the reversed string.
//  function takeString(){
//      let name = "yvonne"
// while ('yvonne'){
// console.log(name.sort(""))
// }
// }
// takeString()

