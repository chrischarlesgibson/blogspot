const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("clicked");
  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    console.log(email);
    console.log(password);
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage page
      // document.location.replace("/");
      console.log("successfully logged in");
    } else {
      alert("Login failed.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("clicked");

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("sign-up failed.");
    }
  }
};

document.querySelector("#loginBtn").addEventListener("click", loginFormHandler);

document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);
