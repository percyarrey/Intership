const myaccord=document.querySelectorAll("#myaccord")
let ct=0
myaccord.forEach(div => {
    div.innerHTML="▼"
})
const myaccordbtn=document.querySelectorAll("#myaccordbtn")
myaccordbtn.forEach(but =>{
    const buttonsx=but
    but.addEventListener("click", () =>{
        const mydiv = buttonsx.querySelector("#myaccord")
            if(mydiv.innerHTML=="▼"){
                mydiv.innerHTML="▲" 
                ct++
            }
            else{
                mydiv.innerHTML="▼" 
                ct--
            }    
    })
})