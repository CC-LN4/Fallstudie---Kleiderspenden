form.addEventListener("submit", function(event) {
    console.log("SUBMIT EVENT FEUERT");
});
document.addEventListener("DOMContentLoaded", function() {
    console.log("JS läuft");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");
    const plzInput = document.getElementById("plz");
    const form = document.querySelector("form");

    radios.forEach(radio => {
        radio.addEventListener("change", function() {
            abholAdresse.style.display = this.value === "abholung" ? "block" : "none";
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // <-- verhindert IMMER das Absenden

        const plz = plzInput.value.trim();

        if (!/^\d{5}$/.test(plz)) {
            alert("Bitte eine gültige 5-stellige Postleitzahl eingeben.");
            plzInput.style.border = "2px solid red";
            plzInput.focus();
            return;
        }

        // Wenn PLZ gültig → Formular darf weiter
        alert("Formular erfolgreich validiert!");
        form.submit(); // <-- manuelles Absenden
    });
});
