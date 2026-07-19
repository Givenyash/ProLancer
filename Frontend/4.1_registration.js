const role = localStorage.getItem("role");
const roleText = document.getElementById("roleText");

if (role === "seller") {
  roleText.innerHTML = "Join ProLancer as a Seller";
} else {
  roleText.innerHTML = "Join ProLancer as a Client";
}

if (!role) {
  alert("Please select Seller or Client first.");

  window.location.href = "5_join.html";
}

const form = document.getElementById("registerForm");

form.addEventListener("submit", registerUser);

async function registerUser(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const password = document.getElementById("password").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  const message = document.getElementById("message");

  if (password !== confirmPassword) {
    message.innerHTML = `
        <div class="alert alert-danger">
            Passwords do not match
        </div>
        `;

    return;
  }

  const user = {
    name,

    email,

    password,

    role,
  };

  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      // Save user data in Local Storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("role", data.user.role);

      console.log("Data Saved Successfully");
      console.log(localStorage);

      message.innerHTML = `
        <div class="alert alert-success">
            Registration Successful...
        </div>`;

      setTimeout(() => {
        if (role === "seller") {
          window.location.href = "6_profile_overview.html";
        } else {
          window.location.href = "10_create_client_profile.html";
        }
      }, 1500);
      
    } else {
      message.innerHTML = `
            <div class="alert alert-danger">
                ${data.message}
            </div>
            `;
    }
  } catch (error) {
    message.innerHTML = `
        <div class="alert alert-danger">
            Server Error
        </div>`;
  }
}
