'use strict'

const modal = document.getElementById("imageModal");       //HTML内のid="imageModal"を取得して、modal という変数に保存
const modalImage = document.getElementById("modalImage");  //モーダル内の画像タグid="modalImage"を取得して、modalImage という変数に保存
const closeModal = document.querySelector(".close");       //.closeクラスのついた要素を取得して、closeModal に保存
const openButtons = document.querySelectorAll(".openModal"); //.openModalクラス（画像リンク）をまとめて取得し、openButtons に保存


// リンクをクリック → モーダル表示 & 画像差し替え
openButtons.forEach(button => {                    //すべての openButtons を1つずつ取り出して（button）、次の処理を設定
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const imgSrc = this.getAttribute("data-img");
    modalImage.src = imgSrc;
    modal.style.display = "flex";
  });
});

// 閉じるボタンでモーダルを非表示 & スクロール復元
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダル外をクリックして閉じる & スクロール復元
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/*スクロール止めるバージョン
const modal = document.getElementById("imageModal");       //HTML内のid="imageModal"を取得して、modal という変数に保存
const modalImage = document.getElementById("modalImage");  //モーダル内の画像タグid="modalImage"を取得して、modalImage という変数に保存
const closeModal = document.querySelector(".close");       //.closeクラスのついた要素を取得して、closeModal に保存
const openButtons = document.querySelectorAll(".openModal"); //.openModalクラス（画像リンク）をまとめて取得し、openButtons に保存

let scrollY = 0;  //スクロール無効化のための変数。モーダルを開いたときの画面位置を保存。

// スクロール禁止の関数。
function disableScroll() {
  scrollY = window.scrollY;  //現在のスクロール位置を保存。
  document.body.classList.add("modalOpen"); //CSSでbody.modal-open { position: fixed; ... } を定義したのでbody全体が固定されてスクロールが止まる。
  document.body.style.top = `-${scrollY}px`;  // bodyを上にずらすことで今のスクロール位置に固定（見た目はそのまま）
}

//スクロール復元の関数
function enableScroll() {  
  document.body.classList.remove("modalOpen");  //スクロール固定スタイルを解除。
  document.body.style.top = "";  //スクロール位置ずらしのスタイルもリセット。
  window.scrollTo(0, scrollY);  //モーダルを閉じた後、モーダルを開いたときの元の位置にスクロールして戻す。
}

// リンクをクリック → モーダル表示 & 画像差し替え
openButtons.forEach(button => {                    //すべての openButtons を1つずつ取り出して（button）、次の処理を設定
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const imgSrc = this.getAttribute("data-img");
    modalImage.src = imgSrc;
    modal.style.display = "flex";
    disableScroll();  // スクロール固定
  });
});

// 閉じるボタンでモーダルを非表示 & スクロール復元
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  enableScroll();  // スクロール解除
});

// モーダル外をクリックして閉じる & スクロール復元
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    enableScroll();  // スクロール解除
  }
});
*/