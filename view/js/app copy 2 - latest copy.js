if (ballotOptions != null){
  //Candidates - get President
  //
  console.log("Here")
  console.log(localStorage.getItem("nextCandidate"))

 // localStorage.setItem("","");




  if (localStorage.getItem("nextCandidate") == 1){
        //localStorage.setItem("nextCandidate", 1)
        console.log("Next Candidate #: " + localStorage.getItem("nextCandidate")) 
         checkIfCandidatesEmpty('presidents')
         console.log("Candidate empty status:" + localStorage.getItem("candidatesEmptyStatus"))
         if (localStorage.getItem("candidatesEmptyStatus") == "false"){
             loadCandidates('presidents');

          
          }
          else{
            localStorage.setItem("nextCandidate",2)
            
          }
  }

  console.log(localStorage.getItem("nextCandidate"))
  //Candidates - VP SSP
  if (localStorage.getItem("nextCandidate") == 2 ){
          checkIfCandidatesEmpty('vpssp')
          if (localStorage.getItem("candidatesEmptyStatus") == "false"){
             loadCandidates('vpssp');
          }
          else{
            localStorage.setItem("nextCandidate",3)
          }
  } 
  console.log(localStorage.getItem("nextCandidate"))
  

  //Candidates - VP PSI
  if (localStorage.getItem("nextCandidate") == 3){
    checkIfCandidatesEmpty('vppsi')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('vppsi');
    }
    else{
      localStorage.setItem("nextCandidate",4)
    }
  } 
/*
  //Candidates - Secretary
   if (parseInt(localStorage.getItem("nextCandidate")) == 4){
    checkIfCandidatesEmpty('secretary')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('secretary');
    }
    else{
      localStorage.setItem("nextCandidate",5)
    }
  } 

  //Candidates - Treasurer
  if (parseInt(localStorage.getItem("nextCandidate")) == 5){
    checkIfCandidatesEmpty('treasurer')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('treasurer');
    }
    else{
      localStorage.setItem("nextCandidate",6)
    }
  } 

  //Candidates - GCC
  if (parseInt(localStorage.getItem("nextCandidate")) == 6){
    checkIfCandidatesEmpty('gcc')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('gcc');
    }
    else{
      localStorage.setItem("nextCandidate",7)
    }
  } 

  //Candidates - PRO
  if (parseInt(localStorage.getItem("nextCandidate")) == 7){
    checkIfCandidatesEmpty('pro')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('pro');
    }
    else{
      localStorage.setItem("nextCandidate",8)
    }
  } 

  //Candidates - CEAC
  if (parseInt(localStorage.getItem("nextCandidate")) == 8){
    checkIfCandidatesEmpty('ceac')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('ceac');
    }
    else{
      localStorage.setItem("nextCandidate",9)
    }
  } 

  //Candidates - EAC
  if (parseInt(localStorage.getItem("nextCandidate")) == 9){
    checkIfCandidatesEmpty('eac')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('eac');
    }
    else{
      localStorage.setItem("nextCandidate",10)
    }
  } 

  //Candidates - Faculty Rep
  if (parseInt(localStorage.getItem("nextCandidate")) ==  10){
    checkIfCandidatesEmpty('facultyrep')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('facultyrep');
    }
    else{
      localStorage.setItem("nextCandidate",11)
    }
  } 

  //Candidates - Commuting
  if (parseInt(localStorage.getItem("nextCandidate")) == 11){
    checkIfCandidatesEmpty('commuting')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('commuting');
    }
    else{
      localStorage.setItem("nextCandidate",12)
    }
  } 

  //Candidates - Post Graduate
  if (parseInt(localStorage.getItem("nextCandidate")) == 12){
    checkIfCandidatesEmpty('postgrad')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('postgrad');
    }
    else{
      localStorage.setItem("nextCandidate",13)
    }
  } 

  //Candidates - Hall Chair
  if (parseInt(localStorage.getItem("nextCandidate")) == 13){
    checkIfCandidatesEmpty('hallchair')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('hallchair');
    }
    else{
      localStorage.setItem("nextCandidate",14)
    }
  } 

  //Candidates - Deputy Hall Chair
  if (parseInt(localStorage.getItem("nextCandidate")) == 14){
    checkIfCandidatesEmpty('dhallchair')
    if (localStorage.getItem("candidatesEmptyStatus") == "false"){
       loadCandidates('dhallchair'); 
    }
    else{
      localStorage.setItem("nextCandidate",15)
    }
  } 

  //Submit Ballot
  
  if (parseInt(localStorage.getItem("nextCandidate")) == 15){
    localStorage.setItem("nextCandidate",1);
    console.log('NC:', localStorage.getItem("nextCandidate"))
    //window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
    //document.location.reload()
    //to be removed
    
    
  } 
  //localStorage.setItem("nextCandidate", 0);
  //console.log("Next Candidate #: " + localStorage.getItem("nextCandidate")) 

  */
  


}


