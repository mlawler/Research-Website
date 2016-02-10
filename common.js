var xhttp = new XMLHttpRequest();
xhttp.open("GET", "header.xml", false);
xhttp.send();
document.querySelector("header").innerHTML = xhttp.responseText;

xhttp.open("Get","nav.xml",false);
xhttp.send();
document.querySelector("nav").innerHTML = xhttp.responseText;

xhttp.open("Get","sidebar.xml",false);
xhttp.send();
document.querySelector("aside").innerHTML = xhttp.responseText;

xhttp.open("Get","footer.xml",false);
xhttp.send();
document.querySelector("footer").innerHTML = xhttp.responseText;
