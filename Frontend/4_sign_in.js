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

            // We'll store everything here in the next step

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