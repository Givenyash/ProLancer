function goToRegister(role) {

    localStorage.setItem("role", role);

    window.location.href = "4.1_registration.html";

}

function goToSeller() {

    goToRegister("seller");

}

function goToClient() {

    goToRegister("client");

}