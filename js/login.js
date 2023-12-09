const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});


let apiUser = "http://localhost:3000/user";
//login
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");
// get user
const getUser = async () => {
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
};

// login
bntLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value == "" || password.value == "") {
        alert("Please enter your username and password");
    } else {
        getUser().then((data) => {
            const user = data.find(
                (user) =>
                    user.username == username.value && user.password == password.value
            );
            if (user) {
                alert("Login success");
                window.location.href = "./index.html";
            } else {
                alert("Login failed");
            }
        });
    }
});

const newusername = document.querySelector(".input-signup-username");
const newemail = document.querySelector(".input-signup-email");
const newpassword = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");
// signup
bntSignup.addEventListener("click", (e) => {
    e.preventDefault();
    if (newusername.value == "" || newpassword.value == "" || newemail.value == "") {
        alert("Please enter your username and password");
    } else {
        alert("Sign Up Success");
        const user = {
            username: newusername.value,
            password: newpassword.value,
            email: newemail.value,
        };
        fetch(apiUser, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
});