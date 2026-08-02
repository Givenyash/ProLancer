const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", loginUser);

async function loginUser(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (!email || !password) {

        message.innerHTML = `
            <div style="color:red;margin-bottom:15px;">
                Please fill all fields.
            </div>
        `;

        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/users/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        console.log(data);

        if (data.success) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            localStorage.setItem("userId", data.user._id);
            localStorage.setItem("userName", data.user.name);
            localStorage.setItem("role", data.user.role);

            if (data.user.role === "seller") {
                window.location.href = "10_seller_dashboard.html";
            } else {
                window.location.href = "12_client_dashboard.html";
            }
        }

        else {

            message.innerHTML = `
                <div style="color:red;margin-bottom:15px;">
                    ${data.message}
                </div>
            `;

        }

    }

    catch (error) {

        console.log(error);

        message.innerHTML = `
            <div style="color:red;margin-bottom:15px;">
                Server Error
            </div>
        `;

    }

}