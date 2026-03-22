document.addEventListener("DOMContentLoaded", function () {
    console.log("JS läuft");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");
    const plzInput = document.getElementById("plz");
    const form = document.getElementById("spendenForm");

    console.log("Gefundenes Formular:", form);

    // Abholadresse ein-/ausblenden
    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value === "abholung") {
                abholAdresse.style.display = "block";
            } else {
                abholAdresse.style.display = "none";
            }
        });
    });

    // Rahmen zurücksetzen, sobald der Nutzer tippt
    plzInput.addEventListener("input", () => {
        plzInput.style.border = "";
    });

    // VALIDIERUNG
    form.addEventListener("submit", function (e) {
        console.log("SUBMIT LISTENER WIRD AUSGEFÜHRT");
        e.preventDefault();

        // Übergabeart prüfen
        const uebergabe = document.querySelector('input[name="uebergabe"]:checked');
        if (!uebergabe) {
            alert("Bitte eine Übergabeart auswählen.");
            return false;
        }

        // PLZ nur prüfen, wenn Abholung gewählt wurde
        if (uebergabe.value === "abholung") {
            const plz = plzInput.value.trim();

            // Vor der Prüfung sicherheitshalber zurücksetzen
            plzInput.style.border = "";

            if (!/^\d{5}$/.test(plz)) {
                alert("Bitte eine gültige 5-stellige Postleitzahl eingeben.");
                plzInput.style.border = "2px solid red";
                plzInput.focus();
                return false;
            }
        }

        alert("Formular erfolgreich validiert!");
        return true;
    });
});
