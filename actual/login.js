let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-box form');
    const signupForm = document.querySelector('.signup-box form');

    // Function to send form data to the server via AJAX
    async function sendFormData(formData, url) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.text();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Event listener for login form submission
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const email = document.querySelector('.login-box .email').value;
        const password = document.querySelector('.login-box .password').value;

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const data = await sendFormData(formData, '/login');
            console.log('Login successful:', data);
            // You can handle a successful login here (e.g., redirect the user)
        } catch (error) {
            console.error('Login error:', error);
            // Handle login errors (e.g., display an error message)
        }
    });

    // Event listener for signup form submission
    signupForm.addEventListener('submit', async function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const name = document.querySelector('.signup-box .name').value;
        const email = document.querySelector('.signup-box .email').value;
        const password = document.querySelector('.signup-box .password').value;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);

        try {
            const data = await sendFormData(formData, '/signup');
            console.log('Registration successful:', data);
            // You can handle a successful registration here (e.g., redirect the user)
        } catch (error) {
            console.error('Registration error:', error);
            // Handle registration errors (e.g., display an error message)
        }
    });
});
