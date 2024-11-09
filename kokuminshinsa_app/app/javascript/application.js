// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"

import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

import "controllers"


// app/javascript/application.js

document.addEventListener("turbo:load", () => {
    const screens = document.querySelectorAll(".screen");
    const nextBtn = document.getElementById("next-btn");

    let currentScreenIndex = 0;
  
    nextBtn.addEventListener("click", () => {
      // 現在の画面を非表示にする
      screens[currentScreenIndex].classList.remove("active-screen");
  
      // 次の画面に進む
      currentScreenIndex = (currentScreenIndex + 1) % screens.length;
  
      // 次の画面を表示する
      screens[currentScreenIndex].classList.add("active-screen");
    });
});
  