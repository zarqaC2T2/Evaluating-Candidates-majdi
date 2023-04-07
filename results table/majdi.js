let arrData =[] // all the questions will be pushed here
let numberOfQuestions=0; // number of questions
let numberOfPassedQuestions=0; // number of passed questions
let index0=1;
  sessionStorage.clear()

class Questions {  // class to clone the questions
constructor(Question,option1,option2,option3,option4,answer) { // constructor with question options and result
    this.Q= Question   // question  method
    this.A=option1     // option A method
    this.B=option2     // option B method
    this.C=option3     // option C method
    this.D=option4     // option D method
    this.Answer=null    // answer method
    this.Answersymbol=answer // answer symbol method
    this.userAnswer=null     // user answer method
    this.userAnswersymbol=null  // user answer symbol method
}

CheckAnswer(userAnswerSymbol){ // check answer 
    // arrData.push(Q) // push the question to the array
    this.userAnswersymbol=userAnswerSymbol // update the user answer symbol method
    switch (userAnswerSymbol){   // switch statment to convert the  symbol  to a full user answer

        case "A":
            this.userAnswer=this.A
        break;
        case "B":
            this.userAnswer=this.B
        break;
        case "C":
            this.userAnswer=this.C
        break;
        case "D":
            this.userAnswer=this.D
        break;
        }

        switch (this.Answersymbol){ // switch statment to convert the  symbol  to a full answer

            case "A":
                this.Answer=this.A
        
            break;
            case "B":
                this.Answer=this.B
            break;
            case "C":
                this.Answer=this.C
            break;
            case "D":
                this.Answersymbol=this.D
            break;
            }

    
if(userAnswerSymbol==this.Answersymbol){

return true
}
return false
}

}

 // Question number 1
let Q1 = new Questions(  
    "Q1: What does HTML stand for?",
    "A: HTML describes the structure of a webpage",
    "B: HTML describes the structure of a webpage",
    "C: HTML describes the structure of a webpage",
    "D: HTML describes the structure of a webpage",
    "C"
    );
  arrData.push(Q1)


    let Q2 = new Questions(
        "Q2: What does HTML stand for?",
        "A: CSS describes the structure of a webpage",
        "B: CSS describes the structure of a webpage",
        "C: CSS describes the structure of a webpage",
        "D: CSS describes the structure of a webpage",
        "A"
        );
        arrData.push(Q2)


        let Q3 = new Questions(
            "Q3: What does HTML stand for?",
            "A: JS describes the structure of a webpage",
            "B: JS describes the structure of a webpage",
            "C: JS describes the structure of a webpage",
            "D: JS describes the structure of a webpage",
            "B"
            );
            arrData.push(Q3)



// all the questions will be rendered here 

let resultstext=document.getElementById("resultstext");

let showResultsButton = document.getElementById("ShowResultsButton")
showResultsButton.style.display="none"
showResultsButton.addEventListener("click",function(){   
    let body=document.getElementById("tbody");
    removeChilds(body);
     render0()
     CheckAnswerButton();
     showResultsButton.style.display="none"

     resultstext.textContent=`number of correct answers = ${numberOfPassedQuestions}/${arrData.length}`

})

let questionButtons =document.querySelectorAll(".questionsButtons button")
render(0)

questionButtons[0].style.background="green";
for(let i=1; i<questionButtons.length; i++){
    questionButtons[i].addEventListener("click", function QbuttonFu(){
       
        QbuttonF(i)
    } )
}

let ShowNextquestion=document.getElementById("ShowNextquestion");
ShowNextquestion.addEventListener("click", function(){
    
    QbuttonF(index0)
    
});

function QbuttonF(i){
    if(arrData[i-1].userAnswer==null){
        alert("please choose an answer")
        
          }else {
            index0+=1;
        
            if(i+1==questionButtons.length ){
                showResultsButton.style.display="inline-block";
                ShowNextquestion.style.display="none" ;
             }else{
                showResultsButton.style.display="none" ;
                
             }
            
             
                    let body0=document.getElementById("tbody");
                    removeChilds(body0);
                    render(i)
                    // questionButtons[i].disabled = true;
                    questionButtons[i].style.background="green";
                  
                    questionButtons[i].removeEventListener("click",function QbuttonFu(){
                        QbuttonF(i) 
                    })
        
          }
}






