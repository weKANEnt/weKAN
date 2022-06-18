
     

  }

  if (ballotOptions != null){
    //Get student hall
    //Get student faculty


    //filter students vote options


    //Candidates - President
    if (localStorage.getItem("nextCandidate") == 1){
        getPresidents();   
    }
    
    //Candidates - VP SSP
    if (localStorage.getItem("nextCandidate") == 2){
     getVPSSP();
    }

    //Candidates - VP PSI


    //Candidates - Secretary


    //Candidates - Treasurer


    //Candidates - GCC


    //Candidates - PRO


    //Candidates - CEAC


    //Candidates - EAC


    //Candidates - Faculty Rep


    //Candidates - Commuting


    //Candidates - Post Graduate


    //Candidates - Hall Chair


    //Candidates - Deputy Hall Chair
    
    

  function displayNextCandidate(){

  }

  

}
//Candidates - President
function checker(){
  if (localStorage.getItem("nextCandidate") == 1){
    ballotOptions.innerHTML = "";
    getPresidents();
  }
  
  //Candidates - VP SSP
  if (localStorage.getItem("nextCandidate") == 2){
    ballotOptions.innerHTML = "";
   getVPSSP();
  }



}

//Candidates - Presidents
function getPresidents(){
  fetch(serverLink + "ballot/presidents", 
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

//Candidates - VP SSP
function getVPSSP(){
  fetch(serverLink + "ballot/vpssp", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - VP PSI
function getVPPSI(){
fetch(serverLink + "ballot/vppsi", 
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("studentToken")
      }
    })
      .then((response) => response.json())
      .then((result) => {
        electTitle.innerHTML = "<h4>" + result.message + "</h4>";
        console.log(result.candidates.length)
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
            //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
          }
          
          /*
          for (i in result.candidates){
            
            }*/
        }
      })
      .catch((error) => console.log("error", error)); 
}

//Candidates - Secretary
function getSecretary(){
  fetch(serverLink + "ballot/secretary", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - Treasurer
function getTreasurer(){
  fetch(serverLink + "ballot/treasurer", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - GCC
function getGCC(){
  fetch(serverLink + "ballot/gcc", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - PRO
function getPRO(){
  fetch(serverLink + "ballot/pro", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - CEAC
function getCEAC(){
  fetch(serverLink + "ballot/ceac", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - EAC
function getEAC(){
  fetch(serverLink + "ballot/eac", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - Faculty Rep
function getFacultyRep(){
  fetch(serverLink + "ballot/facultyrep", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}

//Candidates - Commuting Rep
function getCommutingRep(){
  fetch(serverLink + "ballot/commuting", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}  

//Candidates - Post Graduate
function getPostGrad(){
  fetch(serverLink + "ballot/postgrad", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}  

//Candidates - Hall Char
function getHallChair(){
  fetch(serverLink + "ballot/hallchair", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}  

//Candidates - Deputy Hall Chair
function getDeputyHallChair(){
  fetch(serverLink + "ballot/dhallchair", 
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("studentToken")
        }
      })
        .then((response) => response.json())
        .then((result) => {
          electTitle.innerHTML = "<h4>" + result.message + "</h4>";
          console.log(result.candidates.length)
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
              //ballotOptions.innerHTML = result.candidates[i].firstName + result.candidates[i].lastName; 
            }
            
            /*
            for (i in result.candidates){
              
              }*/
          }
        })
        .catch((error) => console.log("error", error)); 
}  