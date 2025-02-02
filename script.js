document.addEventListener("DOMContentLoaded", function() {
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    document.body.appendChild(heart);
    
    const size = Math.random() * 20 + 10 + "px";
    heart.style.width = size;
    heart.style.height = size;
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
