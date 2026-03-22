console.log("Script geladen");

// Elemente holen
const abholAdresse = document.getElementById("abholAdresse");
const radios = document.getElementsByName("uebergabe");

// Für jedes Radio-Button eine Änderung überwachen
radios.forEach(radio => {
    radio.addEventListener("change", function() {
        if (this.value === "abholung") {
            abholAdresse.style.display = "block";
        } else {
            abholAdresse.style.display = "none";
        }
    });
});

