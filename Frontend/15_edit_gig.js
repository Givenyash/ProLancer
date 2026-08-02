const token = localStorage.getItem("token");
const gigId = localStorage.getItem("gigId");

if (!token) {
    alert("Please Login First");
    window.location.href = "4_sign_in.html";
}

if (!gigId) {
    alert("No Gig Selected");
    window.location.href = "14_manage_gigs.html";
}

const form = document.getElementById("editGigForm");
const message = document.getElementById("message");

loadGig();

async function loadGig() {

    try {

        const response = await fetch(

            `http://localhost:5000/api/gigs/${gigId}`,

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        );

        const data = await response.json();

        if (!data.success) {

            message.innerHTML = `
                <div class="alert alert-danger">
                    ${data.message}
                </div>
            `;

            return;
        }

        document.getElementById("title").value = data.gig.title;
        document.getElementById("category").value = data.gig.category;
        document.getElementById("description").value = data.gig.description;
        document.getElementById("price").value = data.gig.price;
        document.getElementById("deliveryTime").value = data.gig.deliveryTime;

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

form.addEventListener("submit", updateGig);

async function updateGig(e) {

    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value;
    const deliveryTime = document.getElementById("deliveryTime").value;

    try {

        const response = await fetch(

            `http://localhost:5000/api/gigs/${gigId}`,

            {

                method: "PUT",

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

            }

        );

        const data = await response.json();

        if (data.success) {

            alert("Gig Updated Successfully.");

            localStorage.removeItem("gigId");

            window.location.href = "14_manage_gigs.html";

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