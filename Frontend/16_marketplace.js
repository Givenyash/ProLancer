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

            // Check if category came from Landing Page
            const category = localStorage.getItem("category");

            if (category) {

                allGigs = allGigs.filter(

                    gig => gig.category === category

                );

                localStorage.removeItem("category");

            }

            const keyword = localStorage.getItem("searchKeyword");

            if (keyword) {

                const search = keyword.toLowerCase();

                allGigs = allGigs.filter(gig =>

                    gig.title.toLowerCase().includes(search) ||

                    gig.category.toLowerCase().includes(search) ||

                    gig.description.toLowerCase().includes(search) ||

                    gig.sellerId.name.toLowerCase().includes(search) ||

                    gig.sellerId.email.toLowerCase().includes(search)

                );

                localStorage.removeItem("searchKeyword");

            }

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

function searchGig() {

    const keyword = document
        .getElementById("searchGig")
        .value
        .toLowerCase();

    const filtered = allGigs.filter(gig =>

        gig.title.toLowerCase().includes(keyword) ||

        gig.category.toLowerCase().includes(keyword) ||

        gig.description.toLowerCase().includes(keyword) ||

        gig.sellerId.name.toLowerCase().includes(keyword) ||

        gig.sellerId.email.toLowerCase().includes(keyword)

    );

    displayGigs(filtered);

}

document.getElementById("searchGig").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        searchGig();

    }

});