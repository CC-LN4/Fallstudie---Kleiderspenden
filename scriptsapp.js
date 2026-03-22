document.addEventListener("DOMContentLoaded", function() {
    console.log("Script geladen");

    const abholAdresse = document.getElementById("abholAdresse");
    const radios = document.getElementsByName("uebergabe");

    radios.forEach(radio => {
        radio.addEventListener("change", function() {
            if (this.value === "abholung") {
                abholAdresse.style.display = "block";
            } else {
                abholAdresse.style.display = "none";
            }
        });
    });
});

