window.onload = function() {
    let d = new Date();
    modDate.innerHTML = `Last Updated: ${d.toLocaleString("en-us")}`
    copyYear.innerHTML = d.getFullYear();
};