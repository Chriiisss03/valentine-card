function changeMessage() {
    let newMessage = prompt("Enter your custom Valentine message:");
    if (newMessage) {
        document.getElementById("valentineMessage").textContent = newMessage;
    }
}
