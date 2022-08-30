let num=0;
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
function next(){
    if(num<2){
       num=num+1; 
       if(num==0){
        img1.style.opacity=1;
        img2.style.opacity=0;
        img3.style.opacity=0;
         }
         if(num==1){
        img1.style.opacity=0;
        img2.style.opacity=1;
        img3.style.opacity=0;
        }
        if(num==2){
        img1.style.opacity=0;
        img2.style.opacity=0;
        img3.style.opacity=1;
         }
    }
    else{
        alert('Try clicking on the other side')
    }
    
    
}
function prev(){
    if(num>0){
       num=num-1; 
        if(num==0){
            img1.style.opacity=1;
            img2.style.opacity=0;
            img3.style.opacity=0;
        }
        if(num==1){
            img1.style.opacity=0;
            img2.style.opacity=1;
            img3.style.opacity=0;
        }
        if(num==2){
            img1.style.opacity=0;
            img2.style.opacity=1;
            img3.style.opacity=0;
        }
    }
    
    
    else{
        alert('Try clicking on the other side')
    }
}
var searchbtn=document.getElementById("searchbtn")
var searchs=document.getElementById("togglesearch")
var myinput=document.getElementById("myinput")
searchs.style.maxHeight="0px"
searchbtn.addEventListener('click',()=>{
       if(searchs.style.maxHeight=="0px"){
        searchs.style.maxHeight="100px"
        myinput.style.opacity=1
        myinput.style.width="100%"
    }
    else{
        myinput.style.transitionDelay="0s"
        searchs.style.maxHeight="0px"
        myinput.style.opacity=0
        myinput.style.width="0px"
    }
});
var option = document.querySelector("#options")
var items=option.querySelectorAll("div")
var bussiness = option.querySelectorAll(".business")
var market = option.querySelectorAll(".market")
var consult = option.querySelectorAll(".consult")
var life = option.querySelectorAll(".life")
allbtn.addEventListener("click",()=>{
    items.forEach((div) => {
            div.style.display="block";
    });  

});
businbtn.addEventListener('click',()=>{
    items.forEach((div) => {
        div.style.display="block";
    }); 
    bussiness.forEach((div) => {
            div.style.display="none";
    });  
});
marbtn.addEventListener('click',()=>{
    items.forEach((div) => {
        div.style.display="block";
    }); 
    market.forEach((div) => {
            div.style.display="none";
    });  
});
consultbtn.addEventListener('click',()=>{
    items.forEach((div) => {
        div.style.display="block";
    }); 
    consult.forEach((div) => {
            div.style.display="none";
    });  
});
lifebtn.addEventListener('click',()=>{
    items.forEach((div) => {
        div.style.display="block";
    }); 
    life.forEach((div) => {
            div.style.display="none";
    });  
});
var menu = document.querySelector("#optionmenu")
var optionmenu = menu.querySelectorAll(".lists")

optionmenu.forEach((div) => {
    div.addEventListener('click',()=>{
        optionmenu.forEach((div) =>{
            div.className = ' btn lists';
        });
        div.className = 'myactive btn lists';
    });
}); 

