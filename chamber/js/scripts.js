const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('nav');
const monTuesBanner = document.querySelector('.banner');

menubutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

window.onload = 
function datesNStuff() {    
    let date = new Date();
    let year = date.getFullYear();
    let updated = "Last Updated: " + document.lastModified;
    document.getElementById("lastUpdate").innerText = updated;
    document.querySelector('#copyright').innerText = year;

    let day = date.getDay();
    if (day == 6 || day == 3) {
        monTuesBanner.classList.toggle('bannerShow');
    }
}

window.onload = 
function bannerShow() {
    let date = new Date.getDay();
    if (date == 6 || date == 3) {
        monTuesBanner.classList.toggle('bannerShow');
    }
}