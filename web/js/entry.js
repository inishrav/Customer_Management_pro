let form = document.getElementById("entryForm");
let tableBody = document.getElementById("customerTableBody");
let searchBox = document.getElementById("searchCustomer");

function loadEntries(data = null) {

    let entries =
        JSON.parse(localStorage.getItem("entries")) || [];

    let list = data || entries;

    tableBody.innerHTML = "";

    list.forEach((entry, index) => {

        tableBody.innerHTML += `
        <tr>
            <td>${entry.customerName}</td>
            <td>${entry.date}</td>
            <td>${entry.grossWeight}</td>
            <td>${entry.netWeight}</td>
            <td>${entry.kgRate}</td>
            <td>${entry.amount}</td>
            <td>
                <button onclick="editEntry(${index})">
                    Edit
                </button>

                <button onclick="deleteEntry(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

/* SAVE / UPDATE */

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let customerName =
        document.getElementById("customerName").value;

    let date =
        document.getElementById("date").value;

    let grossWeight =
        parseFloat(document.getElementById("grossWeight").value);

    let netWeight =
        parseFloat(document.getElementById("netWeight").value);

    let kgRate =
        parseFloat(document.getElementById("kgRate").value);

    let amount = netWeight * kgRate;

    let entry = {
        customerName,
        date,
        grossWeight,
        netWeight,
        kgRate,
        amount
    };

    let entries =
        JSON.parse(localStorage.getItem("entries")) || [];

    let editIndex =
        localStorage.getItem("editEntryIndex");

    if (editIndex !== null) {

        entries[editIndex] = entry;

        localStorage.removeItem("editEntryIndex");

        alert("Entry Updated Successfully");

    } else {

        entries.push(entry);

        alert("Entry Saved Successfully");
    }

    localStorage.setItem(
        "entries",
        JSON.stringify(entries)
    );

    form.reset();

    loadEntries();
});

/* EDIT */

function editEntry(index) {

    let entries =
        JSON.parse(localStorage.getItem("entries")) || [];

    let entry = entries[index];

    document.getElementById("customerName").value =
        entry.customerName;

    document.getElementById("date").value =
        entry.date;

    document.getElementById("grossWeight").value =
        entry.grossWeight;

    document.getElementById("netWeight").value =
        entry.netWeight;

    document.getElementById("kgRate").value =
        entry.kgRate;

    localStorage.setItem(
        "editEntryIndex",
        index
    );
}

/* DELETE */

function deleteEntry(index) {

    if (!confirm("Delete this customer record?")) {
        return;
    }

    let entries =
        JSON.parse(localStorage.getItem("entries")) || [];

    entries.splice(index, 1);

    localStorage.setItem(
        "entries",
        JSON.stringify(entries)
    );

    loadEntries();
}

/* SEARCH */

if (searchBox) {

    searchBox.addEventListener("input", function () {

        let value = this.value.toLowerCase();

        let entries =
            JSON.parse(localStorage.getItem("entries")) || [];

        let filtered = entries.filter(entry =>
            entry.customerName
                .toLowerCase()
                .includes(value)
        );

        loadEntries(filtered);
    });
}

/* PAGE LOAD */

window.addEventListener("load", function () {

    loadEntries();
});