function resetBallot(){
    localStorage.setItem("nextCandidate",1);
}

var candidateResults = "";
function loadCandidates(candidateLink){
  fetch(serverLink + "ballot/" + candidateLink , 
{
  method: 'GET',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem("studentToken") //localStorage.getItem("adminToken")
  }
})
  .then((response) => response.json())
  .then((result) => {
    electTitle.innerHTML = "<h4>" + result.message + "</h4>";
    //console.log(result.candidates.length)
    if (result.candidates.length > 0){

      for (i in result.candidates){
        let cid = result.candidates[i].cid;
        let electFullName = result.candidates[i].firstName + result.candidates[i].lastName
        electName = result.candidates[i].firstName + result.candidates[i].lastName;
        
        ballotOptions.innerHTML += 
        
          "<input type = \"radio\" id= '" + cid + "'name=" + "studentVotes" + " value= " + electFullName + " >" 
          + "<label for=" + cid + ">    " + result.candidates[i].firstName + " " + result.candidates[i].lastName + "</label>"
          ;
        ballotOptions.innerHTML += "</br>" ;
        }
    }else{

    }
    
  })
  .catch((error) => console.log("error", error));  
}

function checkIfCandidatesEmpty(candidateLink){
  fetch(serverLink + "ballot/" + candidateLink , 
{
  method: 'GET',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem("studentToken") //localStorage.getItem("adminToken")
  }
})
  .then((response) => response.json())
  .then((result) => { 
    electTitle.innerHTML = "<h4>" + result.message + "</h4>";
    //console.log(result.candidates.length)
    //console.log("Candidate: " + result.candidates.length);
   /* if (result.candidates.length == 0){

    }*/
    if (result.candidates.length > 0){
      localStorage.setItem("candidatesEmptyStatus", false)
    }else{
      localStorage.setItem("candidatesEmptyStatus", true)
    }
    
  })
  .catch((error) => console.log("error", error));  
}








  var test = [];
  //localStorage.setItem("nextCandidate", 1);
  localStorage.setItem("test", test)

  if(nextButton != null){
    nextButton.addEventListener("click", function(event){
      event.preventDefault();
      //clearLocalStorage("userVote");
      var getSelectedValue = document.querySelector('input[name="studentVotes"]:checked');    
      if (getSelectedValue != null){
        console.log(getSelectedValue.id);
        test[test.length] = parseInt(getSelectedValue.id);
        console.log(test);
   
        localStorage.setItem("test", JSON.stringify(test));
        console.log(JSON.parse(localStorage.test));

        localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
        //checker();
        var tempVar = parseInt(localStorage.getItem("nextCandidate"))
        //localStorage.setItem("nextCandidate", parseInt(tempVar) +1);

        console.log(localStorage.getItem("nextCandidate"));
        
        //document.location.reload();


      }
      else{
        console.log("Next candidate: " + localStorage.getItem("nextCandidate"));
        console.log("Please select an item")
      }
      //test += 1;
      

      /*
      test[test.length] = getSelectedValue.id;
      console.log(test);


      localStorage.setItem("test", JSON.stringify(parseInt(test)))
      var newt = [];
            newt = JSON.parse(localStorage.test);
      console.log(JSON.parse(localStorage.test))
      console.log(newt)*/
      
      /*console.log(newt)
      console.log(getSelectedValue.id)*/
      console.log('**********');
      //console.log([test]);
      
      /*if (localStorage.getItem("userVote" != " ")){

          localStorage.setItem("userVote", localStorage.getItem("userVote") + "," +getSelectedValue.id);
          if(getSelectedValue != null) {   
            console.log("Radio button value: " + getSelectedValue.id); 
            console.log(localStorage.getItem("userVote"));
          }
      else{  
        console.log("Nothing has been selected");  

      }

        }



        else{
          localStorage.setItem("userVote", getSelectedValue.id);
          if(getSelectedValue != null) {   
            console.log("Radio button value: " + getSelectedValue.id); 
            console.log(localStorage.getItem("userVote"));
          }
      else{  
        console.log("Nothing has been selected");  
      } 



        }
        localStorage.setItem("userVote", localStorage.getItem("userVote") + "," +getSelectedValue.id);
        if(getSelectedValue != null) {   
              console.log("Radio button value: " + getSelectedValue.id); 
              console.log(localStorage.getItem("userVote"));
            }
        else{  
          console.log("Nothing has been selected");  
        } */
      });

  }
 