const btn = document.getElementById("btncounter")
const retry = document.getElementById("retry")
let input = document.getElementById("input")
let timeup = true
let time = 0
let counter = 0
let intervalid = null;
let firstclick = true;
let timelimit = 5;
function increment(){
    if(firstclick){
        intervalid = setInterval(startimer, 1000)
        firstclick = false
        timeup = false
        input.style.backgroundColor = "#181717"     
        if(input.value == "" || input.value <= 0 || input.value%1){
            input.value = 5
            timelimit = 5
        }
    }
    if(!timeup){
    counter++
    btn.innerHTML = counter;
    }
}


function startimer(){
    time++
    input.value = timelimit - time
    if(time == timelimit){
        input.value = timelimit
        clearInterval(intervalid)
        timeup = true
        btn.innerHTML ="Your CPS is " + (counter/time).toFixed(1)
    }
}
function reset(){
    time = 0
    counter = 0
    clearInterval(intervalid)
    firstclick = true
    btn.innerHTML = 0
    timeup = true
    input.innerHTML = input.value
}   

btn.addEventListener('click',  increment)
retry.addEventListener('click', reset)
input.addEventListener("input", logtest)

function logtest(){
    input.style.backgroundColor = "#181717"
    timelimit = input.value
}