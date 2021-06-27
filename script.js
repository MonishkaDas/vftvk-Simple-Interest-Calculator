function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        alert("Enter a positive number");
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount= principal+interest;
    var year = new Date().getFullYear()+parseInt(years);
    var res="If you deposit "+ principal +
    ",\<br\>at an interest rate of "+ rate +
    "%\<br\>You will receive an amount of "+ amount +
    ",\<br\>in the year "+ year +"\<br\>"
    document.getElementById("result").innerText=res;
}

        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}      
