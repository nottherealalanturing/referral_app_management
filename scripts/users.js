const modal = document.querySelector('.modal-bg');
const chats = document.querySelector('.chatsBtn');
const chatDiv = document.querySelector('.chatSection');
const disableBtn = document.querySelector('.usersDisable');
const status = document.querySelector('.users-status');
const activity = document.querySelector('.activityBtn');
const chatActive = document.querySelector('.chat-active');
const business = document.querySelector('.business-name');
const activityDiv = document.querySelector('.activityTable');
const disableModal = document.querySelector('.disable-modal');
const reActivate = document.querySelector('.usersRe-activate');
const userStatus = document.querySelector('.users-status');
const cancelModal = document.querySelector('.cancel-modal');
const startChat = document.querySelector('.usersStart-chat');
const activityView = document.querySelector('.activity-view');

chats.addEventListener('click', function () {
  chatDiv.style.display = 'block';
  chats.classList.add('chats-active');
  business.style.display = 'block';
  activityDiv.style.display = 'none';
  activity.classList.add('activity-inactive');
});

startChat.addEventListener('click', function () {
  chatDiv.style.display = 'block';
  chats.classList.add('chats-active');
  business.style.display = 'block';
  activityDiv.style.display = 'none';
  activity.classList.add('activity-inactive');
});

activityView.addEventListener('click', function () {
  chatDiv.style.display = 'block';
  chats.classList.add('chats-active');
  business.style.display = 'block';
  activityDiv.style.display = 'none';
  activity.classList.add('activity-inactive');
});

activity.addEventListener('click', function () {
  activityDiv.style.display = 'block';
  chatDiv.style.display = 'none';
  business.style.display = 'none';
  chats.classList.remove('chats-active');
  activity.classList.remove('activity-inactive');
});

disableBtn.addEventListener('click', function () {
  modal.classList.add('bg-active');
});

cancelModal.addEventListener('click', function () {
  modal.classList.remove('bg-active');
});

disableModal.addEventListener('click', function () {
  modal.classList.remove('bg-active');
  disableBtn.style.display = 'none';
  userStatus.style.display = 'block';
  reActivate.style.display = 'block';
  business.style.display = 'none';
});

reActivate.addEventListener('click', function () {
  disableBtn.style.display = 'block';
  userStatus.style.display = 'none';
  reActivate.style.display = 'none';
});
