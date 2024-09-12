function openModal(img) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    modalImage.src = img.src;
    
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('myModal');
    
    modal.style.display = 'none';
}