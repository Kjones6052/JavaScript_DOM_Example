// JavaScript functions for HTML Events Example

// For 'onclick' example
function handleButtonClick() {
    alert("Button clicked!");
}

// For 'onmouseover' example
function handleMouseOver() {
    console.log("Mouse over element");
}


// For 'onmouseout' example
function handleMouseOut() {
    console.log("Mouse out of element");
}


// For 'onkeydown' example
function handleKeyDown(event) {
    console.log("Key pressed:", event.key);
}


// For 'onsubmit' example
function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log("Form submitted with username:", username);
}


// For 'onchange' example
function handleChange(event) {
    console.log("Input value changed to", event.target.value);
}


// For 'onfocus' example
function handleFocus() {
    console.log("Input element focused");
}
