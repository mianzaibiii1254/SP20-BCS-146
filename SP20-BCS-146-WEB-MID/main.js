window.onload = function () {
    var clicked = document.getElementById("clickme");
    clicked.onclick = function () {
        console.log("Event binding");
        alert("event binding");
    }

};