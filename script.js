let randomNum = Math.random()*6;
console.log(randomNum);

//random no poin
let randomFloor = Math.floor(Math.random()*9);
console.log(randomFloor);

//can operate
let randomO = Math.floor((Math.random()*8)+1);
console.log(randomO);


//if statement
let bt = document.getElementById("bt");
let In = document.getElementById("in");
let lcen = true;


bt.onclick = function(){
    bt = document.getElementById("in").value;
    if(bt <= 10){
        document.getElementById("hello").textContent = `ទៅផ្ទះ ${bt}`;
        if(lcen){
            document.getElementById("hello2").textContent = `You deserve`;
        }
        else{
            document.getElementById("hello2").textContent = `Not deserve`;
        }
    }
    else{
         document.getElementById("hello").textContent = `អត់ចង់​! ${bt}`;
    }
    
}


