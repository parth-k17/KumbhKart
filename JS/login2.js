
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

if (emailInput) {
    emailInput.addEventListener("input", () => {
      
        emailError.textContent = 
            emailInput.value.includes("@") ? "" : "Invalid Email";
            
        
        if (!emailInput.value.includes("@") && emailInput.value.length > 0) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.borderColor = "#eee"; 
        }
    });
}

