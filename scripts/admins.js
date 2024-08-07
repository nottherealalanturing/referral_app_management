document.addEventListener('DOMContentLoaded', function () {
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

});

// switch tabs
let btnActivities = document.getElementById('btn-activities');
let btnChats = document.getElementById('btn-chats');

let tabActivities = document.getElementById('tab-activities');
let tabChats = document.getElementById('tab-chats');

function resetActiveClass() {
    btnActivities.classList.remove('active');
    btnChats.classList.remove('active');
}

function hideAllTables() {
    tabActivities.classList.remove('active');
    tabChats.classList.remove('active');
}

btnActivities.addEventListener('click', function () {
    resetActiveClass();
    hideAllTables();
    tabActivities.classList.add('active');
    btnActivities.classList.add('active');
});

btnChats.addEventListener('click', function () {
    resetActiveClass();
    hideAllTables();
    tabChats.classList.add('active');
    btnChats.classList.add('active');
});
btnActivities.click();