// document.addEventListener("DOMContentLoaded", datesNStuff());
window.onload = 
function datesNStuff() {    
    let year = new Date().getFullYear();
    let updated = "Last Updated: " + document.lastModified;
    document.getElementById("lastUpdate").innerText = updated;
    let copyright = "&#169;" + year + " .:|:. Nathan E. Atchley .:|:. Idaho";
    document.querySelector('#copyright').innerText = copyright;
}