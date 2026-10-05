function checkTransaction() {

    let amount = document.getElementById("amount").value;
    let location = document.getElementById("location").value;

    if (amount === "" || location === "") {
        document.getElementById("result").innerHTML =
            "Please enter all transaction details.";
        return;
    }

    // Temporary demonstration logic
    if (Number(amount) > 50000) {

        document.getElementById("result").innerHTML =
            "⚠️ Transaction requires further verification.";

    } else {

        document.getElementById("result").innerHTML =
            "✓ Transaction appears legitimate.";
    }
}
