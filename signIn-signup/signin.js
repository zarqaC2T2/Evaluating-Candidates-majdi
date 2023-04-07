const formSign=document.getElementById("formSign");
let checkArr=[]
checkPassword=[]
formSign.addEventListener("submit",handelSubmitSign)
function handelSubmitSign(e){
    e.preventDefault();
    const userSign=
     {
     passWord:e.target.passSign.value,
    email:e.target.emailSign.value,
  
    }
    let infoArr=JSON.parse(localStorage.userInfo)
    for (let i = 0; i < infoArr.length; i++) {
        const element = infoArr[i].email;
        console.log(element)
        if(element===userSign.email){
           alert(`welcome  ${infoArr[i].user}`)
          checkArr.push(userSign.email,userSign.passWord)
        }
       
        }
        console.log(checkArr)
        
        if(!checkArr.includes(userSign.email)){
            alert(` the email is incorrect`)
        }
        if(checkArr[1]!=userSign.passWord){
            alert("wrong password")
        }
        
           
        }

        
    
   


