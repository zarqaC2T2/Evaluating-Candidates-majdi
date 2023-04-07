    let arrData =[]
    let numberOfQuestions;
    let numberOfPassedQuestions=0;
    class Questions {
    constructor(Question,option1,option2,option3,option4,answer) {
        this.Q= Question
        this.A=option1
        this.B=option2
        this.C=option3
        this.D=option4
        this.Answer=null
        this.Answersymbol=answer
        this.userAnswer=null
        this.userAnswersymbol=null
    }

    CheckAnswer(Q,userAnswer){
        arrData.push(Q)
    this.userAnswer=userAnswer
        switch (userAnswer){

            case this.A:
                this.userAnswersymbol="A"
            break;
            case this.B:
                this.userAnswersymbol="B"
            break;
            case this.C:
                this.userAnswersymbol="C"
            break;
            case this.D:
                this.userAnswersymbol="D"
            break;
            }

            switch (this.Answersymbol){

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

        
    if(userAnswer==this.Answer){
    numberOfPassedQuestions+=1
    return true
    }
    return false
    }

    }


    let Q1 = new Questions(
        "Q1: What does HTML stand for?",
        "A: HTML describes the structure of a webpage",
        "B: HTML describes the structure of a webpage",
        "C: HTML describes the structure of a webpage",
        "D: HTML describes the structure of a webpage",
        "C"
        );
    console.log(Q1.CheckAnswer(Q1,Q1.B));

        let Q2 = new Questions(
            "Q2: What does HTML stand for?",
            "A: HTML describes the structure of a webpage",
            "B: HTML describes the structure of a webpage",
            "C: HTML describes the structure of a webpage",
            "D: HTML describes the structure of a webpage",
            "A"
            );

            console.log(Q2.CheckAnswer(Q2,Q2.A));

            let Q3 = new Questions(
                "Q3: What does HTML stand for?",
                "A: HTML describes the structure of a webpage",
                "B: HTML describes the structure of a webpage",
                "C: HTML describes the structure of a webpage",
                "D: HTML describes the structure of a webpage",
                "B"
                );
                console.log(Q3.CheckAnswer(Q3,Q3.B));

    console.log(numberOfPassedQuestions)
    console.log(arrData)

    render()
    function render(){
        for(let i=0;i<arrData.length;i++){

            let body=document.getElementById("tbody");
            let trQ=document.createElement("tr");
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
                iamge.src="./assets/true.png"
                th_O1_Img.appendChild(iamge)
                trO1.appendChild(th_O1_Img)
                }
                else if(arrData[i].userAnswersymbol =="A" && arrData[i].Answersymbol!="A" ){
                    trO1.classList.add("Wanswer");
                    let th_O1_Img=document.createElement("th");
                    let iamge=document.createElement("img");
                    iamge.src="./assets/false.png"
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
                iamge.src="./assets/true.png"
                th_O2_Img.appendChild(iamge)
                trO2.appendChild(th_O2_Img)
                }
                else if(arrData[i].userAnswersymbol =="B" && arrData[i].Answersymbol!="B" ){
                    trO2.classList.add("Wanswer");
                    let th_O2_Img=document.createElement("th");
                    let iamge=document.createElement("img");
                    iamge.src="./assets/false.png"
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
                iamge.src="./assets/true.png"
                th_O3_Img.appendChild(iamge)
                trO3.appendChild(th_O3_Img)
                }
                else if(arrData[i].userAnswersymbol =="C" && arrData[i].Answersymbol!="C" ){
                    trO3.classList.add("Wanswer");
                    let th_O3_Img=document.createElement("th");
                    let iamge=document.createElement("img");
                    iamge.src="./assets/false.png"
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
                iamge.src="./assets/true.png"
                th_O4_Img.appendChild(iamge)
                trO4.appendChild(th_O4_Img)
                }
                else if(arrData[i].userAnswersymbol =="D" && arrData[i].Answersymbol!="D" ){
                    trO4.classList.add("Wanswer");
                    let th_O4_Img=document.createElement("th");
                    let iamge=document.createElement("img");
                    iamge.src="./assets/false.png"
                    th_O4_Img.appendChild(iamge)
                    trO4.appendChild(th_O4_Img)
                }

        }


    }
