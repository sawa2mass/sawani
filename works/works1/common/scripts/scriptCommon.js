'use strict'

/* ドロワー読み込み */
window.addEventListener('load', () => {
    const drawer = document.querySelector('header');

    // TOPページ判定（例: id="topPage"があるかどうか）
    const isTopPage = document.getElementById('topPage') !== null;

    // ベースパス切り替え
    const basePath = isTopPage ? 'common/images/' : '../common/images/';
    const linkBase = isTopPage ? '' : '../';

    //確認ログ
    console.log('linkBase:', linkBase);

    drawer.insertAdjacentHTML('beforeEnd',
      `
        <div id="hamburger" class="hamburger" role="button" tabindex="0">
        <div class="drawer-border">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav id="drawerMenu" class="drawer-menu" aria-hidden="true">
            <div class="drawer-inner">
            <div class="menu-image">
                <img src="${basePath}drawerLogoImg.svg">
            </div>
            <h2 class="menu-heading">Menu</h2>

            <ul>
                <li><a href="${linkBase}index.html">TOP</a></li>
                <li><a href="${linkBase}taipei/index.html">台北</a></li>
                <li><a href="${linkBase}taichu/index.html">台中</a></li>
                <li><a href="${linkBase}tainan/index.html">台南</a></li>
                <li><a href="#">当サイトのポリシー</a></li>
                <li><a href="#">お問い合わせ</a></li>
            </ul>
            </div>
        </nav>
        </div>
        `
      );

    const hamburger = document.querySelector('.hamburger');
    const drawerMenu = document.getElementById('drawerMenu');

    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    drawerMenu.classList.toggle('active');

    // アクセシビリティ用にaria属性切り替え
    const expanded = hamburger.classList.contains('active');
    drawerMenu.setAttribute('aria-hidden', !expanded);
    hamburger.setAttribute('aria-expanded', expanded);
    });
});


/* TOPへ戻るボタン */
/* フッターの直前にTOPへ戻るボタンのHTMLを挿入 */
    window.addEventListener('load', () => {
  // <footer> 要素を取得
  const footer = document.querySelector('footer');


  // id="topPage"が存在しているか確認
  const isTopPage = document.getElementById('topPage') !== null;

  // 画像のパス切り替え
  const imgPath = isTopPage ? 'common/images/btnBackTop.svg' : '../common/images/btnBackTop.svg';

  // footerの前にHTMLを挿入
  footer.insertAdjacentHTML('beforebegin', 
    `
    <a href="#" class="backToTop">
      <img src="${imgPath}" alt="TOPへ戻る">
    </a>
  `
  );

  // jQueryで追加した要素を取得
  const $backToTop = $('.backToTop');
  const $footer = $('footer');

   // TOPへ戻るボタンの位置調整関数
  function updateButtonPosition() {
    var windowWidth = $(window).width();
    var isMobile = windowWidth <= 768;
    var fixedBottom = isMobile ? 5 : 20;  //isMobileがtrue(スマホ)なら 5(px)、falseなら 20(px)
    var rightOffset = isMobile ? 4 : 20;   //isMobileがtrueなら 5(右から4px)、falseなら 20(px)
    var bottomOffset = isMobile ? 5 : 10;  //isMobileがtrueなら 5(フッターの5px)上で止まる)、falseなら 10(px)

    var scrollTop = $(window).scrollTop();           // 今のスクロール量。（px）
    var windowHeight = $(window).height();           // 見えている画面の縦幅
    var footerTop = $footer.offset().top;            // ページ全体の中でフッターの上端位置
    var buttonHeight = $backToTop.outerHeight();     // ボタンの高さ
    var buttonBottom = scrollTop + windowHeight - fixedBottom; // 今のボタンの画面上での下端位置（スクロールしたぶんも考慮）

    // デバッグ用ログ
    console.log('footerTop:', footerTop);
    console.log('scrollTop:', scrollTop);
    console.log('windowHeight:', windowHeight);
    console.log('buttonBottom:', buttonBottom, 'footerTop - bottomOffset:', footerTop - bottomOffset);

    if (buttonBottom >= footerTop - bottomOffset) {  //今のボタンの下端「buttonBottom」がフッターの上端 - 10px に達していたら
      // ボタンがフッターにぶつかる前に止める（footerTop（フッターの上） - ボタンの高さ - 10px）

      console.log('position absolute に切り替え');

      

      $backToTop.css({
        position: 'absolute',
        top: (footerTop - buttonHeight - bottomOffset) + 'px',
        bottom: 'auto',  // ここで下の指定を解除
        right: rightOffset + 'px'  //右に何px開けるか
      });
    } else {

      console.log('position fixed に切り替え');

      // 通常：画面右下に固定
      $backToTop.css({
        position: 'fixed',
        bottom: fixedBottom + 'px',
        top: 'auto',  // topの指定を解除
        right: rightOffset + 'px'  //右に何px開けるか
      });
    }
  }
// イベント登録と初回実行
  $(window).on('scroll resize', updateButtonPosition);  //スクロールやウィンドウサイズ変更（resize）ごとに位置を計算しなおす
  updateButtonPosition();  //ページ読み込み直後も1回呼んでおく（初期位置を正しく設定）
});



/* フッターにHTMLを挿入 */
window.addEventListener('load', () => {

  // <footer> 要素を取得
  const footer = document.querySelector('footer');
  // id="topPage"が存在しているか確認
  const isTopPage = document.getElementById('topPage') !== null;
  
  

  // ベースパスを切り替え
  const basePath = isTopPage ? 'common/images/' : '../common/images/';
  const linkBase = isTopPage ? '' : '../';


  // footerの最後にHTMLを挿入
  footer.insertAdjacentHTML('beforeend', 
  `
    <img src="${basePath}flag.svg" class="flag">
    <nav class="footerNav">
      <ul>
        <li><a href="${linkBase}index.html">TOPへもどる</a></li>
        <li><a href="${linkBase}taipei/index.html">台北</a></li>
        <li><a href="${linkBase}taichu/index.html">台中</a></li>
        <li><a href="${linkBase}tainan/index.html">台南</a></li>
        <li>当サイトのポリシー</li>
        <li>お問い合わせ</li>
      </ul>
      <div class="footerLogo">
        <img src="${basePath}logoType.svg">
      </div>
      <div class="footerSns">
        <img src="${basePath}facebook.png" class="snsLogo">
        <img src="${basePath}instaglam.png" class="snsLogo">
        <img src="${basePath}x.svg" class="snsLogo">
      </div>
    </nav>
    <p>Copyright (C) 2023 TAIWAN.traveler.cc</p>
  `
  );
});

  //ロード画面用

  const main = document.querySelector('main');

// TOPページ判定（id="topPage" があるかどうか）
const isTopPage = document.getElementById('topPage') !== null;

// 画像パス切り替え
const logoPath = isTopPage ? 'images/logoType.svg' : '../images/logoType.svg';


const insertDiv = document.createElement('div');
const insertImgLoad = document.createElement('img');
insertDiv.className = 'loading';
insertImgLoad.src = logoPath;
main.appendChild(insertDiv).appendChild(insertImgLoad);

const loading = document.querySelector(".loading");
window.addEventListener("load", function () {
    setTimeout(function () {
        loading.style.display = 'none';
    }, 4500);
});