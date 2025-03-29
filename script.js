document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.about-me');
    const phrases = ["Web Developer", "Python Developer"];
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    let isTyping = true;

    function type() {
        if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
            textElement.textContent += phrases[currentPhraseIndex].charAt(currentCharacterIndex);
            currentCharacterIndex++;
            setTimeout(type, 150); // Typing speed
        } else {
            setTimeout(startDeleting, 1000); // delete interval
        }
    }

    function deleteText() {
        if (currentCharacterIndex > 0) {
            textElement.textContent = textElement.textContent.slice(0, -1);
            currentCharacterIndex--;
            setTimeout(deleteText, 80); // Deleting speed
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; //next commmand
            setTimeout(type, 500); // type intreval
        }
    }

    function startDeleting() {
        deleteText();
    }

    // start type effect
    type();
});
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
});
// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".icon-slider");

//     //Duplicate icons to create loop
//     const icons = slider.innerHTML;
//     slider.innerHTML += icons;

//     let scrollAmount = 0;

//     function scrollIcons() {
//         scrollAmount -= 2; // Adjust speed by changing this value
//         if (scrollAmount <= -slider.scrollWidth / 2) {
//             scrollAmount = 0; // Reset the scroll position
//         }
//         slider.style.transform = `translateX(${scrollAmount}px)`;
//         requestAnimationFrame(scrollIcons);
//     }

//     scrollIcons();
// });