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

    data.orders.forEach(order => {

        div.innerHTML += `

<div class="card p-3 mb-3">

<h4>${order.gigId.title}</h4>

<p>Buyer : ${order.buyerId.name}</p>

<p>Email : ${order.buyerId.email}</p>

<p>₹${order.price}</p>

<select onchange="changeStatus('${order._id}',this.value)" class="form-select">

<option ${order.status == "Pending" ? "selected" : ""}>Pending</option>

<option ${order.status == "In Progress" ? "selected" : ""}>In Progress</option>

<option ${order.status == "Completed" ? "selected" : ""}>Completed</option>

<option ${order.status == "Cancelled" ? "selected" : ""}>Cancelled</option>

</select>

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