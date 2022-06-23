let num1=40 
let num2=5
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent=num2
sumEl=document.getElementById("sum-el")
function add(){
    let addition= num1 + num2
sumEl.textContent=addition
}
function subtract(){
    let subtraction= num1 - num2
    sumEl.textContent=subtraction
}
function multiply(){
    let multiplication= num1 * num2
    sumEl.textContent= multiplication
}
function divide(){
    let division= num1/num2
    sumEl.textContent= division
}
