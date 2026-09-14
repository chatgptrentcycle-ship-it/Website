const button = document.getElementById('colorButton');

const colors = ['#3498db', '#e74c3c', '#0ceb69', '#f1c40f', '#b005f3'];
let currentColorIndex = 0;

button.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
