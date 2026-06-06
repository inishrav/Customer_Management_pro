let editIndex = -1;

const form = document.getElementById("paymentForm");
const searchBox = document.getElementById("searchBox");

const dateEl = document.getElementById("paymentDate");
const nameEl = document.getElementById("customerName");
const modeEl = document.getElementById("paymentMode");
const amountEl = document.getElementById("amountGiven");

const body = document.getElementById("paymentBody");
const totalPaidEl = document.getElementById("totalPaid");

/* SAVE PAYMENT */

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let payment = {
        paymentDate: dateEl.value,
        customerName: nameEl.value,
        paymentMode: modeEl.value,
        amountGiven: Number(amountEl.value)
    };

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    if (editIndex === -1) {

        payments.push(payment);

    } else {

        payments[editIndex] = payment;

        editIndex = -1;

        document.querySelector(
            "#paymentForm button[type='submit']"
        ).innerText = "Save Payment";
    }

    localStorage.setItem(
        "payments",
        JSON.stringify(payments)
    );

    form.reset();

    loadPayments();

    alert("Payment Saved Successfully");
});

/* LOAD TABLE */

function loadPayments(data = null) {

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    let list = data || payments;

    body.innerHTML = "";

    let totalPaid = 0;

    list.forEach((payment, index) => {

        totalPaid += Number(payment.amountGiven);

        body.innerHTML += `
        <tr>
            <td>${payment.paymentDate}</td>
            <td>${payment.customerName}</td>
            <td>${payment.paymentMode}</td>
            <td>${payment.amountGiven}</td>
            <td>
                <button onclick="editPayment(${index})">
                    Edit
                </button>

                <button onclick="deletePayment(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });

    totalPaidEl.innerText =
        totalPaid.toFixed(2);
}

/* EDIT */

function editPayment(index) {

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    let payment = payments[index];

    dateEl.value = payment.paymentDate;
    nameEl.value = payment.customerName;
    modeEl.value = payment.paymentMode;
    amountEl.value = payment.amountGiven;

    editIndex = index;

    document.querySelector(
        "#paymentForm button[type='submit']"
    ).innerText = "Update Payment";
}

/* DELETE */

function deletePayment(index) {

    if (!confirm("Delete this payment?")) {
        return;
    }

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    payments.splice(index, 1);

    localStorage.setItem(
        "payments",
        JSON.stringify(payments)
    );

    loadPayments();
}

/* SEARCH */

searchBox.addEventListener("input", function () {

    let value =
        this.value.toLowerCase();

    let payments =
        JSON.parse(localStorage.getItem("payments")) || [];

    let filtered = payments.filter(payment =>
        payment.customerName
            .toLowerCase()
            .includes(value)
    );

    loadPayments(filtered);
});

/* INITIAL LOAD */

loadPayments();