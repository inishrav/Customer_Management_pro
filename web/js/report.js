let entries =
JSON.parse(localStorage.getItem("entries")) || [];

let body =
document.getElementById("reportBody");

let total = 0;

entries.forEach(entry => {

    total += entry.amount;

    body.innerHTML += `
    <tr>
        <td>${entry.date}</td>
        <td>${entry.grossWeight}</td>
        <td>${entry.netWeight}</td>
        <td>${entry.kgRate}</td>
        <td>${entry.amount}</td>
    </tr>
    `;
});

document.getElementById("overallTotal")
.innerText = total.toFixed(2);