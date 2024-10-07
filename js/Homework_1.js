document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const imgSrc = event.target.src;
            modalImg.src = imgSrc;
            modal.style.display = 'flex'; 
        }
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === closeBtn) {
            modal.style.display = 'none';
        }
    });
});
