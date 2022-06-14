document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("loaded page");

  

    
    
   

    /*
    localStorage.setItem("email", document.getElementById("email").value);
                              "email": localStorage.getItem("email") */





    /**Else */

    /**Verify email address format */



    /**Redirect to OTP page once email verified
     */









/*
    fetch('https://wekan-api.herokuapp.com/uwivotes/ballot/vpssp')
                .then(function(response) {
                    return result.candidates
                    

                }).then(function(body) {
                    document.body.innerHTML += body
                })*/

/*
                fetch('../view/page1.html')
              .then(function(response) {
                    return response.json()
        }).then(function(body) {
         body
        })   */

        /** //finnnalllll 
    console.log("page loads");
var requestOptions = {
        method: "GET",
        redirect: "follow",
        };
        fetch("https://wekan-api.herokuapp.com/uwivotes/ballot/vpssp", requestOptions)
        .then((response) => response.json())
        .then((result) => document.body.innerHTML += result.candidates[0].firstName)
        .catch((error) => console.log("error", error));*/


     /*     fetch('../view/page1.html')
        .then(function(response) {
        return response.text()
      }).then(function(body) {
        document.body.innerHTML = body
      })*/


        
   /* if (page1 != null){
        page1.addEventListener("click", function(){
            //page2.setAttribute('href', '');
            

        })
    }*/



  },
  false
);
