const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.nav');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onload = 
function datesNStuff() {    
    let year = new Date().getFullYear();
    let updated = "Last Updated: " + document.lastModified;
    document.getElementById("lastUpdate").innerText = updated;
    document.querySelector('#copyright').innerText = year;
}