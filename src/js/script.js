window.onload = function() {
    const intro = document.getElementById("inicio");
    const content = document.getElementById("seuElementoAqui"); // ← precisa disso
    setTimeout(() => {
        intro.classList.add("efeito-out");
        setTimeout(() => {
            intro.style.display = "none";
            content.classList.remove("hidden");
            content.classList.add("efeito-in");
        }, 1000);
    }, 2000);
}