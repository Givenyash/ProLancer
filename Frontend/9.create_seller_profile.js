function finishSetup(){
    let name = document.getElementById("fullName").value;
    let title = document.getElementById("title").value;
    let country = document.getElementById("country").value;
    let skills = document.getElementById("skills").value;
    let bio = document.getElementById("bio").value;

    if(name=="" || title=="" || country=="" || skills=="" || bio==""){
        alert("Please fill all the required fields.");
        return;
    }
    alert("🎉 Congratulations!\n\nYour seller profile has been created successfully.\n\nYou can now start offering your services on ProLancer.");
}