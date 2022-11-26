(function(){
   const verTudo = document.querySelectorAll("#all")
   const close = document.querySelectorAll(".close")
   
   
   
   //Modals
   const modal1 = document.querySelector(".modal1")
   const modal2 = document.querySelector(".modal2")
   const modal3 = document.querySelector(".modal3")
   const modal4 = document.querySelector(".modal4")
   

   //Modal1
   verTudo[0].addEventListener("click", function(){
    modal1.style.display = "block"
    document.body.style.overflowY = "scroll"
    document.body.style.overflowX = "hidden"
   })

   close[0].addEventListener("click", function(){
    modal1.style.display = "none"
   })

    //Modal2
    verTudo[1].addEventListener("click", function(){
        modal2.style.display = "block"
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
    })
    
    close[1].addEventListener("click", function(){
        modal2.style.display = "none"
    })

    //Modal3
    verTudo[2].addEventListener("click", function(){
        modal3.style.display = "block"
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
     })
           
    close[2].addEventListener("click", function(){
        modal3.style.display = "none"
    })

           
    //Modal4
    verTudo[3].addEventListener("click", function(){
        modal4.style.display = "block"
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
    })
       
    close[3].addEventListener("click", function(){
        modal4.style.display = "none"
    })
   

   



})()