function lazyLoadImages() {
    const images = document.querySelectorAll('img.lazy-load');
    
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.onload = () => {
                    img.classList.add('loaded');
                };
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(image => {
        observer.observe(image);
    });
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);
