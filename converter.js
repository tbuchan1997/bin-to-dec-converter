

let binary = document.getElementById("binary");

binary.addEventListener("input", () => {
    let binaryValue = binary.value;
    if (/^[01]*$/.test(binaryValue)) { // Check if input is a valid binary number
        let decimalValue = parseInt(binaryValue, 2);
        document.getElementById("decimal").value = decimalValue;
    } else {
        document.getElementById("decimal").value = "Not a valid binary input";
    }
});