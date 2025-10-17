import './bootstrap';

import namer from "color-namer";

document.addEventListener("DOMContentLoaded", () => {
    const picker = document.getElementById("picker");
    const output = document.getElementById("colorName");

    if (picker && output) {
        function updateName(hex) {
            const result = namer(hex);
            output.textContent = result.html[0].name;
        }

        picker.addEventListener("input", (e) => {
            updateName(e.target.value);
        });

        // init
        updateName(picker.value);
    }
});

