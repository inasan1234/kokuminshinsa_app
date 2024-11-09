// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"

import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false

import "controllers"


// app/javascript/application.js

document.addEventListener("turbo:load", () => {
    const screens = document.querySelectorAll(".screen");
    const nextBtn = document.getElementById("next-btn");
    const backBtn = document.getElementById("back-btn");
    const resultBtn = document.getElementById("result-btn");
    const progressBar = document.getElementById("progress-bar");
    let currentScreenIndex = 0;

    // 進捗バーを更新する関数
    function updateProgressBar() {
      const progress = ((currentScreenIndex + 1) / screens.length) * 100;
      progressBar.style.width = progress + "%";
      progressBar.style.width = `${progress}%`;
    }

    // ラジオボタン選択チェック関数
    function checkRadioSelection() {
        const radios = screens[currentScreenIndex].querySelectorAll("input[type='radio']");
        let isSelected = Array.from(radios).some(radio => radio.checked);
        nextBtn.disabled = !isSelected; // 選択されていればNextボタン有効化
    }

    // ボタンの一時無効化と再有効化
    function disableButtons() {
        nextBtn.disabled = true;
        backBtn.disabled = true;
    }

    function enableButtons() {
        checkRadioSelection(); // 次の画面の状態を再チェック
        if (currentScreenIndex > 0) {
            backBtn.disabled = false; // Backボタンを有効化
        }
    }

    // 他のスクリーンを無効化する関数
    function disableInactiveScreens() {
      screens.forEach((screen, index) => {
          if (index !== currentScreenIndex) {
              screen.classList.remove("active-screen"); // 非表示にする
          }
      });
    }

    disableInactiveScreens();

    // 初期画面のラジオボタン状態チェック
    checkRadioSelection();

    updateProgressBar();

    // 次の画面へ進む
    nextBtn.addEventListener("click", () => {
        if (currentScreenIndex < screens.length - 1) {
            disableButtons(); // ボタンを一時無効化
            screens[currentScreenIndex].classList.remove("active-screen");
            currentScreenIndex++;
            screens[currentScreenIndex].classList.add("active-screen");

            // Backボタンを表示
            if (currentScreenIndex > 0) {
                backBtn.style.display = "inline";
            }

            // 最後の画面でNextボタンを非表示
            if (currentScreenIndex === screens.length - 1) {
                nextBtn.style.display = "none";
            }
            enableButtons(); // ボタンを再有効化
        }
        disableInactiveScreens();
        updateProgressBar();
    });

    // 前の画面に戻る
    backBtn.addEventListener("click", () => {
        if (currentScreenIndex > 0) {
            disableButtons(); // ボタンを一時無効化
            screens[currentScreenIndex].classList.remove("active-screen");
            currentScreenIndex--;
            screens[currentScreenIndex].classList.add("active-screen");

            // Nextボタンを表示
            if (currentScreenIndex < screens.length - 1) {
                nextBtn.style.display = "inline";
            }

            // 最初の画面でBackボタンを非表示
            if (currentScreenIndex === 0) {
                backBtn.style.display = "none";
            }
            enableButtons(); // ボタンを再有効化
        }
        disableInactiveScreens();
        updateProgressBar();
    });

    // ラジオボタンの変更を監視してNextボタンを有効化
    screens.forEach(screen => {
        const radios = screen.querySelectorAll("input[type='radio']");
        radios.forEach(radio => {
            radio.addEventListener("change", checkRadioSelection);
        });
    });

    disableInactiveScreens(); // 初回に非アクティブなスクリーンを無効化
});
  