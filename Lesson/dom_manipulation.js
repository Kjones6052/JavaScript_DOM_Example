// JavaScript functions for DOM Manipulation example

function updateParagraph() {
    const paragraph = document.getElementById("message");

    paragraph.innerHTML = "Updated paragraph content";

    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "This is a new paragraph.";

    document.getElementById("container").appendChild(newParagraph);
}