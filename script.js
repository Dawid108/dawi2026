if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./20260106_sw.js');
}

let czas108 = localStorage.getItem("czas108") || 0;

setInterval(() => {
    czas108 += 10;
    localStorage.setItem("czas108", czas108);
}, 10000);

let id108 = localStorage.getItem("id108");

if (
    !id108 ||
    isNaN(id108)
) {
    id108 =
    Math.floor(Math.random() * 9999) + 1;

    localStorage.setItem(
        "id108",
        id108
    );

    console.log("Nowe id108:", id108);
} else {
    console.log("Istniejące id108:", id108);
}
