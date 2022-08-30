
const btnleft=document.getElementById("btnleft")
const btnright=document.getElementById("btnright")
let scrollamt=200
let current=0
function slide(val){
    const ccont=document.getElementById("mycards")
    const myoverflow=document.getElementById("myoverflow")
    let maxscroll = ccont.offsetWidth - myoverflow.offsetWidth
    console.log(maxscroll)
    current += (val*scrollamt)
    if(current>=maxscroll){
        current=maxscroll
        btnright.style.opacity=0.2
    }
    else{
        btnright.style.opacity=1

    }
    if(current<=0){
        current=0
        btnleft.style.opacity=0.2
    }
    else{
        btnleft.style.opacity=1
    }
    ccont.style.right=current + "px"
}