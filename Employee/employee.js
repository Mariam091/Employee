function editAbout() {
    document.getElementById('aboutText').contentEditable = true;
}

function saveAbout() {
    document.getElementById('aboutText').contentEditable = false;
}

function editAppDevelopment() {
    document.getElementById('appDevelopmentText').contentEditable = true;
}

function saveAppDevelopment() {
    document.getElementById('appDevelopmentText').contentEditable = false;
}

function editUIUXDesigner() {
    document.getElementById('uiuxDesignerText').contentEditable = true;
}

function saveUIUXDesigner() {
    document.getElementById('uiuxDesignerText').contentEditable = false;
}
function editAPIDevelopment() {
    document.getElementById('apiDevelopmentText').contentEditable = true;
}

function saveAPIDevelopment() {
    document.getElementById('apiDevelopmentText').contentEditable = false;
}

function editWebDevelopment() {
    document.getElementById('webDevelopmentText').contentEditable = true;
}

function saveWebDevelopment() {
    document.getElementById('webDevelopmentText').contentEditable = false;
}


function editProfileImage() {
    document.getElementById('profileImageInput').click();
}

function handleProfileImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}


function editCompanyName() {
    document.getElementById('companyName').contentEditable = true;
}

function saveCompanyName() {
    document.getElementById('companyName').contentEditable = false;
}


function editPhone() {
    var phoneNumberElement = document.getElementById("phoneNumber");
    var phoneInputElement = document.getElementById("phoneInput");

    phoneNumberElement.style.display = "none";
    phoneInputElement.style.display = "inline-block";

    phoneInputElement.value = phoneNumberElement.textContent;
}

function savePhone() {
    var phoneNumberElement = document.getElementById("phoneNumber");
    var phoneInputElement = document.getElementById("phoneInput");

    // Update the phone number display with the new value from the input field
    phoneNumberElement.textContent = phoneInputElement.value;

    // Hide the input field and show the phone number display
    phoneNumberElement.style.display = "inline-block";
    phoneInputElement.style.display = "none";
}



function editField(fieldName) {
        var fieldElement = document.getElementById(fieldName + "Address");
        var fieldInputElement = document.getElementById(fieldName + "Input");

        fieldElement.style.display = "none";
        fieldInputElement.style.display = "inline-block";

        fieldInputElement.value = fieldElement.textContent;
    }

function saveField(fieldName) {
    var fieldElement = document.getElementById(fieldName + "Address");
    var fieldInputElement = document.getElementById(fieldName + "Input");

        // Update the field display with the new value from the input field
        fieldElement.textContent = fieldInputElement.value;

        // Hide the input field and show the field display
        fieldElement.style.display = "inline-block";
        fieldInputElement.style.display = "none";
    }

    function editLocation() {
        var locationElement = document.getElementById("locationAddress");
        var locationInputElement = document.getElementById("locationInput");

        locationElement.style.display = "none";
        locationInputElement.style.display = "inline-block";

        locationInputElement.value = locationElement.textContent;
    }

    function saveLocation() {
        var locationElement = document.getElementById("locationAddress");
        var locationInputElement = document.getElementById("locationInput");

        // Update the location display with the new value from the input field
        locationElement.textContent = locationInputElement.value;

        // Hide the input field and show the location display
        locationElement.style.display = "inline-block";
        locationInputElement.style.display = "none";
    }


     function editDesignerTitle() {
        var designerTitleElement = document.getElementById("designerTitle");
        var designerTitleInputElement = document.getElementById("designerTitleInput");

        designerTitleElement.style.display = "none";
        designerTitleInputElement.style.display = "inline-block";

        designerTitleInputElement.value = designerTitleElement.textContent;
    }

    function saveDesignerTitle() {
        var designerTitleElement = document.getElementById("designerTitle");
        var designerTitleInputElement = document.getElementById("designerTitleInput");

        // Update the designer title display with the new value from the input field
        designerTitleElement.textContent = designerTitleInputElement.value;

        // Hide the input field and show the designer title display
        designerTitleElement.style.display = "inline-block";
        designerTitleInputElement.style.display = "none";
    }


