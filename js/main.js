// document.addEventListener("DOMContentLoaded", datesNStuff());
window.onload = 
function datesNStuff() {    
    let year = new Date().getFullYear();
    let updated = "Last Updated: " + document.lastModified;
    document.getElementById("lastUpdate").innerText = updated;
    document.querySelector('#copyright').innerText = year;
}