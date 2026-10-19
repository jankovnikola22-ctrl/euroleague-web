
const form = document.getElementById("form");
const firstnameInput = document.getElementById("firstname-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const repeatPasswordInput = document.getElementById("repeat-password-input");
const errorMessage = document.getElementById("error-message");

if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        errorMessage.textContent = "";

        const firstname = firstnameInput?.value.trim() || "";
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput?.value;

        const errors = [];

        if (firstnameInput && !firstname) {
            errors.push("First name is required");
        }

        if (!email) {
            errors.push("Email is required");
        }

        if (!password) {
            errors.push("Password is required");
        } else if (password.length < 8) {
            errors.push("Password must be at least 8 characters");
        }

        if (firstnameInput && password !== repeatPassword) {
            errors.push("Passwords do not match");
        }

        if (errors.length > 0) {
            errorMessage.textContent = errors.join(". ");
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        try {
            if (firstnameInput) {
                const { data, error } = await supabaseClient.auth.signUp({
                    email: email,
                    password: password,
                    options: {
                        data: {
                            first_name: firstname
                        }
                    }
                });

                if (error) {
                    throw error;
                }

                if (data.session) {
                    window.location.href = "pages/home.html";
                } else {
                    errorMessage.textContent =
                        "Registration successful! Check your email to confirm your account, then log in.";
                }
            } else {
                const { error } = await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) {
                    throw error;
                }

                window.location.href = "home.html";
            }
        } catch (error) {
            errorMessage.textContent = error.message;
        } finally {
            submitButton.disabled = false;
        }
    });
}
