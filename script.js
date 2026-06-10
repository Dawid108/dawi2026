if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./20260106_sw.js');
}

// Dodawanie 1 punktu co 5 sekund
setInterval(() => {
    dawid108++;
    localStorage.setItem("dawid108", dawid108);
}, 5000);