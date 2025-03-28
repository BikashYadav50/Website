// Function to load external HTML
function loadHTML(id, url) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load Header and Footer
loadHTML("header", "header.html");
loadHTML("footer", "footer.html");