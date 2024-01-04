function redirectUser() {
    var requestType = document.getElementById("requestType").value;
    var redirectButton = document.getElementById("redirectButton");

    if (requestType === "vacation") {
        // Rediriger vers le lien de formulaire pour les vacances
        window.location.href = "https://forms.office.com/e/bMGsVP6J4W";
    } else if (requestType === "training") {
        // Rediriger vers le lien de formulaire pour la formation
        window.location.href = "https://forms.office.com/e/1wdpPWKkJi";
    }
}
