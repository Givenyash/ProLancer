const checkbox = document.getElementById("agree");

function goBack(){
    window.location.href = "6_profile_overview.html";
}

function goNext(){
    if (!checkbox.checked) {
        alert("Please read and accept the guidelines before continuing.");
        return;
    }

    window.location.href = "8_seller_donts.html";
}