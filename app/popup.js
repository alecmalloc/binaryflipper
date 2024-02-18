document.getElementById('convertBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('inputValue').value;
    let result = '';

    // Check if the input is binary
    if (/^[01]+$/.test(inputValue)) {
        result = `Decimal: ${parseInt(inputValue, 2)}`;
    } else if (/^\d+$/.test(inputValue)) { 
	// Check if the input is decimal
        result = `Binary: ${parseInt(inputValue).toString(2)}`;
    } else {
        result = "Please enter a binary or decimal number.";
    }

    document.getElementById('result').textContent = result;
});