function getTextElementValueById(elementId) {
    const phoneSubtotalElement = document.getElementById(elementId);
    const phoneSubtotalString = phoneSubtotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneSubtotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotals = document.getElementById(elementId);
    subTotals.innerText = value;
}

function calculateSubTotal() {
    // Calculate total
    const currentPhoneTotal = getTextElementValueById("phone-price");
    const currentCaseTotal = getTextElementValueById("case-total");
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById("sub-total", currentSubTotal);

    // Calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById("tax-total", taxAmount);
    
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById("final-total", finalAmount);
}