function binaryToDecimal() {
    let binary = document.getElementById("binary");
    let button = document.getElementById("convert");
    button.addEventListener("click", () => {
        let binaryValue = binary.value;
        if (/^[01]*$/.test(binaryValue)) { // Check if input is a valid binary number
            let decimalValue = parseInt(binaryValue, 2);
            document.getElementById("decimal").value = decimalValue;
        } else {
            document.getElementById("decimal").value = "Not a valid binary input";
        }
    });
}

// Call the function to set up the event listener
