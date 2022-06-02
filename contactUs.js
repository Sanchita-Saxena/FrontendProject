// function enableSubmitButton() {
//     var bt = document.getElementById('Submit');
//     if (nameValidation() & emailIdValidation() & phoneValidation()) {
//         bt.removeAttribute('disabled');
//         // bt.disabled = false;
//     }
//     else {
//         bt.setAttribute('disabled', 'disabled');
//         // bt.disabled = true;
//     }
// }


function enableSubmitButton() {
    var enable = false;
    if ($("#fullname").val() != null & $("#fullname").val() != "" & nameValidation() == true
    & $("#email").val() != null & $("#email").val() != "" & emailIdValidation() == true
    & $("#phone").val() != null & $("#phone").val() != "" & phoneValidation() == true
    & $("#message").val() != null & $("#message").val() != "") {
        enable = true;
    }
    var bt = document.getElementById("Submit");
    console.log(bt);
    if (enable == true) {
        // document.getElementById("Submit").disabled=false;
        bt.removeAttribute("disabled");
    }
    if (enable == false) { 
        // document.getElementById("Submit").disabled=true;
        bt.setAttribute("disabled", "disabled");
    }
}

function Submit() {
    confirm("Are you sure about submitting the form?");
}

function emailIdValidation() {
    var emailRegx = /^([a-zA-Z0-9\-])+\@([a-zA-Z0-9\-])+\.([a-zA-Z])+$/;
    if ($("#email").val() == null || $("#email").val() == "" || !emailRegx.test($("#email").val())) {
        $("#error_mail").show();
        $("#error_mail").html("<strong>Please enter a valid Email Id</strong>");
        return false;
    }
    else {
        $("#error_mail").hide();
        return true;
    }
}

function nameValidation() {
    var nameRegx = /^([a-zA-Z ])+$/;
    if ($("#fullname").val() == null || $("#fullname").val() == "" || !nameRegx.test($("#fullname").val())) {
        $("#error_fullname").show();
        $("#error_fullname").html("<strong>Please Enter a valid Name</strong>");
        return false;
    }
    else {
        $("#error_fullname").hide();
        return true;
    }
}

function phoneValidation() {
    var phoneRegx = /^([0-9]{10})+$/;
    if ($("#phone").val() == null || $("#phone").val() == "" || !phoneRegx.test($("#phone").val())) {
        $("#error_phone").show();
        $("#error_phone").html("<strong>Please Enter a valid 10-digit Phone number</strong>");
        return false;
    }
    else {
        $("#error_phone").hide();
        return true;
    }
}