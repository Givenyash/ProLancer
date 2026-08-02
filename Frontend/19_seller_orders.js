const token = localStorage.getItem("token");

if (!token) {
    alert("Please Login First");
    window.location.href = "4_sign_in.html";
}

loadOrders();

async function loadOrders() {

    const response = await fetch(

        "http://localhost:5000/api/orders/seller",

        {

            headers: {

                Authorization: `Bearer ${token}`

            }

        }

    );

    const data = await response.json();

    const div = document.getElementById("orders");

    div.innerHTML = "";

    if (data.orders.length === 0) {

        div.innerHTML = `

        <div class="col-12">

            <div class="card shadow-sm p-5 text-center">

                <h3 class="mb-3">📦 No Orders Yet</h3>

                <p class="text-muted">

                    Buyers haven't purchased your gigs yet.

                </p>

                <a href="13_create_gig.html"
                   class="btn btn-success mt-3">

                    Create New Gig

                </a>

            </div>

        </div>

    `;

        return;

    }

    data.orders.forEach(order => {

        div.innerHTML += `

<div class="col-md-6 mb-4">

    <div class="card shadow-sm h-100">

        <div class="card-body">

            <h4 class="mb-3">${order.gigId.title}</h4>

            <p>
                <strong>Buyer:</strong>
                ${order.buyerId.name}
            </p>

            <p>
                <strong>Email:</strong>
                ${order.buyerId.email}
            </p>

            <p>
                <strong>Price:</strong>
                ₹${order.price}
            </p>

            <label class="fw-bold mb-2">

                Order Status

            </label>

            <select
                onchange="changeStatus('${order._id}',this.value)"
                class="form-select">

                <option ${order.status == "Pending" ? "selected" : ""}>
                    Pending
                </option>

                <option ${order.status == "In Progress" ? "selected" : ""}>
                    In Progress
                </option>

                <option ${order.status == "Completed" ? "selected" : ""}>
                    Completed
                </option>

                <option ${order.status == "Cancelled" ? "selected" : ""}>
                    Cancelled
                </option>

            </select>

        </div>

    </div>

</div>

`;

    });

}

async function changeStatus(id, status) {

    try {

        const response = await fetch(

            `http://localhost:5000/api/orders/${id}`,

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json",

                    Authorization: `Bearer ${token}`

                },

                body: JSON.stringify({ status })

            }

        );

        const data = await response.json();

        if (data.success) {

            alert("Status Updated");

            loadOrders();

        }

        else {

            alert(data.message);

        }

    }

    catch (error) {

        console.log(error);

        alert("Server Error");

    }

}