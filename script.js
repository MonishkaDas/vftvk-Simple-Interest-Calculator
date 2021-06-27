function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        alert("Enter a positive number");
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount= principal+interest;
    var year = new Date().getFullYear()+parseInt(years);
    var res="If you deposit <mark>" + principal +
    "</mark>,<br/>at an interest rate of <mark>"+ rate +
    "% </mark> <br/>You will receive an amount of <mark>"+ amount +
    "</mark>,<br/>in the year <mark>"+ year +"<br/>"
    document.getElementById("result").innerText=res;
}

        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}      
