function alertFunction() {
    alert("Hello, world!");
    document.getElementById("text").style.fontSize = "24pt";
}

function radioButton() {
    alert("Radio Button Changed!");
    var x = document.querySelector('input[name="radioButton"]:checked');
    if(x.id == "fancy") {
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    }
    else if(x.id == "boring") {
        document.getElementById("text").style.removeProperty("font-weight");
        document.getElementById("text").style.removeProperty("color");
        document.getElementById("text").style.removeProperty("text-decoration");
    }
}

function mooButton() {
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var arr = str.split("");
    var i;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == ".") {
            arr[i] = "Moo.";
        }
    }
    str = arr.join("");
    document.getElementById("text").value = str;
}