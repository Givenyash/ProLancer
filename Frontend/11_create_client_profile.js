function goBack(){

    window.history.back();

}

function finishSetup(){

    const fullName = document.getElementById("fullName").value.trim();

    const company = document.getElementById("company").value.trim();

    const industry = document.getElementById("industry").value.trim();

    const country = document.getElementById("country").value.trim();

    const about = document.getElementById("about").value.trim();

    if(

        !fullName ||

        !industry ||

        !country ||

        !about

    ){

        alert("Please fill all required fields.");

        return;

    }

    alert("Client Profile Created Successfully!");

    window.location.href="12_client_dashboard.html";

}