const people=[
    {name:'Alice',age:17},
    {name:'Eunice',age:22},
    {name:'Charlie',age:14},
    {name:'Max',age:19},
];

function newArray(){
    let arr=[]
    people.forEach(item =>{
       if(item.age>=18){
           arr.push(item)
        }
    })
    console.log(arr)
}
newArray()


const products = [
    {name:'Laptop',price:1200,category:'Electronics'},
    {name:'shirt',price:25,category:'Clothing'},
    {name:"Headphones",price:80,category:'Electronics'},
    {name:'shoes',price:60,category:'Clothing'},
]
function arrOfObjects(){
var ObjectConstructor =Object.groupBy( products,item =>{
    return item.category
})
console.log(ObjectConstructor)
}
arrOfObjects()


const students =[
    {name:'john',scores:[90,80,85]},
    {name:'jane',scores:[95,92,88]},
    {name:'jim',scores:[70,80,75]},
    {name:'jill',scores:[85,90,84]},
]

function newArr(){
    const average = []
  students.forEach(i => {
     let sum = i.scores.reduce((a,b) => a +b);
     const calculate = sum/i.scores.length
     if(calculate >= 85){
         average.push(i.name)
     }});
     console.log(average)
     return average
}
newArr();



const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
      console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };
  
  function takesCar(){
      car.age = function(){
         let currentYear = 2024
         return currentYear - car.year
      }
      console.log(car.age())
  }objects.ObjectConstructor
  takesCar()



    
    
    
    
  function takesArray(names){
    let i =0
    let newArray=names.map(names=>{
        if(names[i].length>5)
        i++ 
    {
            return (names[i])
        }
    })
    console.log(names[i]);
  }
  takesArray(["jane","mercy","kennedy","matthew"])
    
    
    
