// Анимация по нажатию навигационной кнопки About us
document.querySelector(".nav-item:nth-child(2)").addEventListener("click", () => {
    document.querySelector(".not-anim-font-about-us").classList.add("anim-font-about-us")
    document.querySelector(".not-anim-font-about-us-p1").classList.add("anim-font-about-us-p1")
    document.querySelector(".not-anim-font-about-us-p2").classList.add("anim-font-about-us-p2")
    document.querySelector(".not-anim-font-about-us-p3").classList.add("anim-font-about-us-p3")
    document.querySelector(".not-anim-font-save-notsave").classList.add("anim-font-save-notsave")
})

// Анимация по нажатию навигационной кнопки Survival tips
document.querySelector(".nav-item:nth-child(4)").addEventListener("click", () => {
    document.querySelector(".not-anim-btns-survival-tips").classList.add("anim-btns-survival-tips")
})

// Внезапня картинка :) 
const appearSuddenlyPic = () => {
    const newImg = document.createElement('img');
    newImg.src = 'assets/media/blood_hand.png'
    newImg.id = 'suddenly-pic';
    document.querySelector("nav img").before(newImg);
}
setTimeout(appearSuddenlyPic, 12000)