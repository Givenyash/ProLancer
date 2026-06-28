const checkbox = document.getElementById("agree");

function goBack(){
    window.location.href="7_seller_dos.html";
}

function goNext(){
    if(!checkbox.checked){
        alert("Please accept the policies before continuing.");
        return;
    }
    window.location.href="9_create_seller_profile.html";
}