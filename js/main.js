// document.addEventListener("DOMContentLoaded", datesNStuff());
window.onload = 
function datesNStuff() {    
    let year = new Date(document.lastModified);
    let updated = "Last Updated: " + document.lastModified;
    document.getElementById("lastUpdate").innerHTML = updated;
    let copyright = "&#169;" + year.getFullYear() + " .:|:. Nathan E. Atchley .:|:. Idaho";
    document.querySelector('#copyright').innerHTML = copyright;
}