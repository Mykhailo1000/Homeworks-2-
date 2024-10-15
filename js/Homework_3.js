
const images = document.querySelectorAll('.lazy-load');

const loadImage = (image) => {
    const src = image.getAttribute('data-src');
    image.src = src; 
    image.onload = () => {
        image.classList.add('loaded'); 
    };
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target); 
            observer.unobserve(entry.target); 
        }
    });
}, options);

images.forEach(image => {
    observer.observe(image);
});
