const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg","10.jpg", "11.jpg", "12.jpg", "13.jpg","14.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

let url = `img/${chosenImage}`
// const bgImage = document.createElement("body");
const bgImage = document.querySelector("body");

bgImage.style.backgroundImage = `url(${url})`;

// // document.body.appendChild(bgImage);
// bgImage.style.backgroundRepeat = "no-repeat";

// //이미지 사이즈
// bgImage.style.backgroundSize = "cover";
