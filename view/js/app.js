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
     * 14. Add if token empty, the page redirects them to index
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
    var generateElectionResults = document.getElementById("generateElectionResult");
    var postElectionResults = document.getElementById("postElectionResults");
    var retractElectionResults = document.getElementById("retractElectionResults");
    var getElectionResults = document.getElementById("getElectionResults");
    var getElectionResultsAdmin = document.getElementById("getElectionResultsAdmin")
    var electionResultAdminSection = document.getElementById('electionResultsAdmin')
    var getSelectedValue = document.querySelector('input[name="studentVotes"]:checked');  
    var navBarAdminElectionCreation = document.getElementsByClassName("navBarAdmin")[0];
    var navBarAdminElectionModifications = document.getElementsByClassName("navBarAdmin")[1];
    var navBarAdminResults = document.getElementsByClassName("navBarAdmin")[2];
    var navBarAdminViewResults = document.getElementsByClassName("navBarAdmin")[3];
    var navBarRegisterVoters = document.getElementsByClassName("navBarAdmin")[4];
    //var electionModifications = document.getElementById('electionModifications')

    var ballotOptions = document.getElementById("ballotOptions");

    var startStudentBallot = document.getElementById("startStudentBallott");
    var nextButton = document.getElementById("next");

    var electTitle = document.getElementById("electTitle");

    var verifyAdminEmail = false;

    var verifyEmail = false;
    var verifyOTP = false;

    var electName = "";
    var studentVote = [];

  

    var candidatePositions = [
    'presidents', 'vpssp', 'vppsi', 'secretary', 'treasurer', 'gcc',
    'pro', 'ceac', 'eac', 'facultyrep', 'commuting', 'postgrad', 'hallchair','dhallchair']



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

   /*  navBarAdminElectionCreation 
     navBarAdminElectionModifications 
     navBarAdminResults 
     navBarAdminViewResults */

    if (navBarAdminElectionCreation !=null){
        navBarAdminElectionCreation .addEventListener("click", function(event){
            event.preventDefault()
            window.location.href = directoryLinkAddress + 'adminIndex.html';
        })
    }

    if (navBarAdminElectionModifications !=null){
        navBarAdminElectionModifications .addEventListener("click", function(event){
            event.preventDefault()
           // alert("yes2");
            window.location.href = directoryLinkAddress + 'adminIndex_ElectionModifications.html';
        })
    }

    if (navBarAdminResults !=null){
        navBarAdminResults .addEventListener("click", function(event){
            event.preventDefault()
            alert("yes3");
           // window.location.href = directoryLinkAddress + 'adminIndex_ElectionModifications.html';
        })
    }

    if (navBarAdminViewResults !=null){
        navBarAdminViewResults .addEventListener("click", function(event){
            event.preventDefault()
            alert("yes4");
           // window.location.href = directoryLinkAddress + 'adminIndex_ElectionModifications.html';
        })
    }

    if (navBarRegisterVoters !=null){
        navBarRegisterVoters .addEventListener("click", function(event){
            event.preventDefault()
            //alert("yes5");
            window.location.href = directoryLinkAddress + 'adminIndex_RegisterVoters.html';
        })
    }

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
        localStorage.setItem("studentVote","")
        startStudentBallot.addEventListener("click", function(){
        // getToVote();
        window.location.href = directoryLinkAddress + 'placeBallotPage.html';
        localStorage.setItem("Yessss", "here")


    });
    }



  

    function nextCandidate(){
    localStorage.setItem("nextCandidate", parseInt(localStorage.getItem) + 1)
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
                alert("Election created successfully")
                window.location.href = directoryLinkAddress + 'adminIndex.html';
            }
            else if(res.name == "Single Election"){
                alert("An election is already going on. Please delete the previous election before making a new one.")
            }
            else {
                alert("Please ensure that all information entered in the correct format")
                //errorMessage.innerHTML = "*Error message goes here";
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
            if (res.success ==true){
                alert("Election has successfully been deleted")
            }
            else{
                alert("Failure to delete election, please sign out and sign back in to try again.")
            }
            
            window.location.href = directoryLinkAddress + 'adminIndex.html';
        }) 
        } else {
            console.log('Election was not deleted');
        }
        }
        else {
            if (adminEmail.value == "" || password.value == ""){
                alert("Please ensure all fields are filled out correctly.")
            }
            else{
                alert("The email and password entered are incorrect.")
            }
            
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
            alert("Candidate has been sucessfully added");
        }
        else if(res.name == "Empty Field"){
            alert("Please ensure that all information entered is in the correct format!")
           
        }
        else {
            alert("Candidate has already been added!")
            //errorMessage.innerHTML = "*Error message goes here";
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
    alert("Yes")

    fetch(serverLink + 'election/results', {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("adminToken")
    },
    body: JSON.stringify({

    })
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
    window.location.href = directoryLinkAddress + 'electionResultsAdmin.html';


    })
    }

    function generateElectionResult(){

    }



    function getElectionResultsAdmin2(){

    fetch(serverLink + "election/admin/results", {
    method: 'GET',
    headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem("adminToken")
    }})
    .then((response) => response.json())
    .then((result) => {
    var i = 0;
    while (result.results[i] != null) {
    electionResultAdminSection.innerHTML += "<br>" + result.results[i].name;
    i++;
    }
    })
    .catch((error) => console.log("error", error)); 
    }

    if (electionResultAdminSection != null){
    electionResultAdminSection.innerHTML = "Yes";
    getElectionResultsAdmin2f();
    electionResultAdminSection.innerHTML = "Yees";
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


    /**Voting */
    var candidatesToRun = []
    if (ballotOptions != null){
        
        loadCandidatesToVoteFor();
        if (candidatesToRun[0] != null){
            loadCandidates(candidatesToRun[0]);
            candidatesToRun.shift();
        }
        


       /// checkIfStudentMayVoteForCandidate('presidents');
        //
        //console.log("run for these candidates: " + candidatesToRun)
       // loadTheCandidates();
    }

    

    function checkIfStudentMayVoteForCandidate(candidateLink){
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
                try {
                        localStorage.setItem(candidateLink,'false')
                        //console.log(result.candidates[0]);
                        if (result.candidates[0] != undefined &&  result.candidates[0] != 0 && result.success != false){
                            //console.log("Check: " + candidateLink + " is : " + (result.candidates[0] != undefined) + " and " + (result.candidates[0] != 0))
                            localStorage.setItem(candidateLink,'true')
                           // candidatesToRun.push(candidateLink)
                            //console.log(candidatesToRun)
                        }
                        else{
                           // console.log("Check: " + candidateLink + " is : " + (result.candidates[0] != undefined) + " and " + (result.candidates[0] != 0))
                            localStorage.setItem(candidateLink,'false')
                        }
                        

                        
                }
                catch (error){

                }
                


                /*
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


            } */

            })
            .catch((error) => console.log("error", error)); 




    }

    //To load status of the candidates the student may vote for and put in local storage
    function loadCandidatesToVoteFor(){
        for (i in candidatePositions){
            checkIfStudentMayVoteForCandidate(candidatePositions[i]);
            if (localStorage.getItem(candidatePositions[i]) == 'true'){
                candidatesToRun.push(candidatePositions[i])
            }
           // console.log(candidatePositions[i] + " status is " + localStorage.getItem(candidatePositions[i]))

           // checkIfStudentMayVoteForCandidate(candidatePositions[i]);
        }
        

    }


    function loadCandidates(candidateLink){
         //console.log("These are the candidates left to load: " + candidatesToRun)
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
        
    if (nextButton != null){
        nextButton.addEventListener("click", function(event){ 
            event.preventDefault();
           // console.log(candidatesToRun)
            var getSelectedValue = document.querySelector('input[name="studentVotes"]:checked');

            if (candidatesToRun[0] != null){
                if (getSelectedValue != null){
                    studentVote.push(parseInt(getSelectedValue.id));
                    //studentVote
                   // console.log("Student vote is: " + studentVote)
                    if (candidatesToRun.length != 0){
                        loadCandidates(candidatesToRun[0]);
                        candidatesToRun.shift();
                        
                    }
                    
    
    
                }else{
                    console.log("Please select an item")
                }

            }
            else{
               /* console.log(studentVote)
                localStorage.setItem("studentVote",studentVote)
                console.log("Local storage: " + localStorage.getItem("studentVote"))
                console.log("Ballot ended") */
                //studentVote
                submitBallot();
                //window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
            }


        });
    }

    function submitBallot(){
        //console.log(studentVote);
        fetch(serverLink + 'ballot/submitBallot',{
            method: 'PATCH',
            body: JSON.stringify({
              "cids":  studentVote//JSON.parse(localStorage.studentVote),
            }),
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem("studentToken"),
              },
            })
            .then(res => res.json()) 
            .then(res => {
                console.log(res)
              if (res.message == "Vote already recorded for given email"){
                
                alert("Sorry! You've already placed your vote. Please wait until the results are released.")
                window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
                }
              else if (res.success == false){
                alert("Unable to submit, please contact your administrator");
                window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
              }
              else if (res.success == true){
                alert("Your ballot has been submitted.");
                window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
              }
                
            })
            .catch(err => console.error())

     
        console.log("Ballot submitted")


    }


    function resetBallot(){
        localStorage.setItem("nextCandidate",1);
    } 


    /**Student Voting Process */


        /*

         function checker(){
    if (ballotOptions != null){
    for (i in candidatePositions){
    checkIfCandidatesEmpty(candidatePositions[i]);
    }
    if (localStorage.getItem("nextCandidate") > 14){
    console.log("Ballot submitted")
    }
    }

    }

var candidatesToRun = []

    function getCandidatesToRun(){
    try {
    for (let i=0 ; i < 14; i++){
        checkIfCandidatesEmpty(candidatePositions[i]);
        candidatesToRun.push(candidatePositions[i]);
    }
    }
    catch (error){

    }
    }

    var getSelectedValue = document.querySelector('input[name="studentVotes"]:checked'); 
    var voting = 0;
    if(ballotOptions != null){
    getCandidatesToRun();

    if (candidatesToRun != []){
        console.log(candidatesToRun)
        loadCandidates(candidatesToRun[0]);

    }



    }



    var studentVote = [];
    if(nextButton != null){
        nextButton.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href = directoryLinkAddress + 'voteBallotEnd.html';
   

    });

    }

    function loadTheVoting(){
        if (candidatesToRun != []){
        console.log(candidatesToRun)
        loadCandidates(candidatesToRun[0]);

 if (localStorage.getItem("Yessss") == "here"){
        checker();
        localStorage.setItem("Yessss", "heres")
    }

    }
    } 
    
    
    
    */

    },
    false
);