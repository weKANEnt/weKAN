document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("loaded page");
    /** Navbar buttons */
    var navCandidates = document.getElementById("navCandidates");
    var navResults = document.getElementById("navResults");
    var navSignIn = document.getElementById("navSignIn");
    var navBarLogo = document.getElementById("navBarLogo");
    /* var page1 = document.getElementById("page1Link");
    var page2 = document.getElementById("page2Link");*/
    console.log("page loads");

    /**Event Listeners for Pages */

    /*
    fetch(url, { method: 'POST', redirect: 'follow'})
    .then(response => {
        // HTTP 301 response
    })
    .catch(function(err) {
        console.info(err + " url: " + url);
    });

    fetch('/src/view/candidates.html', { method: 'POST', redirect: 'follow'})
    .then(response => {
        return response.text()
    })
    .catch(function(err) {
        //console.info(err + " url: " + url);
        document.body.innerHTML = body
    });

    */
    navCandidates.addEventListener("click", function () {
      alert("You clicked Candidates");
      /*fetch('/src/view/candidates.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })*/

      ///*

      /* fetch('/src/view/candidates.html')//, { method: 'POST', redirect: 'follow'})
        .then(response => {
            return response.text()
        })
        .catch(function(err) {
            //console.info(err + " url: " + url);
            document.body.innerHTML = body
        }); //*/
    });

    navResults.addEventListener("click", function () {
      alert("You clicked Results");
      fetch("/src/view/results.html", { method: "GET", redirect: "follow" })
        .then(function (response) {
          return response.text();
        })
        .then(function (body) {
          document.body.innerHTML = body;
        });
    });

    navSignIn.addEventListener("click", function () {
      alert("You clicked Sign In");
      /* fetch('/src/view/logIn.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })*/
    });

    navBarLogo.addEventListener("click", function () {
      alert("You clicked Home/Logo");
      /* fetch('/src/view/index.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        }) */
    });

    //console.log("start");
    //console.log(fetch('/src/view/page1.html'));

    /* fetch('/src/view/page2.html')
    .then(function(response) {
        return response.text()
      }).then(function(body) {
        document.body.innerHTML = body
      }) */

    /* .then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        console.log(jsonData);
    }).catch(function(err) {
        console.log("Opps, Something went wrong!", err);
    })*/

    /*
    fetch('http://127.0.0.1:5500/src/view/page1.html')
    .then(res => res.json())
    .then(data => console.log(data)) */
    /* console.log(fetch('https://regres.in/api/users'));
    //alert("waiter");
    fetch('http://example.com/movies.json')
    .then(response => response.json())
    .then(data => console.log(data));  */

    /*  page1.addEventListener("click", function(){
        //alert("You clicked the link for page 1.")
        
      /*  fetch('http://google.com/')
        .then((response) => {
            alert("yes")
            return response.json();
        })
        .then((myJson) => {
            console.log(myJson);
        });

    });*/
    /*
    page2.addEventListener("click", function(){
        
        //alert("You clicked the link for page 2.")
        console.log("you clicked page2");



    });
*/

    /*  navCandidates.addEventListener("click", function () {
     alert("You clicked Candidates");
    });

    navResults.addEventListener("click", function () {
      alert("You clicked Results");
      fetch('./src/view/results.html', { method: 'POST', body: 'a=1' })
        .then(res => res.json()) // expecting a json response
        .then(json => {
           console.log(json)
           window.location.href = data.redirect;
          });
    });     fetch('http://google.com')
        .then(response => response.json())
        .then(data => console.log(data)); 
    });

    navSignIn.addEventListener("click", function () {
      alert("You clicked SignIn");
      window.location.href = "logIn.html";
    });

    navBarLogo.addEventListener("click", function () {
      alert("You clicked UWIVotes logo");
    });




    */
    /** Home Page Buttons */

    /** LogIn Page Buttons */

    /** Vote Intro Page */

    /** Body buttons */

    /*
    board = document.querySelector("#board"); 
    square = board.querySelectorAll("div"); 
    square.forEach(element => element.setAttribute("class","square")); 

 
    var squares = document.getElementsByClassName("square");
    var prevSquare = null;
    var winner = "none";

    var squareAttribute = "";

    for (var i=0; i<square.length;i++){  

        square[i].addEventListener("mouseover", addHover, false);
        square[i].addEventListener("mouseout", removeHover, false);
        let prevAttribute = "";
        function addHover(){ 
            squareAttribute = this.getAttribute("class");
            newAttribute = squareAttribute + " hover square";
            this.setAttribute("class",newAttribute);
        }

        function removeHover(){  
            squareAttribute = this.getAttribute("class");
            var newClass = squareAttribute.replace(/hover/g,'');
            this.setAttribute("class",newClass);
        }  

            square[i].click = function(target){                
                if (this.innerHTML=="" && prevSquare!="X" ){
                    this.innerHTML = "X";
                    prevSquare="X";
                    this.setAttribute("class", "square X");
                    if (winner == "none"){
                        checkWinner(); 
                    }
                    
                }
                if (this.innerHTML=="" && prevSquare!="O"){
                    this.innerHTML = "O";
                    prevSquare="O";
                    this.setAttribute("class", "square O");
                    counter = i;
                    if (winner == "none"){
                       checkWinner(); 
                    }                    
                }               
                
            }            
    }

 
    let statusChange = document.getElementById("status");
    
    function checkWinner(){         
        //top row winner       
        if((square[0].innerHTML=="X" && square[1].innerHTML=="X" && square[2].innerHTML=="X") || (square[0].innerHTML=="O" && square[1].innerHTML=="O" && square[2].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }  
        //middle row winner
        else if((square[3].innerHTML=="X" && square[4].innerHTML=="X" && square[5].innerHTML=="X") || (square[3].innerHTML=="O" && square[4].innerHTML=="O" && square[5].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[3].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        } 
        //bottom row winner 
        else if((square[6].innerHTML=="X" && square[7].innerHTML=="X" && square[8].innerHTML=="X") || (square[6].innerHTML=="O" && square[7].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[6].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //left most column winner
        else if((square[0].innerHTML=="X" && square[3].innerHTML=="X" && square[6].innerHTML=="X") || (square[0].innerHTML=="O" && square[3].innerHTML=="O" && square[6].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //middle column winner
        else if((square[1].innerHTML=="X" && square[4].innerHTML=="X" && square[7].innerHTML=="X") || (square[1].innerHTML=="O" && square[4].innerHTML=="O" && square[7].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[1].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";

        }
        //right most column winner
        else if((square[2].innerHTML=="X" && square[5].innerHTML=="X" && square[8].innerHTML=="X") || (square[2].innerHTML=="O" && square[5].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[2].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }
        //verticle left to right
        else if((square[0].innerHTML=="X" && square[4].innerHTML=="X" && square[8].innerHTML=="X") || (square[0].innerHTML=="O" && square[4].innerHTML=="O" && square[8].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[0].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }
        //verticle right to left
        else if((square[2].innerHTML=="X" && square[4].innerHTML=="X" && square[6].innerHTML=="X") || (square[2].innerHTML=="O" && square[4].innerHTML=="O" && square[6].innerHTML=="O")){
            statusChange.innerHTML="Congratulations! " + square[2].innerHTML + " is the Winner!";
            statusChange.setAttribute("class","you-won"); 
            winner = "found";
        }

        else if (winner!="found" && square[0].innerHTML!="" && square[1].innerHTML!="" && square[2].innerHTML!="" && square[3].innerHTML!="" && square[4].innerHTML!="" && square[5].innerHTML!="" && square[6].innerHTML!=""&& square[7].innerHTML!="" && square[8].innerHTML!="") {
            statusChange.innerHTML="It's a draw! Play a new game!";
        }
        
    }

    const newGame = document.querySelector('.btn');
    const loadGame = () => {location.reload();}
    newGame.addEventListener('click', loadGame) */

    /**Rough notes */

    /* var requestOptions = {
        method: 'GET',
        redirect:
    } */
    /*fetch('/src/view/page1.html')
    .then(function(response) {
        return response.text()
      }).then(function(body) {
        document.body.innerHTML = body
      })*/

    /*

    navCandidates.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method != "GET") return;

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async function () {
      // Try to get the response from a cache.
      const cache = await caches.open("dynamic-v1");
      const cachedResponse = await cache.match(event.request);

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        event.waitUntil(cache.add(event.request));
        return cachedResponse;
      }

      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })()
  );
    });


  /*   navCandidates.addEventListener("fetch", (event) => {
        fetch('/src/view/candidates.html')
            .then(function(response) {
                return response.text()
            }).then(function(body) {
                document.body.innerHTML = body
            })




       alert("You clicked Candidates");
        fetch('/src/view/candidates.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })
  });
  
   /*function test(){
        fetch('/src/view/candidates.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })
    }*/
    //est();
    /* fetch('/src/view/candidates.html')
        .then(function(response) {
            return response.text()
        }).then(function(body) {
            document.body.innerHTML = body
        })*/

    /*
    fetch("http://localhost:8080/uwivotes/admin/halls", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  
  
  
  
  
  
  */
  },
  false
);
