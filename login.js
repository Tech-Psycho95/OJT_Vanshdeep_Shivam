const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("Email")?.value;
        const password = document.getElementById("password")?.value;

        const correctEmail = "abc_test@gmail.com";
        const correctPassword = "admin4";

        if (email === correctEmail && password === correctPassword) {
            alert("Login successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password!");
        }
    });
}

const googleBtn = document.getElementById("google-signin-btn");

if (googleBtn) {
    googleBtn.addEventListener("click", () => {
        alert("Google Sign-In clicked!");
    });
}
