const token = localStorage.getItem("token");

if (!token) {

    alert("Please Login First");

    window.location.href = "4_sign_in.html";

}

loadGigs();

async function loadGigs() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/gigs/my",
            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }
        );

        const data = await response.json();

        const table = document.getElementById("gigTable");

        table.innerHTML = "";

        data.gigs.forEach(gig => {

            table.innerHTML += `

            <tr>

                <td>${gig.title}</td>

                <td>${gig.category}</td>

                <td>₹${gig.price}</td>

                <td>${gig.deliveryTime}</td>

                <td>

                    <button
                        class="btn btn-warning btn-sm"
                        onclick="editGig('${gig._id}')"
                    >

                        Edit

                    </button>

                    <button
                        class="btn btn-danger btn-sm"
                        onclick="deleteGig('${gig._id}')"
                    >

                        Delete

                    </button>

                </td>

            </tr>

            `;

        });

    }

    catch (error) {

        console.log(error);

    }

}

async function deleteGig(id) {

    if (!confirm("Delete this Gig?")) return;

    try {

        const response = await fetch(

            `http://localhost:5000/api/gigs/${id}`,

            {

                method: "DELETE",

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        const data = await response.json();

        alert(data.message);

        loadGigs();

    }

    catch (error) {

        console.log(error);

    }

}

function editGig(id) {

    localStorage.setItem("gigId", id);

    window.location.href = "15_edit_gig.html";

}