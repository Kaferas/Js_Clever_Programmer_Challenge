// Challenge number 1 : My age in Days
function ageInDays()
{
    let age= prompt("What is your Birth Year ? :")
    age= (new Date().getFullYear() - parseInt(age)) * 365 ;
    document.getElementById("AgeIs").innerHTML= "Your Current Days at this Fuckin World is: <span class='red'>  " + age + " </span>";
}