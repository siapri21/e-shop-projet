import { AuthService } from  "../services/aut.services.js";

export async function submitCallback(e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    await AuthService.login(emailInput.value, passwordInput.value);
    const form = document.getElementById("login-form");

    form.reset();
}