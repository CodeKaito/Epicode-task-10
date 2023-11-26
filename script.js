let commentSent = () => alert("Comment Sent Successfully!");

let changeTitle = () => {
    newTitle = prompt("Inserisci un nuovo titolo");
    if (newTitle !== null) {
        document.getElementById("title").textContent = newTitle;
    }
}

function toggleBackgroundColor() {
    var body = document.body;
    var currentBackgroundColor = window.getComputedStyle(body).backgroundColor.toLowerCase();

    if (currentBackgroundColor === "rgb(245, 245, 247)" || currentBackgroundColor === "#f5f5f7") {
        body.style.backgroundColor = "#0166CC";
    } else if (currentBackgroundColor === "rgb(1, 102, 204)" || currentBackgroundColor === "#0166cc") {
        body.style.backgroundColor = "#F5F5F7";
    }
}

let changeAddress = () => {
    var newAddress = prompt("Inserisci un nuovo indirizzo");
    if (newAddress !== null) {
        document.getElementById("title").textContent = newAddress;
    }
}

let addClass = () => { 
    allLinks = document.querySelectorAll("a[href*='amazon']");
    allLinks.forEach(function(link) {
        link.classList.add("active");
    });
}

let toggleVisibilitaImmagini = () => {
    var immagini = document.querySelectorAll("items");
    immagini.forEach(function(immagine) {
        immagine.classList.toggle("visibility");
    });
}

let changeColorPrices = () => {
    var prices = document.querySelectorAll(".price");
    var colors = ["red", "blue", "green", "orange", "purple"];

    prices.forEach(function(prices) {
        var coloreCasuale = colors[Math.floor(Math.random() * colors.length)];
        prices.style.color = coloreCasuale;
    });
}


