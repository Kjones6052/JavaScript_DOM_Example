function clickHandler() {
    alert("Button clicked:");
    document.getElementById("myButton").removeEventListener("click", clickHandler);
    alert("Event listener removed!");
}

document.getElementById("myButton").addEventListener("click", clickHandler);