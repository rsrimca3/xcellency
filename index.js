
function side_open() {
    document.getElementById("appsidemenudiv").style.display = "block";
    document.getElementById("menubar").style.display = "none";
    document.getElementById("menuclose").style.display = "block";

}

function side_close() {
    document.getElementById("appsidemenudiv").style.display = "none";
    document.getElementById("menubar").style.display = "block";
    document.getElementById("menuclose").style.display = "none";
}


function onSideMenu() {

    console.log(document.getElementById("appsidemenudiv").style.display
    )
    if (document.getElementById("appsidemenudiv").style?.display == 'block') {
        side_close()
    } else {
        side_open()
    }
}

function onHomeClick() {
    window.location.href = "index.html";
}

function NavigatePage(pageName) {

    var page = pageName.toLowerCase();
    switch (page) {
        case "aboutus":
            window.location.href = "aboutus.html";
            break;
        case "service":
            window.location.href = "service.html";
            break;
        case "thesis":
            window.location.href = "thesis.html";
            break;      


        default:
            window.location.href = "index.html";
            break;
    }
}


function onModelPopup(content) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function onClosePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}