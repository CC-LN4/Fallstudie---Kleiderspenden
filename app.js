document.addEventListener("DOMContentLoaded", function() {
    console.log("JS läuft");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");
    const plzInput = document.getElementById("plz");
    const form = document.querySelector("form");

    // Umschalten der Abholadresse
    radios.forEach(radio => {
        radio.addEventListener("change", function() {
            abholAdresse.style.display = this.value === "abholung" ? "block" : "none";
        });
    });

    // HARTE VALIDIERUNG – fängt ALLES ab
    form.onsubmit = function(e) {
        console.log("SUBMIT LISTENER WIRD AUSGEFÜHRT");
        e.preventDefault(); // <-- blockiert jedes Absenden

        const plz = plzInput.value.trim();

        if (!/^\d{5}$/.test(plz)) {
            alert("Bitte eine gültige 5-stellige Postleitzahl eingeben.");
            plzInput.style.border = "2px solid red";
            plzInput.focus();
            return false;
        }

        alert("Formular erfolgreich validiert!");
        return true;
    };
});
