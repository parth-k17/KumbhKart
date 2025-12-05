// Selecting the Login Email Input
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

// Applying the logic you provided
if (emailInput) {
    emailInput.addEventListener("input", () => {
        // If it includes '@', clear error. If not, show "Invalid Email"
        emailError.textContent = 
            emailInput.value.includes("@") ? "" : "Invalid Email";
            
        // Optional: Change border color for better visual feedback
        if (!emailInput.value.includes("@") && emailInput.value.length > 0) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "#eee"; // Reset to original color
        }
    });
}
