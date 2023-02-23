//document.getElementById("count-el").innerText=5

// let count=0
// console.log("hello world")

// let count=0
// function increment(){
//     console.log("button clicked")
// }
let count=0
let prev=document.getElementById("previous-el")
let c=document.getElementById("count-el")
function increment(){
    count++
    c.innerText=count
}

function save(){
    console.log(count)
    prev.innerText+=count+"-"
}
function reset(){
      c.innerText=0
      count=0
      prev.innerText="Previous entries :"
}
