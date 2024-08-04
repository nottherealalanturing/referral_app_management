let showModal = document.getElementById('show-modal');
let modalOverlay = document.getElementById('modal-overlay');
let successMessageCard = document.getElementById('success-message-card');

showModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalOverlay.style.display = 'block';
    successMessageCard.style.display = 'block';
    // document.body.classList.add('modal-open');

    let successMessageCardWidth = successMessageCard.offsetWidth;
    let successMessageCardSpaceBeside = ((window.innerWidth - successMessageCardWidth) / 2) / window.innerWidth * 100;

    successMessageCard.style.left = `${successMessageCardSpaceBeside}%`;
    successMessageCard.style.right = `${successMessageCardSpaceBeside}%`;
});

modalOverlay.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});