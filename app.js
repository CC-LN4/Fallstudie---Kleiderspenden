document.addEventListener("DOMContentLoaded", function() {
    console.log("JS läuft");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");
    const plzInput = document.getElementById("plz");
    const form = document.getElementById("spendenForm");

    // Umschalten der Abholadresse
    radios.forEach(radio => {
        radio.addEventListener("change", function() {
            if (this.value === "abholung") {
                abholAdresse.style.display = "block";
            } else {
                abholAdresse.style.display = "none";
            }
        });
    });

    // PLZ Validierung beim Tippen
    plzInput.addEventListener("input", function() {
        const plz = plzInput.value.trim();

        // Nur Ziffern erlauben
        if (!/^\d*$/.test(plz)) {
            plzInput.style.border = "2px solid red";
            return;
        }

        // 5-stellig?
        if (plz.length === 5) {
            plzInput.style.border = "2px solid green";
        } else {
            plzInput.style.border = "2px solid orange";
        }
    });

    // Validierung beim Absenden
    form.addEventListener("submit", function(event) {
        const plz = plzInput.value.trim();

        if (!/^\d{5}$/.test(plz)) {
            alert("Bitte eine gültige 5-stellige Postleitzahl eingeben.");
            plzInput.focus();
            event.preventDefault();
        }
    });
});
