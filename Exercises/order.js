document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let item1 = document.getElementById("item1").value;
    let price1 = parseFloat(document.getElementById("price1").value);
    let item2 = document.getElementById("item2").value;
    let price2 = parseFloat(document.getElementById("price2").value);
    let item3 = document.getElementById("item3").value;
    let price3 = parseFloat(document.getElementById("price3").value);
    let discount = parseFloat(document.getElementById("discount").value) || 0;

    let subtotal = (price1 + price2 + price3).toFixed(2);


    let total;
    if (discount > 0) {
        total = (subtotal - discount).toFixed(2);
    } else {
        total = subtotal;
    }

    document.getElementById("orderInfo").innerHTML = `<strong>Order Summary:</strong>
                                                        <strong>Item 1:</strong> ${item1}, <strong>Price 1:</strong> ${price1}<br>
                                                        <strong>Item 2:</strong> ${item2}, <strong>Price 2:</strong> ${price2}<br>
                                                        <strong>Item 3:</strong> ${item3}, <strong>Price 3:</strong> ${price3}<br>
                                                        <strong>Subtotal:</strong> ${subtotal}<br>
                                                        <strong>Discount:</strong> ${discount}<br>
                                                        <strong>Total:</strong> ${total}`
});