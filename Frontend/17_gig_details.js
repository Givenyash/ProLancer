const gigId = localStorage.getItem("gigId");

if (!gigId) {

    alert("No Gig Selected");

    window.location.href = "16_marketplace.html";

}

loadGig();

async function loadGig() {

    try {

        const response = await fetch(

            `http://localhost:5000/api/gigs/${gigId}`

        );

        const data = await response.json();

        if (!data.success) {

            document.getElementById("gigDetails").innerHTML = `
                <h3 class="text-danger text-center">
                    Gig Not Found
                </h3>
            `;

            return;

        }

        const gig = data.gig;

        document.getElementById("gigDetails").innerHTML = `

            <h2>${gig.title}</h2>

            <hr>

            <h5>Category</h5>

            <p>${gig.category}</p>

            <h5>Description</h5>

            <p>${gig.description}</p>

            <h5>Price</h5>

            <p>₹${gig.price}</p>

            <h5>Delivery Time</h5>

            <p>${gig.deliveryTime}</p>

            <button
                class="btn btn-success"
                onclick="hireSeller()"
            >
                Hire Seller
            </button>

        `;

    }

    catch (error) {

        console.log(error);

    }

}

async function hireSeller() {

    const token = localStorage.getItem("token");

    if (!token) {

        alert("Please Login First");

        window.location.href = "4_sign_in.html";

        return;

    }

    try {

        const response = await fetch(

            "http://localhost:5000/api/orders",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`

                },

                body: JSON.stringify({

                    gigId

                })

            }

        );

        const data = await response.json();

        alert(data.message);

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }

}