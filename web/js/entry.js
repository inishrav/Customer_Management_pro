document.getElementById("entryForm").addEventListener("submit", function(e){

    e.preventDefault();

    let date = document.getElementById("date").value;
    let grossWeight = parseFloat(document.getElementById("grossWeight").value);
    let netWeight = parseFloat(document.getElementById("netWeight").value);
    let kgRate = parseFloat(document.getElementById("kgRate").value);

    let amount = netWeight * kgRate;

    let entry = {
        date,
        grossWeight,
        netWeight,
        kgRate,
        amount
    };

    let entries =
        JSON.parse(localStorage.getItem("entries")) || [];

    entries.push(entry);

    localStorage.setItem(
        "entries",
        JSON.stringify(entries)
    );

    alert("Entry Saved Successfully");

    document.getElementById("entryForm").reset();

});