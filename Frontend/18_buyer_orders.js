const token = localStorage.getItem("token");

if (!token) {

    alert("Please Login First");

    window.location.href = "4_sign_in.html";

}

loadOrders();

async function loadOrders() {

    try {

        const response = await fetch(

            "http://localhost:5000/api/orders/buyer",

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        const data = await response.json();

        const container = document.getElementById("ordersContainer");

        container.innerHTML = "";

        if (!data.success) {

            container.innerHTML = `

                <div class="alert alert-danger">

                    ${data.message}

                </div>

            `;

            return;

        }

        if (data.orders.length === 0) {

            container.innerHTML = `

                <div class="alert alert-warning text-center">

                    No Orders Yet

                </div>

            `;

            return;

        }

        data.orders.forEach(order => {

            container.innerHTML += `

            <div class="card shadow p-3 mb-3">

                <h4>${order.gigId.title}</h4>

                <hr>

                <p>

                    <strong>Seller :</strong>

                    ${order.sellerId.name}

                </p>

                <p>

                    <strong>Email :</strong>

                    ${order.sellerId.email}

                </p>

                <p>

                    <strong>Price :</strong>

                    ₹${order.price}

                </p>

                <p>

                   <strong>Status :</strong>

                   <span class="badge ${order.status === "Pending"
                        ? "bg-warning text-dark"
                        : order.status === "In Progress"
                        ? "bg-primary"
                        : order.status === "Completed"
                            ? "bg-success"
                            : "bg-danger"
                        }">

                        ${order.status}
                   </span>
               </p>
         </div> `;
        });
    }

    catch (error) {

        console.log(error);

    }

}