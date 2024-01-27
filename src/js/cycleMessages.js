/**
 * Cycle through messages for the hero's <p> tag
 */
document.addEventListener('DOMContentLoaded', function () {
    const messages = ["A full stack developer who works in a bundle of languages.", "Can program in over 15 languages.", "Front-end, back-end, UI/UX design, and more."];
    const message = document.getElementById('message');
    let currMsgIdx = 0;

    function cycleMessages() {
        message.textContent = messages[currMsgIdx];
        currMsgIdx = (currMsgIdx + 1) % messages.length;
    }

    cycleMessages();

    setInterval(cycleMessages, 4000);
});