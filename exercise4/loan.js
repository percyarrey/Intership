
submit.addEventListener("click",()=>{
    const uiamount = document.getElementById("amount").value;
    const uimonth =document.getElementById("month").value;
    const uirate = document.getElementById("rate").value;
    const per1 = document.getElementById("per1");
    const per2 = document.getElementById("per2");
    /* convert to float */
    const amount=parseFloat(uiamount);
    const month=parseFloat(uimonth);
    const rate=parseFloat(uirate);
    /* CALCULATION */
    const totalinterest=(amount*rate*month);
    const monthly=totalinterest/month;
    const interest = (totalinterest-amount);
    const uipercen = ((interest*100)/totalinterest);
    const percen = parseInt(uipercen)
    const newpercen = percen-3;
    const newpercen2 = 100-percen;
    document.getElementById("princ").innerHTML = "$ " + (amount).toFixed(2);
    document.getElementById("interest").innerHTML = "$ " + totalinterest.toFixed(2);
    document.getElementById("payment").innerHTML ="$ " + monthly.toFixed(2);
    document.getElementById("payoff").innerHTML = "In "+  month+" Month";
    per1.style.width=newpercen + "%";
    per1.style.height="7px";
    if(newpercen<1){
        per1.style.height="0px";  
    };
    per2.style.width=newpercen2 + "%";
    per2.style.height="7px";
    if(newpercen2<0){
        per2.style.height="0px"; 
    };
    document.getElementById("percen1").innerHTML = percen+"%";
    document.getElementById("percen2").innerHTML = newpercen2+"%";
    console.log(interest,monthly,newpercen2);
});   
 