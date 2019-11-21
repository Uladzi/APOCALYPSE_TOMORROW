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
// const appearSuddenlyPic = () => {
//     const newImg = document.createElement('img');
//     newImg.src = 'https://pngimage.net/wp-content/uploads/2018/06/%D0%BA%D1%80%D0%BE%D0%B2%D0%B0%D0%B2%D1%8B%D0%B9-%D0%BE%D1%82%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%BE%D0%BA-%D1%80%D1%83%D0%BA%D0%B8-png-1.png'
//     newImg.id = 'suddenly-pic';
//     document.querySelector("h1").before(newImg);
// }
// setTimeout(appearSuddenlyPic, 2000)