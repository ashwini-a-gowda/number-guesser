const input = document.querySelector("#guess");
const form = document.querySelector('.number');
const submit = document.querySelector('.sub');
// const div =document.querySelector('.box');
const div1 = document.querySelector(".result");

const number = Math.floor(Math.random()*10+1);
console.log(number);

submit.addEventListener("click", numberGuesser);
let  guess =1;

function numberGuesser(e){
  
  if (guess == 4){
    alert("You reached your Guess limit, please refresh the page to try again");
  }

if (input.value==""){
  alert("Please enter a number between 1-10")
}

 else if (input.value == number){
   
   div1.innerText = "Your Guess is correct!";
 
   guess=1;
  console.log(23); 

 }
else {

div1.innerText= "Your Guess is wrong:( Try again";
  guess++;

}
e.preventDefault();

}