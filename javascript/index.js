let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0
function increment(){
    count+=1
    countEl.textContent=count
}
function save(){
   let newEntries= count + " - "
    saveEl.textContent += newEntries
    countEl.textContent=0
    count=0
}
console.log("hello, you are welcome to my passenger counter app!!! ")
//canged from .innerText to .textContent to view some elements hidden. dated 13th june 2022 by justiniyke