let entries =
JSON.parse(localStorage.getItem("entries")) || [];

let total = 0;

entries.forEach(entry => {
    total += entry.amount;
});

document.getElementById("totalAmount").innerText =
total.toFixed(2);