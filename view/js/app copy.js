document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("loaded page");

    //To Do
  {
    /********************To Do
     * 1. Put "Election successfuly created for short while then fade out" after election has been created
     * 2. To do add more criteria to error message in 'Create Election'
     * 3. Add a message for when deleting an election that doesn't exist/when no election exist
     * 4. Add error message for deleting election failed
     * 5. Fix up wording for admin verification when deleting election
     * 6. Add a message to let them know candidate was sucessfully added
     * 7. Add upload excel sheet to get candidates info
     * 8. Add upload excel sheet for voters
     * 9. Add more criteria for error messages
     * 10. When no election is made, need an error for OTP not being generated. Or have OTP not visible
     * 11. Put criteria for date entered in polling information
     * 12. Student shouldn't be able to vote if poll hasn't started
     * 13. Change token for getting candidates during vote
     */
    //NOTE: //Complete means that the main function has been completed
    //variables for buttons
  }
    {
      var navCandidates = document.getElementById("navCandidates");
      var navResults = document.getElementById("navResults");
      var navSignIn = document.getElementById("navSignIn");
      var navBarLogo = document.getElementById("navBarLogo");
      var getOTPButton = document.getElementById("getOTPButton");
      var otpSignUp = document.getElementById("otpTextbox");
      var submitOTPButton = document.getElementById("submitOTP");
      var errorMessage = document.getElementById("errorMessage");
      var errorMessageAdmin = document.getElementById("errorMessageAdmin");
      var logInButton = document.getElementById("logInButton"); //for admin
      var logOut = document.getElementById("navLogOut");
      var password = document.getElementById("password"); //for admin
      var adminEmail = document.getElementById("adminEmail"); //for admin
      var createElectionButton = document.getElementById("createElectionButton"); //for admin
      var createElection = document.getElementById("createElection");
      var electionName = document.getElementById("electionName"); //for admin
      var startDate =  document.getElementById("startDate");
      var endDate = document.getElementById("endDate");
      var deleteElectionButton = document.getElementById("adminDeleteButton");
      var deleteElection = document.getElementById("deleteElection");
      var addCandidateButton = document.getElementById("addCandidateButton");
      var addCandidate = document.getElementById("addCandidate");
      var hallOptions = document.getElementById("hallsOfLivingDropdown");
      var facultyOptions = document.getElementById("facultyOfStudyDropdown");
      var electOptions = document.getElementById("electPositionsDropdown")
  
      var candidateFirstName = document.getElementById("firstName");
      var candidateLastName = document.getElementById("lastName");
      var candidateEmail = document.getElementById("email");
      var email = document.getElementById("email");
      var candidateAbout = document.getElementById("about");
      var candidateAttachedHall = document.getElementById("hallsOfLivingDropdown");
      var candidateFacultyOfStudy = document.getElementById("facultyOfStudyDropdown");
      var candidateElectPosition = document.getElementById("electPositionsDropdown");
      var registerVoterButton = document.getElementById("registerVoterButton")
      var registerVoter = document.getElementById("registerVoter")
  
      var cancelDeleteElection = document.getElementById("cancelDeleteElection");
      var cancelCreateElection = document.getElementById("cancelCreateElection");
      var cancelRegisterVoter = document.getElementById("cancelRegisterVoter");
      var commuteStatus = document.getElementById("commuteStatus");
      var postGradStatus = document.getElementById("postGradStatus");
      var generateElectionResults = document.getElementById("generateElectionResults");
      var postElectionResults = document.getElementById("postElectionResults");
      var retractElectionResults = document.getElementById("retractElectionResults");
      var getElectionResults = document.getElementById("getElectionResults");
      var getElectionResultsAdmin = document.getElementById("getElectionResultsAdmin")

      var ballotOptions = document.getElementById("ballotOptions");

      var startStudentBallot = document.getElementById("startStudentBallott");
      var nextButton = document.getElementById("next");

      var electTitle = document.getElementById("electTitle");

      var verifyAdminEmail = false;
      
      var verifyEmail = false;
      var verifyOTP = false;

      var electName = "";

      
    
    }

    //Shortners
    {
    var directoryLinkAddress = "../view/";
    var serverLink = "https://wekan-api.herokuapp.com/uwivotes/";
    }

    /**Request Options for API methods */
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    /**Simple Event Listeners**/
    //Nav Bar
    if (navBarLogo != null){
      navBarLogo.addEventListener("click", function(event){
        event.preventDefault();
        console.log("Home/Logo was clicked");

        if (localStorage.getItem("adminLoggedIn") == 'true'){
          window.location.href = directoryLinkAddress + 'adminIndex.html';
        }
        else{
          window.location.href = directoryLinkAddress + 'index.html';
        }

      });
    }

    //Candidates
    if (navCandidates != null){ 
      navCandidates.addEventListener("click", function(){
        console.log("Candidates was clicked.");
        window.location.href = directoryLinkAddress + 'candidates.html';
      });
    } 

    //Results
    if (navResults != null){
      navResults.addEventListener("click", function(){
        console.log("Results was clicked.");
        window.location.href = directoryLinkAddress + 'results.html';
      });
    }

    //Sign In
    if (navSignIn != null){
      navSignIn.addEventListener("click", function(){
        console.log("Sign In was clicked");
        window.location.href = directoryLinkAddress + 'logIn.html';
      });
    }

    //Sign Out / Log Out
    if (logOut != null){
      logOut.addEventListener("click", function(){
        console.log("Log Out was clicked.");
        resetBallot();
        localStorage.setItem("adminToken", false);
        localStorage.setItem("adminLoggedIn", false);
        localStorage.setItem("nextCandidate", 1);
        window.location.href = directoryLinkAddress + 'index.html';
      });
    }




    /**End of Cancel Buttons */


    /** Event Listeners*/
    //Redirect to logIn page upon successful email verification
    //Complete
    if (getOTPButton != null){    
      getOTPButton.addEventListener("click", function(event){
              event.preventDefault();
              if (document.getElementById("email").value != null || document.getElementById("email").value != " " || document.getElementById("email").value != ""){
                //naomi.benjamin@mymona.uwi.edu
                //kayvia.harriott@mymona.uwi.edu
                fetch(serverLink + "votes?email=" + document.getElementById("email").value, requestOptions)
                .then((response) => response.json())
                .then((result) => 
                  {
                      verifyEmail = result.success;
                      email = document.getElementById("email").value;
                      if (verifyEmail == true){  
                        localStorage.setItem("email", document.getElementById("email").value);
                          fetch(serverLink + 'votes/OTP',{
                          method: 'PATCH',
                          body: JSON.stringify({
                            "email": localStorage.getItem("email"),
                          }),
                          headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                            },
                          })
                          .then((response) => {response.json()
                            verifyEmail = false;
                            window.location.href = directoryLinkAddress + 'logIn.html';
                          })
                          .then((json) => console.log(json));
                      } 
                      else { errorMessage.innerHTML = "*Please ensure a valid UWI email is entered."; }
                  }
                      )
                  .catch((error) => console.log("error", error)); 
                }  
          });
  }

    //Redirect to vote page upon successful OTP verification
    //Complete
    if (submitOTPButton != null){
      if (localStorage.getItem("email")!=null){
        document.getElementById("email").value = localStorage.getItem("email");
      }
      submitOTPButton.addEventListener("click", function(event){
          event.preventDefault();
          if (otpSignUp.value.length != 0){
                fetch(serverLink + "votes/OTP?otp=" + otpSignUp.value + "&email=" + localStorage.getItem("email"), requestOptions)
                .then((response) => response.json())
                .then((result) => {
                      verifyOTP = result.success;
                      console.log(otpSignUp.value)
                      if (verifyOTP == true){
                          console.log("OTP verified");
                          localStorage.setItem("studentToken",result.token)
                          verifyOTP = false;
                          localStorage.setItem("nextCandidate", 1)
                          window.location.href = directoryLinkAddress + 'voteIntroPage.html';
                      }
                      else{
                          console.log("OTP verification unsuccessful");
                      }
                }
                    )
                .catch((error) => console.log("error", error)); 

          }
          else{
            errorMessage.innerHTML = "*Please ensure an OTP is entered.";
          }
      });
    }



  //Student Voter
  /**Allow student to place votes for election */
  if (startStudentBallot != null){
    startStudentBallot.addEventListener("click", function(){
     // getToVote();
      window.location.href = directoryLinkAddress + 'placeBallotPage.html';
      localStorage.setItem("Yessss", "here")

      
  });
}

  
  function generateCandidateOptions(){

    
  }
  var arrayToRun = [];
  function getToVote(){
      console.log("vote");
      arrayToRun = []
    //for (let i = 0 ; i < 13 ; ++i){
      //console.log("here");
      
      checkIfCandidatesEmpty('presidents');
      //console.log(localStorage.getItem("candidatesEmptyStatus"));
      if (localStorage.getItem("candidatesEmptyStatus") == false){
         arrayToRun.push(1);
         console.log("Array: "+ arrayToRun)
      }
      
      checkIfCandidatesEmpty('vpssp');
      if (localStorage.getItem("candidatesEmptyStatus") == false){
         arrayToRun.push(2);
      }
      checkIfCandidatesEmpty('vppsi');
      if (localStorage.getItem("candidatesEmptyStatus") == false){
         arrayToRun.push(3);
      }

      checkIfCandidatesEmpty('secretary');
      if (localStorage.getItem("candidatesEmptyStatus") == false){
        arrayToRun.push(4);
      }
      checkIfCandidatesEmpty('treasurer');
      if (localStorage.getItem("candidatesEmptyStatus") == false){
         arrayToRun.push(5);
      }
      /* 
      checkIfCandidatesEmpty('gcc');
      if (localStorage.getItem("candidatesEmptyStatus") == false){
         arrayToRun.push(6);
      }
      checkIfCandidatesEmpty('pro');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push(7);
      }
      checkIfCandidatesEmpty('ceac');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push(8);
      }
      checkIfCandidatesEmpty('eac');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push(9);
      }
      checkIfCandidatesEmpty('facultyrep');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push(10);
      }
      checkIfCandidatesEmpty('commuting');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push[i];
      }
      checkIfCandidatesEmpty('postgrad');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push[i];
      }
      checkIfCandidatesEmpty('hallchair');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push[i];
      }
      checkIfCandidatesEmpty('dhallchair');
      if (localStorage.getItem("candidatesEmptyStatus") == "false"){
         arrayToRun.push[i];
      }
      */

      

    //}
    console.log("To vote for: " + arrayToRun)
  }
  
  var candidatePositions = [
        'presidents', 'vpssp', 'vppsi', 'secretary', 'treasurer', 'gcc',
        'pro', 'ceac', 'eac', 'facultyrep', 'commuting', 'postgrad', 'hallchair','dhallchair'

  ]

  function nextCandidate(){
    localStorage.setItem("nextCandidate", parseInt(localStorage.getItem) + 1)
  }
  
  if (localStorage.getItem("Yessss") == "here"){
    checker();
    localStorage.setItem("Yessss", "heres")
  }

  function checker(){
    if (ballotOptions != null){
      
      //console.log(localStorage.getItem("nextCandidate"))
     

      for (i in candidatePositions){
        //console.log(candidatePositions[i])
        checkIfCandidatesEmpty(candidatePositions[i]);
        
      } 
      
      if (localStorage.getItem("nextCandidate") == 1){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
       if (localStorage.getItem(candidatePositions[0]) == "true"){
            console.log("Empty")
            localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
        }else{
            console.log("Not empty")
            loadCandidates(candidatePositions[0])
            
        } 
      }

      
      //console.log("nextCandidate" + localStorage.getItem("nextCandidate") )
      //console.log("CandidatesNum: " + localStorage.getItem("nextCandidate"))
      //console.log(parseInt(localStorage.getItem("nextCandidate")) + 1)


      
      if (localStorage.getItem("nextCandidate") == 1){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
       if (localStorage.getItem(candidatePositions[0]) == "true"){
            console.log("Empty")
            localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
        }else{
            console.log("Not empty")
            loadCandidates(candidatePositions[0])
        } 
      }
 
      if (localStorage.getItem("nextCandidate") == 2){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[1]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[1])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 3){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[2]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[2])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 4){
        console.log("Next candidate: " + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[3]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             checkIfCandidatesEmpty('secretary')
             console.log(localStorage.getItem(candidatePositions[3]))
             loadCandidates(candidatePositions[3])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 5){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[4]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[4])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 6){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[5]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[5])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 7){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[6]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[6])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 8){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[7]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[7])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 9){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[8]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[8])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 10){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[9]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[9])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 11){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[10]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[10])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 11){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[10]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[10])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 12){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[11]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[11])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 13){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[12]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[12])
         } 
       }

       if (localStorage.getItem("nextCandidate") == 14){
        console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[13]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[13])
         } 
       }

       if (localStorage.getItem("nextCandidate") > 14){
        
        console.log("Ballot submitted")

       }

       if (localStorage.getItem("nextCandidate") > 14){
        alert("done");
      }




        /*console.log("Next candidate:" + localStorage.getItem("nextCandidate"))
        if (localStorage.getItem(candidatePositions[13]) == "true"){
             console.log("Empty")
             localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate")) + 1);
         }else{
             console.log("Not empty")
             loadCandidates(candidatePositions[13])
         } */
      // }
      //console.log(">" + localStorage.getItem("nextCandidate"))      
      
     // if (localStorage.getItem("nextCandidate") == 1){
      //  console.log("In presidents");
       // console.log(localStorage.getItem("presidents") == "false")

          /*{
        }
        else{
            console.log("other");
        } */
           /*if (localStorage.getItem("presidents") == "true"){
              loadCandidates("presidents");
            }else{
              console.log("nothing for president");
          } */
     // }


