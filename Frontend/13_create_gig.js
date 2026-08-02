const gigForm = document.getElementById("gigForm");

gigForm.addEventListener("submit", createGig);

async function createGig(e) {

    e.preventDefault();

    const title = document.getElementById("title").value.trim();

    const category = document.getElementById("category").value;

    const description = document.getElementById("description").value.trim();

    const price = document.getElementById("price").value;

    const deliveryTime = document.getElementById("deliveryTime").value;

    const message = document.getElementById("message");

    if (
        !title ||
        !category ||
        !description ||
        !price ||
        !deliveryTime
    ) {

        message.innerHTML = `
            <div class="alert alert-danger">
                Please fill all fields.
            </div>
        `;

        return;

    }

    const token = localStorage.getItem("token");

    if (!token) {

        alert("Please login first.");

        window.location.href = "4_sign_in.html";

        return;

    }

    try {

        const response = await fetch("http://localhost:5000/api/gigs", {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                Authorization: `Bearer ${token}`

            },

            body: JSON.stringify({

                title,

                category,

                description,

                price,

                deliveryTime

            })

        });

        const data = await response.json();

        if (data.success) {

            message.innerHTML = `
                <div class="alert alert-success">
                    Gig Created Successfully.
                </div>
            `;

            setTimeout(() => {

                window.location.href = "10_seller_dashboard.html";

            }, 1500);

        }

        else {

            message.innerHTML = `
                <div class="alert alert-danger">
                    ${data.message}
                </div>
            `;

        }

    }

    catch (error) {

        console.log(error);

        message.innerHTML = `
            <div class="alert alert-danger">
                Server Error
            </div>
        `;

    }

}