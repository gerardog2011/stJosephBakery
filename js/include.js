function includeHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error cargando " + file, error));
}

// Incluir header y footer
includeHTML("header", "header.html");
includeHTML("footer", "footer.html");