function render(i){
    

        let body=document.getElementById("tbody");
        let trQ=document.createElement("tr");
        body.appendChild(trQ)
        let thQ=document.createElement("th");
        thQ.textContent=arrData[i].Q;
        trQ.appendChild(thQ)
        trQ.classList.add("question")
        
        let trO1=document.createElement("tr");
        trO1.addEventListener("click",function(){
            trO1.style.background="#64FF6A";
            trO2.style.background="none";
            trO3.style.background="none";
            trO4.style.background="none";  
            clickedOption("A",i)
        })
        trO1.classList.add("option");
        body.appendChild(trO1)
        let thO1=document.createElement("th");
        thO1.textContent=arrData[i].A;
        trO1.appendChild(thO1);


        let trO2=document.createElement("tr");
         trO2.addEventListener("click",function(){
            trO1.style.background="none";
            trO2.style.background="#64FF6A";
            trO3.style.background="none";
            trO4.style.background="none";
            clickedOption("B",i)
            
        })
        trO2.classList.add("option")
        body.appendChild(trO2)
        let thO2=document.createElement("th");
        thO2.textContent=arrData[i].B;
        trO2.appendChild(thO2)


        let trO3=document.createElement("tr");
         trO3.addEventListener("click",function(){
            trO1.style.background="none";
            trO2.style.background="none";
            trO3.style.background="#64FF6A";
            trO4.style.background="none";
            clickedOption("C",i)
           
        })
        trO3.classList.add("option")
        body.appendChild(trO3)
        let thO3=document.createElement("th");
        thO3.textContent=arrData[i].C;
        trO3.appendChild(thO3);


        let trO4=document.createElement("tr");
         trO4.addEventListener("click",function(){
            trO1.style.background="none";
            trO2.style.background="none";
            trO3.style.background="none";
            trO4.style.background="#64FF6A";
            clickedOption("D",i)
            
        })
        trO4.classList.add("option")
        body.appendChild(trO4)
        let thO4=document.createElement("th");
        thO4.textContent=arrData[i].D;
        trO4.appendChild(thO4);

    

   
}




function clickedOption(userAnswersymbol,i){
 arrData[i].CheckAnswer(userAnswersymbol);
 sessionStorage.setItem('arrData',JSON.stringify(arrData) );
console.log(arrData[i].userAnswer)
}




 // remove all child nodes
const removeChilds = (body) => {
    while (body.lastChild) {
        body.removeChild(body.lastChild);
    }
};



function render0(){
    for(let i=0;i<arrData.length;i++){

        let body=document.getElementById("tbody");
        let trQ=document.createElement("tr");
        trQ.classList.add("question")
        body.appendChild(trQ)
        let thQ=document.createElement("th");
        thQ.textContent=arrData[i].Q;
        trQ.appendChild(thQ)


        let trO1=document.createElement("tr");
        trO1.classList.add("option");
        body.appendChild(trO1)
        let thO1=document.createElement("th");
        thO1.textContent=arrData[i].A;
        trO1.appendChild(thO1);

            if(arrData[i].Answersymbol=="A"){
            trO1.classList.add("answer");
            let th_O1_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O1_Img.appendChild(iamge)
            trO1.appendChild(th_O1_Img)
            }
            else if(arrData[i].userAnswersymbol =="A" && arrData[i].Answersymbol!="A" ){
                trO1.classList.add("Wanswer");
                let th_O1_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O1_Img.appendChild(iamge)
                trO1.appendChild(th_O1_Img)
            }





        let trO2=document.createElement("tr");
        trO2.classList.add("option")
        body.appendChild(trO2)
        let thO2=document.createElement("th");
        thO2.textContent=arrData[i].B;
        trO2.appendChild(thO2)

            if(arrData[i].Answersymbol=="B"){
            trO2.classList.add("answer");
            let th_O2_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O2_Img.appendChild(iamge)
            trO2.appendChild(th_O2_Img)
            }
            else if(arrData[i].userAnswersymbol =="B" && arrData[i].Answersymbol!="B" ){
                trO2.classList.add("Wanswer");
                let th_O2_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O2_Img.appendChild(iamge)
                trO2.appendChild(th_O2_Img)
            }




        let trO3=document.createElement("tr");
        trO3.classList.add("option")
        body.appendChild(trO3)
        let thO3=document.createElement("th");
        thO3.textContent=arrData[i].C;
        trO3.appendChild(thO3);

            if(arrData[i].Answersymbol=="C"){
            trO3.classList.add("answer");
            let th_O3_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O3_Img.appendChild(iamge)
            trO3.appendChild(th_O3_Img)
            }
            else if(arrData[i].userAnswersymbol =="C" && arrData[i].Answersymbol!="C" ){
                trO3.classList.add("Wanswer");
                let th_O3_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O3_Img.appendChild(iamge)
                trO3.appendChild(th_O3_Img)
            }




        let trO4=document.createElement("tr");
        trO4.classList.add("option")
        body.appendChild(trO4)
        let thO4=document.createElement("th");
        thO4.textContent=arrData[i].D;
        trO4.appendChild(thO4);

            if(arrData[i].Answersymbol=="D"){
            trO4.classList.add("answer");
            let th_O4_Img=document.createElement("th");
            let iamge=document.createElement("img");
            iamge.src="imagesMajdi/true.png"
            th_O4_Img.appendChild(iamge)
            trO4.appendChild(th_O4_Img)
            }
            else if(arrData[i].userAnswersymbol =="D" && arrData[i].Answersymbol!="D" ){
                trO4.classList.add("Wanswer");
                let th_O4_Img=document.createElement("th");
                let iamge=document.createElement("img");
                iamge.src="imagesMajdi/false.png"
                th_O4_Img.appendChild(iamge)
                trO4.appendChild(th_O4_Img)
            }

    }

}

function CheckAnswerButton(){
for(let i=0; i<arrData.length; i++){

    if(arrData[i].userAnswersymbol == arrData[i].Answersymbol){
        questionButtons[i].disabled = false;
        questionButtons[i].style.background="green";
        numberOfPassedQuestions+=1; 
    }else{
        questionButtons[i].disabled = false;
        questionButtons[i].style.background="red"; 

    }
}
   

}


