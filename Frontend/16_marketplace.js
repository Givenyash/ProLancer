let allGigs = [];

loadGigs();

async function loadGigs() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/gigs"
        );

        const data = await response.json();

        if (data.success) {

            allGigs = data.gigs;

            displayGigs(allGigs);

        }

    }

    catch (error) {

        console.log(error);

    }

}

function displayGigs(gigs) {

    const container = document.getElementById("gigContainer");

    container.innerHTML = "";

    if (gigs.length === 0) {

        container.innerHTML = `

            <div class="col-12">

                <div class="alert alert-warning text-center">

                    No gigs found.

                </div>

            </div>

        `;

        return;

    }

    gigs.forEach(gig => {

        container.innerHTML += `

            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow-sm">

                    <div class="card-body">

                        <h5>${gig.title}</h5>

                        <p>

                            <strong>Seller:</strong>

                            ${gig.sellerId.name}

                        </p>

                        <p>

                            <strong>Category:</strong>

                            ${gig.category}

                        </p>

                        <p>

                            <strong>Price:</strong>

                            ₹${gig.price}

                        </p>

                        <p>

                            <strong>Delivery:</strong>

                            ${gig.deliveryTime}

                        </p>

                        <button
                            class="btn btn-success w-100"
                            onclick="viewGig('${gig._id}')">

                            View Details

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}

function viewGig(id) {

    localStorage.setItem("gigId", id);

    window.location.href = "17_gig_details.html";

}