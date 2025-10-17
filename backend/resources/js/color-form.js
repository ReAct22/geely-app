import namer from "color-namer";

document.addEventListener("DOMContentLoaded", () => {
    const colorPicker = document.getElementById("colorPicker");
    const colorCode = document.getElementById("colorCode");
    const colorName = document.getElementById("colorName");

    if (colorPicker && colorCode) {
        colorPicker.addEventListener("input", function (e) {
            const hexValue = e.target.value;
            colorCode.value = hexValue;

            const result = namer(hexValue);
            const name = result.html[0].name; // ambil nama paling cocok
            console.log(name);

            // kalau mau isi otomatis ke input Color Name:
            if (colorName) {
                colorName.value = name;
            }
        });
    }
});
