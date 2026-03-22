document.addEventListener("DOMContentLoaded", function() {
    console.log("JS läuft");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");
    const plzInput = document.getElementById("plz");
    const form = document.getElementById("spendenForm");
    console.log("Gefundenes Formular:", form);



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
            alert("PLZ ungültig! Wert war: " + plz);
            plzInput.style.border = "2px solid red";
            plzInput.focus();
            return false;
        }

        alert("Formular erfolgreich validiert!");
        return true;
    };
});
