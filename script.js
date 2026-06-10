if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./20260106_sw.js');
}

// Czas
let czas108 = localStorage.getItem("czas108") || 0;

// Dodawanie 1 punktu co 5 sekund
setInterval(() => {
    czas108++;
    localStorage.setItem("czas108", czas108);
    console.log("Czas:", czas108);
}, 1000);
