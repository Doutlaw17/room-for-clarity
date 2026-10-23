function openModal(id) {
    document.querySelectorAll('.card-modal.active').forEach(el => {
        if (el.id !== id) el.classList.remove('active');
    })
    document.getElementById(id).classList.add('active')
}

document.addEventListener('keydown',(e)=> {
    if (e.key === 'Escape') {
        document.querySelectorAll('.card-modal.active').forEach(Modal => {
         Modal.classList.remove('active');   
        });
    }
});