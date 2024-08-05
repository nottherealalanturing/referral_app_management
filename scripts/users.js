const chats = document.querySelector (".chatsBtn");
const business = document.querySelector (".business-name");
const status = document.querySelector (".users-status");
const modal = document.querySelector (".modal-bg");
const activityDiv = document.querySelector (".activityTable");
const chatDiv = document.querySelector (".chatSection");

chats.addEventListener ("click", function (){
    chatDiv.style.display = "block";
    activityDiv.style.display = "none";
});