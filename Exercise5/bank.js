document.getElementById("mycollapsebtn").innerHTML = "SHOW MORE ▼";
var mytext=document.getElementById("mytext")
let cont=1
function togglemycollapse(){
    console.log(mytext.style.height)
    if(mytext.style.height==""){
        document.getElementById("mycollapsebtn").innerHTML = "SHOW MORE ▼";
   }
   if(mytext.style.height>="0px"){
       document.getElementById("mycollapsebtn").innerHTML = "SHOW LESS ▲";
   }

}

