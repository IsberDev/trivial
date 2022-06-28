"use strict";


let i = 0;
let correctCount = 0;

let generate = "preguntas respuestas";

async function cinemaQuiz (){ 
   const errorArea = document.querySelector("p.error");
    try {
    const response = await fetch ("./data.json");
    if(response.ok){
     const dat = await response.json();
     console.log (dat[1].question);
     console.log (dat[1].answers[0]);
     
     function generate(){
      document.getElementById("question").innerHTML = dat[0].question;
      document.getElementById("optt1").innerHTML = dat[0].answers[0];
      document.getElementById("optt2").innerHTML = dat[0].answers[1];
      document.getElementById("optt3").innerHTML = dat[0].answers[2];
      document.getElementById("optt3").innerHTML = dat[0].answers[3];
      cinemaQuiz(); 
      checkAnswer();
    
       
      function checkAnswer() {
   
       if(document.getElementById("#optt1").checked && dat[0].answers[0] === jsonData[i].answer[0])
       {
         correctCount++;
       }
       if(document.getElementById("#optt2").checked && dat[0].answers[1] === jsonData[i].answer[1])
       {
     
          correctCount++;
       }
       if(document.getElementById("#optt3").checked && dat[0].answers[2] === jsonData[i].answer[2])
       {
          correctCount++;
       }
       if(document.getElementById("#optt4").checked && dat[0].answers[3] === jsonData[i].answer[3])
       {
       correctCount++
       } 

      
       //contador preguntas
       i++;
       if(jsonData.length -1 < i){
         document.write("******Tu puntucación es:",  +correctCount+ "******");
       
       //console.log(generate(dat));
  
      }

        //checkAnswer();
       }
   }
    }} catch (error) {
  console.error("Error:", error.message);
  errorArea.textContent = error.message;
}
}

cinemaQuiz();
generate();     
     
        //callback
  /*
        async function cinemaQuiz (){ 
          const errorArea = document.querySelector("p.error");
           try {
           const response = await fetch ("./data.json");
           if(response.ok){
            const dat = await response.json();
            console.log (dat[1].question);
            console.log (dat[1].answers[0]);
           }
       } catch (error) {
         console.error("Error:", error.message);
         errorArea.textContent = error.message;
       }
       }
          cinemaQuiz();
            
            function generate (){
       
              document.getElementById("#question").innerHTML === dat[0].question;
              document.getElementById("#optt1").innerHTML === dat[0].answers[0];
              document.getElementById("#optt2").innerHTML === dat[0].answers[1];
              document.getElementById("#optt3").innerHTML === dat[0].answers[2];
              document.getElementById("#optt3").innerHTML === dat[0].answers[3];
              cinemaQuiz(); 
              
              function checkAnswer() {
               addEventListener.
           
               if(document.getElementById("#optt1").checked && dat[0].answers[0] === jsonData[i].answer[0])
               {
                 correctCount++;
               }
               if(document.getElementById("#optt2").checked && dat[0].answers[1] === jsonData[i].answer[1])
               {
                  correctCount++;
               }
               if(document.getElementById("#optt3").checked && dat[0].answers[2] === jsonData[i].answer[2])
               {
                  correctCount++;
               }
               if(document.getElementById("#optt4").checked && dat[0].answers[3] === jsonData[i].answer[3])
               {
               correctCount++
               } 
               //contador preguntas
               i++;
               if(jsonData.length -1 < i){
                 document.write("******Tu puntucación es:",  +correctCount+ "******");
               
                 generate();}
       
                 checkAnswer();
               }
           }
       */

        
          
        
        
       
        /*
        function tellAdunt(objPeople, numberAdultAge) {
            for (const key in objPeople) {
                if(people[key] < numberAdultAge) {
                    console.log (`${key} tiene ${objPeople[key]} años y es menor de edad.`);
                } else {
                  console.log (`${key} tiene ${objPeople[key]} años y es mayor de edad.`);
                }
            }
        }
        
        tellAdunt(people, adultAge)*/
        
        