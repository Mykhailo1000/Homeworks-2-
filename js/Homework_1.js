const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-img");
const close = document.querySelector(".close");

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (event) => {
        modal.style.display = 'block';
        modalImage.src = event.target.src;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
