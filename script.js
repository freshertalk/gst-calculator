document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const finalAmountInput = document.getElementById('final-amount');
    const discountRateInput = document.getElementById('discount-rate');
    const gstRateInput = document.getElementById('gst-rate');
    const discountedFeesSpan = document.getElementById('discounted-fees');
    const originalFeesSpan = document.getElementById('original-fees');
    const gstAmountSpan = document.getElementById('gst-amount');

    calculateBtn.addEventListener('click', function() {
        const finalAmount = parseFloat(finalAmountInput.value);
        const discountRate = parseFloat(discountRateInput.value);
        const gstRate = parseFloat(gstRateInput.value);

        // Validate inputs
        if (isNaN(finalAmount) || isNaN(discountRate) || isNaN(gstRate) || finalAmount <= 0 || discountRate < 0 || gstRate < 0) {
            alert('Please enter valid positive numbers for Final Amount, Discount Rate, and GST Rate.');
            return;
        }

        // Calculate discounted final amount
        const discountedFinalAmount = finalAmount * (1 - discountRate / 100);

        // Calculate original fees and GST amount from discounted amount
        const originalFees = discountedFinalAmount / (1 + gstRate / 100);
        const gstAmount = discountedFinalAmount - originalFees;

        // Display results with 2 decimal places
        originalFeesSpan.textContent = originalFees.toFixed(2);
        gstAmountSpan.textContent = gstAmount.toFixed(2);

        // Display discounted final amount
        const totalDiscountedAmount = originalFees + gstAmount;
        discountedFeesSpan.textContent = totalDiscountedAmount.toFixed(2);
    });
});