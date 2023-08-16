// const h2 = document.createElement('h2');
// h2.textContent = 'This content added by JavaScript';

// document.querySelector('body').appendChild(h2);

const button = document.getElementById("button")
button.addEventListener(
    "mouseover",
    (event) => {
        event.target.style.color = "#1B9B96";
        setTimeout(() => {
            event.target.style.color = "";
        }, 700);
    },
    false,
);
