function checkInput(){
    const inputField = document.getElementById("passwordInput");
    const checkBtn = document.getElementById("checkButton");

    if(inputField.value !== ""){
        checkBtn.disabled = false;
    }
    else{
        checkBtn.disabled = true;
    }    
}
function checkPasswordStrength(){
    const password = document.getElementById("passwordInput").value;
    const displaystrength = document.getElementById("display-strength")
    const minLength = 8;
    const hasUppercase = /[A-Z]/ .test(password);
    const hasLowercase = /[a-z]/ .test(password);
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/ .test(password)
    const loader = document.getElementById("loader"); 
    const facts = document.getElementById("security-facts")

    
    loader.style.display = "block";
    displaystrength.textContent = "";

    let feedback = "Your password is missing:";
    let hasMissingCriteria = false;

    if (!hasUppercase) {
        feedback += " an uppercase letter,";
        hasMissingCriteria = true;
    }

    if (!hasNumber) {
        feedback += " a number,";
        hasMissingCriteria = true;
    }

    if (password.length < minLength) {
        feedback += " at least " + minLength + " characters,";
        hasMissingCriteria = true;
    }

    if (!hasLowercase) {
        feedback += " a lowercase letter,";
        hasMissingCriteria = true;
    }

    if (!specialCharacter) {
        feedback += " a special character,";
        hasMissingCriteria = true;
    }

    setTimeout(() => { 
        // Calculate the strength of the password
        let strength = 0;
        if (password.length >= minLength) {
            strength += 20;
        }
        if (hasLowercase) {
            strength += 20;
        }
        if (hasUppercase) {
            strength += 20;
        }
        if (specialCharacter) {
            strength += 20;
        }
        if (hasNumber) {
            strength += 20;
        }

        console.log(strength);

        // Clear previous score
        displaystrength.textContent = "";

        // Hide loader
        loader.style.display = "none";

        if (hasMissingCriteria) {
            feedback = feedback.slice(0, -1) + ".";
            displaystrength.textContent = feedback + " Your password score is: " + strength;
        } else {
            displaystrength.textContent = "Your password meets all criteria! Your password score is: " + strength;
        }

        // Display the new score
        displaystrength.style.display = "block";
        facts.style.display = "block";
        
    }, 2000); 
}
     