/*
      if (localStorage.getItem("vpssp") == "true"
           && localStorage.getItem("nextCandidate") == 2){
        loadCandidates("vpssp");
      }

      if (localStorage.getItem("vppsi") == "true"
           && localStorage.getItem("nextCandidate") == 3){
        loadCandidates("vppsi");
      }
      
      if (localStorage.getItem("secretary") == "true"
           && localStorage.getItem("nextCandidate") == 4){
        loadCandidates("secretary");
      }

      if (localStorage.getItem("treasurer") == "true"
           && localStorage.getItem("nextCandidate") == 5){
        loadCandidates("treasurer");
     }

      if (localStorage.getItem("gcc") == "true"
           && localStorage.getItem("nextCandidate") == 6){
        loadCandidates("gcc");
      }

      if (localStorage.getItem("pro") == "true"
           && localStorage.getItem("nextCandidate") == 7){
        loadCandidates("pro");
      }

      if (localStorage.getItem("ceac") == "true"
           && localStorage.getItem("nextCandidate") == 8){
        loadCandidates("ceac");
      }

      if (localStorage.getItem("eac") == "true"
           && localStorage.getItem("nextCandidate") == 9){
        loadCandidates("eac");
      }

      if (localStorage.getItem("facultyrep") == "true"
           && localStorage.getItem("nextCandidate") == 10){
        loadCandidates("facultyrep");
      }

      if (localStorage.getItem("commuting") == "true"
           && localStorage.getItem("nextCandidate") == 11){
        loadCandidates("commuting");
      }

      if (localStorage.getItem("postgrad") == "true"
           && localStorage.getItem("nextCandidate") == 12){
        loadCandidates("postgrad");
      }

      if (localStorage.getItem("hallchair") == "true"
           && localStorage.getItem("nextCandidate") == 13){
        loadCandidates("hallchair");
      }

      if (localStorage.getItem("dhallchair") == "true"
           && localStorage.getItem("nextCandidate") == 14){
        loadCandidates("dhallchair");
      }

*/
      //if (localStorage.getItem("nextCandidate") > 14){
       //   console.log("Ballot submitted")
          //submitBallot();
          //window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
      //}


      
  
    }

  }
  

  //checker();
  var studentVote = [];
 if(nextButton != null){
    nextButton.addEventListener("click", function(event){
      event.preventDefault();
      
      

      //everytime a vote is done
      
      //increase counter

      var getSelectedValue = document.querySelector('input[name="studentVotes"]:checked');  
      if (getSelectedValue != null){
          localStorage.setItem("nextCandidate", parseInt(localStorage.getItem("nextCandidate"))+1)
          
          //console.log(getSelectedValue.id);
          if (studentVote.includes(parseInt(getSelectedValue.id)) == false){
            studentVote.push(parseInt(getSelectedValue.id));
          }
          
          
    
          localStorage.setItem("studentVote", JSON.stringify(studentVote));
          console.log("Student Vote raw: ", studentVote);
          console.log("Student Vote: " + localStorage.getItem("studentVote"));
          console.log("Student Vote Final: " + JSON.parse(localStorage.studentVote));
          checker();
          //document.location.reload()

      }else{
        console.log("Please select an item")

      }
      alert("Done" + localStorage.getItem("nextCandidate") )
      
      
    
      });

  }

  function resetBallot(){
      localStorage.setItem("nextCandidate",1);
  }



  
  function submitBallot(){
                          console.log([JSON.parse(localStorage.studentVote)])
                          fetch(serverLink + 'ballot/submitBallot',{
                          method: 'PATCH',
                          body: JSON.stringify({
                            "cids": JSON.parse(localStorage.studentVote),
                          }),
                          headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem("studentToken"),
                            },
                          })
                          .then((response) => {response.json()
                            if (response.message == success){
                              alert("You have voted")
                            }
                            //verifyEmail = false;
                            //window.location.href = directoryLinkAddress + 'logIn.html';
                          })
                          .then((json) => console.log(json));
     } 
          
  
   
  var candidateResults = "";
  function loadCandidates(candidateLink){
    ballotOptions.innerHTML = "";
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
      //console.log("Result: " + result.message + " #: " + result.candidates.length);
      //console.log("Candidates Link: " + candidateLink);
      
      /*
      if (result.candidates.length > 0){
        localStorage.setItem(candidateLink,false)
        console.log("eempty")

      }*/
      
      
    })
    .catch((error) => console.log("error", error));  
  }




    //clearLocalStorage();
    function clearLocalStorage(nameOf){
      localStorage.setItem(nameOf, "");
    }
    //Admin
    /**Redirect to admin side upon sucessful admin verification */
    //Complete
    if (adminEmail && password != null && logInButton != null){
        logInButton.addEventListener("click", function(event){
            event.preventDefault();
            if (adminEmail.value != null && adminEmail.value != " " && adminEmail.value != "" && adminEmail.value.length != 0
                && password.value != null && password.value != " " && password.value != "" && password.value.length != 0){
                fetch(serverLink + 'admin/login', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  'email': adminEmail.value,
                  "password": password.value})
                  })
                .then(res => res.json())
                .then(res => {
                  if (res.success == true){
                    localStorage.setItem("adminLoggedIn", true);
                    localStorage.setItem("adminEmail",adminEmail.value)
                    localStorage.setItem("adminPassword",password.value)
                    localStorage.setItem("adminToken",res.token)
                    window.location.href = directoryLinkAddress + 'adminIndex.html';
                  }
                  else {
                    errorMessageAdmin.innerHTML = "*Please ensure an email and password is entered.";
                  }
                })
            }
            else{
              errorMessageAdmin.innerHTML = "*Please ensure an email and password is entered.";
            }
        });
    } 

    //Complete
    if (createElectionButton != null){
      createElectionButton.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = directoryLinkAddress + 'createElection.html'; 
      })
    }

    //Complete
    if (deleteElectionButton != null){
      deleteElectionButton.addEventListener("click", function(event){
        window.location.href = directoryLinkAddress + 'deleteElection.html';
      })
    }

    //Complete
    if (addCandidateButton != null){
      addCandidateButton.addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = directoryLinkAddress + 'addCandidate.html';
      })
    }

    //Complete
    if (registerVoterButton != null){
      registerVoterButton.addEventListener("click", function(event){
        window.location.href = directoryLinkAddress + 'registerVoter.html';
      });
    }

    //Complete
    if (cancelDeleteElection != null){
      cancelDeleteElection.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = directoryLinkAddress + 'adminIndex.html';
      })
    }

    //Complete
    if (cancelCreateElection != null){
      cancelCreateElection.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = directoryLinkAddress + 'adminIndex.html';
      })
    }

    //Complete
    if (cancelRegisterVoter != null){
      cancelRegisterVoter.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = directoryLinkAddress + 'adminIndex.html';
      })
    }

    /**Redirect to admin index/homepage upon successfully creating  */
    //Complete

    /*
    var tele = document.getElementById("startDate");
    tele.maxLength = 9;
    tele.type = "tel";
    

          document.getElementById("startDate").addEventListener('keyup', function(e){
        if (event.key != 'Backspace' && (tele.value.length === 4 || tele.value.length === 7 || tele.value.length === 10)){
        tele.value += '-';
        console.log("here");
      }
    }); */
    


    if (createElection != null){
      createElection.addEventListener("click",function(event){
        fetch(serverLink + 'election/create', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("adminToken")
          },
          body: JSON.stringify({
            'title': electionName.value,
            'sDate': startDate.value,
            'eDate': endDate.value,
            'csvLocation': "naomi.csv"
          })
        }).then(res => res.json())
          .then(res => {
            if (res.success == true){
              console.log("Election created successfully");
              alert("Election created successfully")
              window.location.href = directoryLinkAddress + 'adminIndex.html';
            }
            else {
              errorMessage.innerHTML = "*Error message goes here";
            }
          })
      } )
    }

    //Complete
    if (deleteElection != null){
      deleteElection.addEventListener("click",function(event){
        if (adminEmail.value == localStorage.getItem("adminEmail")  && password.value == localStorage.getItem("adminPassword")){
          if (confirm('Are you sure you want to delete the current election?')) {
          fetch(serverLink + 'election/delete', {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("adminToken")
            }
          }).then(res => res.json())
            .then(res => {console.log(res)
              console.log("Election has been deleted")
              window.location.href = directoryLinkAddress + 'adminIndex.html';
            }) 
          } else {
            //Error message for election being deleted
            console.log('Election was not deleted');
          }
        }
        else {
          alert("Email and password incorrect.")
        }
      })

    }

    //Complete
    if (hallOptions != null){
      fillHallOptions();
    }

    //Complete
    if (facultyOptions != null){
      fillFacultyOptions();
    }

    //Complete
    if (electOptions != null){
      fillElectOptions();
    }

    //Admin is able to add candidate to election
    //Complete
    if (addCandidate != null){
        addCandidate.addEventListener("click", function(event){
        event.preventDefault();
        console.log("\'" + candidateAbout.value + "\'")
        fetch(serverLink + 'admin/addCandidate', {
          method: 'POST',
          headers: { 
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("adminToken")
          },
          body: JSON.stringify({
            "candidates":
            [ {
              'firstName': String(candidateFirstName.value),
              'lastName': String(candidateLastName.value),
              'email': String(candidateEmail.value),
              'hall': parseInt(candidateAttachedHall.value),
              'faculty': parseInt(candidateFacultyOfStudy.value),
              'position': parseInt(candidateElectPosition.value),
              'about': String(candidateAbout.value) 
            }]
          })
        }).then(res => res.json())
          .then(res => {
            if (res.success == true){
              console.log("Candidate was sucessfully added")
              errorMessage.innerHTML = "";
              alert("Candidate has been sucessfully added");
              candidateFirstName.value = "";
              candidateLastName.value = "";
              candidateEmail.value = "";
              candidateAttachedHall.value = "";
              candidateFacultyOfStudy.value = "";
              candidateElectPosition.value = "";
              candidateAbout.value = "";
            }
            else {
              console.log("Candidate was not successfully added")
              console.log(String(candidateFirstName.value))
              console.log(String(candidateLastName.value))
              console.log(String(candidateEmail.value))
              console.log(parseInt(candidateAttachedHall.value))
              console.log(parseInt(candidateFacultyOfStudy.value))
              console.log(parseInt(candidateElectPosition.value))
              console.log(String(candidateAbout.value) )
              errorMessage.innerHTML = "*Error message goes here";
            }
            })
          })
    }

    //Admin is able to register a voter for the election period
    //Complete
    if (registerVoter != null){
      registerVoter.addEventListener("click", function(event){
        fetch(serverLink + 'admin/addVoter', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json',
                  'Authorization': localStorage.getItem("adminToken")
                },
                body: JSON.stringify({
                  "email": email.value,
                  "hall": parseInt(hallOptions.value),
                  "faculty":  parseInt(facultyOptions.value),
                  "doesCommute": Boolean(commuteStatus.value),
                "isPostGrad": Boolean(postGradStatus.value) }
                  
                  )
              })
              .then(res => res.json())
                .then(res => {
                  if (res.success == true){
                      alert("Voter has been registered")
                  }
                  else {
                    errorMessage.innerHTML = "*Error message goes here";
                  }
              })
      })
    }

    //Admin is able to generate election results
    if (generateElectionResults != null){
      generateElectionResults.addEventListener("click", function(event){
        event.preventDefault();

        fetch(serverLink + 'election/results', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("adminToken")
          },
          body: JSON.stringify({
            "email": email.value,
            "hall": parseInt(hallOptions.value),
            "faculty":  parseInt(facultyOptions.value),
            "doesCommute": Boolean(commuteStatus.value),
            "isPostGrad": Boolean(postGradStatus.value)})
        })
        .then(res => res.json())
          .then(res => {
            if (res.success == true){
                alert("Election results have been generated")
            }
            else {
              alert("Election results have not been generated")
              //errorMessage.innerHTML = "*Error message goes here";
            }
        })



      })
    }
    //Admin is able to post election results
    if (postElectionResults != null){
      postElectionResults.addEventListener("click", function(event){
        event.preventDefault();


      })
    }

    //Admin able to retract election results
    if (retractElectionResults != null){
      retractElectionResults.addEventListener("click", function(event){
        event.preventDefault();


      })
    }

    //Admin able to get election results
    if (getElectionResults != null){
      getElectionResults.addEventListener("click", function(event){
        event.preventDefault();


      })
    }

    if (getElectionResultsAdmin != null){
      getElectionResultsAdmin.addEventListener("click", function(event){
        event.preventDefault();


      })
    }

  
    /**Functions */
    //Fill the drop down box with hall/living options
    //Complete
    function fillHallOptions(){
      fetch(serverLink + "admin/halls", {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("adminToken")
        }})
        .then((response) => response.json())
        .then((result) => {
              var i = 0;
              while (result.message[i] != null) {
                  hallOptions.innerHTML +=  "<option value=\"" + result.message[i].hid + "\">" + result.message[i].hallName + "</option>";
                  i++;
                }
        })
        .catch((error) => console.log("error", error)); 
    }

    //Fill the drop down box with faculty options
    //Complete
    function fillFacultyOptions(){
      fetch("https://wekan-api.herokuapp.com/uwivotes/admin/faculties", {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("adminToken")
        }})
          
    
  
        
        .then((response) => response.json())
        .then((result) => {
              var i = 0;
              while (result.message[i] != null) {
                  facultyOptions.innerHTML +=  "<option value=\"" + result.message[i].fid + "\">" + result.message[i].facultyName + "</option>";
                  console.log(result.message[i].hallName)
                  i++;
                }
        }
            )
        .catch((error) => console.log("error", error)); 
    
    } 

    //Fill the drop down box with elect options options
    //Complete
    function fillElectOptions(){
      fetch(serverLink + "admin/positions", {
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("adminToken")
        }})
        .then((response) => response.json())
        .then((result) => {
              var i = 0;
              while (result.message[i] != null) {
                 electOptions.innerHTML +=  "<option value=\"" + result.message[i].pid + "\">" + result.message[i].positionTitle + "</option>";
                  i++;
                }
        })
        .catch((error) => console.log("error", error)); 
    } 


    /**Helper Functions */
    function disableLink(linkName){
      //alert("Link off")
      linkName.getElementById(id).style.visibility = "hidden";
      //disable link
    }

    function enableLink(linkName){
      //alert("Link on")
      linkName.getElementById(id).style.visibility = "visible";
      //re-enable link
    }


    
   







  },
  false
);
