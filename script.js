document.addEventListener("DOMContentLoaded", function() {

    const ageCalculatorForm = document.getElementById("ageCalculatorForm");
    const dobInput = document.getElementById("dob");
    const resultDiv = document.getElementById("result");

    ageCalculatorForm.addEventListener("click", function(e) {

        const dob = new Date(dobInput.value);
        const today = new Date();

        if (isNaN(dob)) {
            resultDiv.innerHTML = "Please enter a valid date of birth.";
        } else {
            const age = today.getFullYear() - dob.getFullYear();
            const monthDiff = today.getMonth() - dob.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            
            resultDiv.innerHTML = `Your age is ${age} years.`;
        }
    });
});
