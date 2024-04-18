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
    {name:'kaptop',price:1200,category:'Electronics'},
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
