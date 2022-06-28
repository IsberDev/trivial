"use strict";


const btnNext= document.getElementById("btnNext");

const i = 0;
let correctCount = 0;

let answer=``;

btnNext.addEventListener('click', function(){
 document.getElementById("answer").innerHTML =  "<button id=`btnDisplayAnswer`>DISPLAY ANSWER</button>"; 
fetch("./data.json")
.then(
    function(response) {
        if (response.status !== 200) {
            console.log("Looks like there iss a problem. Status Code;" +
            response.status);
            return;
        }
        response.json().then(function(data){
           // console.log(data);
       const answer = data[0].correct;
       const question = data[0].question;
    //  const category = data[0].answers;
      console.log(category);
       //correctCount++
      console.log(question + ":" + answer);
      document.getElementById("question").innerHTML = question;
    //  document.getElementById("answer").innerHTML = answer;
      document.getElementById("category").innerHTML = category;
      //document.getElementById("answer").innerHTML = answer;
      document.getElementById("answer").style.display = "block";
      document.getElementById("btnDisplayAnswer").addEventListener(`click`, function(){
     this.document.getElementById("answer").innerHTML = answer;
      })      
    });
    }
    )
.catch(function(err){
    console.log(`Fetch Error : _S`, err);
});
});

