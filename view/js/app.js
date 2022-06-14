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

      var verifyAdminEmail = false;
      
      var verifyEmail = false;
      var verifyOTP = false;
    
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
        if (localStorage.getItem("adminLoggedIn")  == true ){ //|| localStorage.getItem("adminLoggedIn") == "true" ){
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
        localStorage.setItem("adminToken", false);
        localStorage.setItem("adminLoggedIn", false);
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
                          verifyOTP = false;
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
              'firstName': candidateFirstName.value,
              'lastName': candidateLastName.value,
              'email': candidateEmail.value,
              'hall': parseInt(candidateAttachedHall.value),
              'faculty': parseInt(candidateFacultyOfStudy.value),
              'position': parseInt(candidateElectPosition.value),
              'about': candidateAbout.value 
            }]
          })
        }).then(res => res.json())
          .then(res => {
            if (res.success == true){
              console.log("Candidate was sucessfully added")
            }
            else {
              console.log("Candidate was not successfully added")
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
                  "isPostGrad": Boolean(postGradStatus.value)})
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
