window.addEventListener('load', () => {

    let isStopped = false;
    let y = 0;
    let clickOne = false;

    if(window.innerWidth < 768){isStopped = true; clickOne = true;}
    if(window.innerWidth > 768){isStopped = false;}

    const body = document.querySelector('.galSec');
    //bodyの先頭にカルーセル挿入
    body.insertAdjacentHTML('beforeEnd', 
        `<div class="carousel">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src="images/sliderImage1.jpg" alt="Slide1">
                </div>
                <div class="carousel-item">
                    <img src="images/sliderImage2.jpg" alt="Slide2">
                </div>
                <div class="carousel-item">
                    <img src="images/sliderImage3.jpg" alt="Slide3">
                </div>
                <div class="carousel-item">
                    <img src="images/sliderImage4.jpg" alt="Slide4">
                </div>
                <div class="carousel-item">
                    <img src="images/sliderImage5.jpg" alt="Slide5">
                </div>
            </div>
        </div>
        <div class="slider">
            <img src="images/sliderLeft.png" alt="" id="slideLeft">
            <div class="sliderCircle" id="circle1"></div>
            <div class="sliderCircle" id="circle2"></div>
            <div class="sliderCircle" id="circle3"></div>
            <div class="sliderCircle" id="circle4"></div>
            <div class="sliderCircle" id="circle5"></div>
            <img src="images/sliderRight.png" alt="" id="slideRight">
        </div>`
    )

    const carouselInner = document.querySelector('.carousel-inner');
    // const leftButton = document.querySelector('.carousel-button.left');
    // const rightButton = document.querySelector('.carousel-button.right');
    const items = document.querySelectorAll('.carousel-item');
    let current = 2;
    
    setTimeout(() => { // 少し遅延させることで確実に反映
        carouselInner.style.transition = 'transform 0s';
        // carouselInner.style.transform = 'translateX(-295px)';
    }, 10);

    // 各スライドの幅を取得（マージン込み）
    const slideWidth = 295 + 80; // 画像幅 + 画像間のスペース（80px）

    let isAnimating = false; // アニメーション中かどうかのフラグ


    const carousel = document.querySelector('.carousel');
    const carouselItem = document.querySelectorAll('.carousel-item');

    let x = 0;
    // let currentCounter = 0;

    

    const leftBtn = document.getElementById('slideLeft');
    const rightBtn = document.getElementById('slideRight');
    const circle = document.querySelectorAll('.sliderCircle');
    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const circle3 = document.getElementById('circle3');
    const circle4 = document.getElementById('circle4');
    const circle5 = document.getElementById('circle5');
    const circleAry = [circle1, circle2 ,circle3 ,circle4 ,circle5];

    circleAry[2].style.backgroundColor = "black";

    function fillCurrent(){
        for(let i = 0; i < 5; i++){
                circleAry[i].style.backgroundColor = '#777575';
            }
        circleAry[current].style.backgroundColor = 'black';
    }

    let sign = 0;

    let moveCount = 0;
    function imageSet(x){
        sign = Math.sign(x);
        if(window.innerWidth >= 768){
            carouselItem.forEach(function(e, i){
                if(y<5){
                    e.style.left = `${375 * i - 215 + x}px`;
                    y++;
                }
                let currentLeft = parseInt(e.style.left);
                if(currentLeft < -375){
                    e.style.left = `1580px`
                    fillCurrent();
                    fixPosition();
                }else if(currentLeft > 1500){
                    e.style.left = `-295px`;
                    fillCurrent();
                    fixPosition();
                }else{
                    if(Math.abs(x) < 3){
                        if(Math.sign(x) === 1){
                            if(i === 0) moveCount -= 1;
                            e.style.left = `${currentLeft - 1}px`;
                        }else if(Math.sign(x) === -1){
                            if(i === 0) moveCount += 1;
                            e.style.left = `${currentLeft + 1}px`;
                        }
                    }else if(Math.abs(x) < 8){
                        if(Math.sign(x) === 1){
                            if(i === 0) moveCount -= 3;
                            e.style.left = `${currentLeft - 3}px`;
                        }else if(Math.sign(x) === -1){
                            if(i === 0) moveCount += 3;
                            e.style.left = `${currentLeft + 3}px`;
                        }
                    }else if(Math.abs(x) < 12){
                        if(Math.sign(x) === 1){
                            if(i === 0) moveCount -= 5;
                            e.style.left = `${currentLeft - 5}px`;
                        }else if(Math.sign(x) === -1){
                            if(i === 0) moveCount += 5;
                            e.style.left = `${currentLeft + 5}px`;
                        }
                    }else if(Math.abs(x) !== 0){
                        if(Math.sign(x) === 1){
                            if(i === 0) moveCount -= 15;
                            e.style.left = `${currentLeft - 15}px`;
                        }else if(Math.sign(x) === -1){
                            if(i === 0) moveCount += 15;
                            e.style.left = `${currentLeft + 15}px`;
                        }
                    }
                    
                }
            });

            if(moveCount >= 375){
            if(current === 0){
                    current = 4;
                }else{
                    current--;
                }
                fillCurrent();
                moveCount = 0;
            }else if(moveCount <= -375){
                if(current === 4){
                    current = 0;
                }else{
                    current++;
                }
                fillCurrent();
                moveCount = 0;
            }
        }else if(window.innerWidth < 768) {
            carouselItem.forEach(function(e, i){
            if(y<5){
                e.style.left = `${315 * i - 590}px`;
                y++;
            }
            
            /*あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ*/

            let currentLeft = parseInt(e.style.left);
            
            if(currentLeft < -905){
                e.style.left = `700px`
                fillCurrent();
                fixPositionSP();
            }else if(currentLeft > 985){
                e.style.left = `-500px`;
                fillCurrent();
                fixPositionSP();
            }else{
                if(Math.abs(x) < 10){
                    if(Math.sign(x) === 1){
                        if(i === 0) moveCount -= 3;
                        e.style.left = `${currentLeft - 3}px`;
                    }else if(Math.sign(x) === -1){
                        if(i === 0) moveCount += 3;
                        e.style.left = `${currentLeft + 3}px`;
                    }
                }else if(Math.abs(x) !== 0){
                    if(Math.sign(x) === 1){
                        if(i === 0) moveCount -= 7;
                        e.style.left = `${currentLeft - 7}px`;
                    }else if(Math.sign(x) === -1){
                        if(i === 0) moveCount += 7;
                        e.style.left = `${currentLeft + 7}px`;
                    }
                }
            }
        });

        if(moveCount >= 315){
            if(current === 0){
                    current = 4;
                }else{
                    current--;
                }
                fillCurrent();
                moveCount = 0;
            }else if(moveCount <= -315){
                if(current === 4){
                    current = 0;
                }else{
                    current++;
                }
                fillCurrent();
                moveCount = 0;
            }
        }
    }
    imageSet(0);

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0; // 現在のtranslateXの値
    let prevTranslate = 0;
    let offsetX = 0;
    let flag = 0;

    const carouselWidth = carousel.offsetWidth;
    const itemsCount = carouselInner.children.length;
    // const maxTranslate = 0;
    // const minTranslate = -carouselWidth * (itemsCount - 1);

    function setTranslate(x) {
        imageSet(x);
        // carouselInner.style.transform = `translateX(${x}px)`;
    }

    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('touchstart', startDrag);

    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);

    window.addEventListener('mousemove', drag);
    window.addEventListener('touchmove', drag);

    function startDrag(event) {
        clearInterval(autoSlide);
        if (isAnimating) return;
        carouselInner.style.transition = 'none'
        isDragging = true;
        
        let offsetX;
        if(event.type === 'touchmove'){
            offsetX = event.touches[0].clientX;
        }else{
            offsetX = event.clientX;
        }
        carousel.classList.add('dragging');

        positionAbsolute();
        
    }

    function drag(event) {
        if (!isDragging) return;
        let currentX;
        if(event.type === 'touchmove'){
            currentX = event.touches[0].clientX - offsetX;
        }else{
            currentX = event.clientX - offsetX;
        }
        setTranslate(-currentX);
        if(event.type === 'touchmove'){
            offsetX = event.touches[0].clientX;
        }else{
            offsetX = event.clientX;
        }
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        offsetX = 0;
        carousel.classList.remove('dragging');
        //慣性諦めました

        // if(window.innerWidth < 768 && carousel.className !== 'dragging'){
        //     console.log(sign);
        //     for(let i = 0; i < 3; i++){
        //         if(sign === -1){
        //             imageSet(-3);
        //         }else if(sign === 1){
        //             imageSet(3);
        //         }
        //     }
        // }
    }


    function positionAbsolute(){
        carouselItem.forEach(function(e){
            e.style.position = 'absolute';
        })
    }

    function positionStatic(){
        carouselItem.forEach(function(e){
            e.style.position = 'static';
        })
    }

    function fixPosition(){
        carouselItem.forEach(function(e, i){
            e.style.left = `${Math.floor((parseInt(e.style.left) + 100) / 375) * 375}px`;
        })
    }

    function fixPositionSP(){
        carouselItem.forEach(function(e, i){
            e.style.left = `${Math.floor((parseInt(e.style.left) + 50) / 315) * 315 + 40}px`;
        })
    }

    // スライドを右に進める
    function moveToNextSlide(times) {
            // アニメーション中は処理しない
            if (isAnimating) return;
            isAnimating = true;

        if(times === 1){
            flag = times;
            moveNext(times); // 2回繰り返す
        }else if(times === 2){
            flag = times;
            moveNext(times); // 2回繰り返す
        }else if(times === 3){
                flag = times;
            moveNext(times); // 3回繰り返す
        }else if(times === 4){
                flag = times;
            moveNext(times); // 4回繰り返す
        }
    }

    function moveNext(time){
        if (time <= 0) {
            isAnimating = false;
            return;
        }
        if(current === 0){
            current = 4;
        }else{
            current--;
        }
        fillCurrent();
        createLastClone();
        carouselInner.style.transition = `transform ${1000 / flag}ms ease`; // アニメーションの時間を長くしてスムーズに
        carouselInner.style.transform = `translateX(${slideWidth}px)`; // 1枚分だけ右に戻す
        
        // 位置をリセット
        setTimeout(() => {
            deleteFirstClone();
            carouselInner.style.transition = 'none'; // アニメーション無し
            carouselInner.style.transform = `translateX(0)`; // 位置をリセット（1番目が中央）
            const lastItem = carouselInner.lastElementChild;
            lastItem.style.position = `static`
            carouselInner.insertBefore(lastItem, carouselInner.firstElementChild); // 最初に追加

            setTimeout(() => {
                moveNext(time - 1);
            }, 20);
        }, 1000 / flag);
    }

    function movePrev(time){
        if (time <= 0) {
            isAnimating = false;
            return;
        }
        if(current === 4){
            current = 0;
        }else{
            current++;
        }
        fillCurrent();
        createFirstClone();
        carouselInner.style.transition = `transform ${1000 / flag}ms ease-in`; // アニメーションの時間を長くしてスムーズに
        carouselInner.style.transform = `translateX(-${slideWidth}px)`; // 1枚分だけ右に戻す
        
        // 位置をリセット
        setTimeout(() => {
            deleteFirstClone();
            carouselInner.style.transition = 'none'; // アニメーション無し
            carouselInner.style.transform = `translateX(0)`; // 位置をリセット（1番目が中央）
            const firstItem = carouselInner.firstElementChild;
            carouselInner.appendChild(firstItem, carouselInner.lastElementChild);
            setTimeout(() => {
                movePrev(time - 1);
            }, 20);
        }, 1000 / flag);
    }


    function createLastClone(){
        // 最後尾のスライドを最初に追加
        const lastItem = carouselInner.lastElementChild;
        const cloneLast = lastItem.cloneNode(true);
        cloneLast.style.position = `absolute`;
        cloneLast.style.left = `${-375-225}px`;
        carouselInner.insertBefore(cloneLast, carouselInner.firstElementChild);
    }

    function createFirstClone(){
        // 最後尾のスライドを最初に追加
        const firstItem = carouselInner.firstElementChild;
        const cloneFirst = firstItem.cloneNode(true);
        cloneFirst.style.position = `absolute`;
        cloneFirst.style.left = `${1366+295}px`;
        carouselInner.insertBefore(cloneFirst, carouselInner.firstElementChild);
    }

    function deleteFirstClone(){
        const firstItem = carouselInner.firstElementChild;
        firstItem.remove();
    }

    // スライドを左に戻す
    function moveToPrevSlide(times) {
        if (isAnimating) return;
        isAnimating = true;

        if(times === 1){
            flag = times;
            movePrev(times); // 1回繰り返す
        }else if(times === 2){
            flag = times;
            movePrev(times); // 2回繰り返す
        }else if(times === 3){
                flag = times;
            movePrev(times); // 3回繰り返す
        }else if(times === 4){
                flag = times;
            movePrev(times); // 4回繰り返す
        }
    }

    // 初期状態で1番目の画像が表示されるように設定
    carouselInner.style.transform = `translateX(0)`;

    circle.forEach(function(e, i){
        e.addEventListener('click', function(){
            clearInterval(autoSlide);
            if(window.innerWidth < 768) return;
            if (isAnimating) return;
            for(let i = 0; i < 5; i++){
                circleAry[i].style.backgroundColor = '#777575';
            }
            this.style.backgroundColor = 'black';
            if(i === current + 1){
                moveToPrevSlide(1);
            }else if(i === current + 2){
                moveToPrevSlide(2);
            }else if(i === current + 3){
                moveToPrevSlide(3);
            }else if(i === current + 4){
                moveToPrevSlide(4);
            }else if(i === current - 1){
                moveToNextSlide(1);
            }else if(i === current - 2){
                moveToNextSlide(2);
            }else if(i === current - 3){
                moveToNextSlide(3);
            }else if(i === current - 4){
                moveToNextSlide(4);
            }
            positionStatic();
            // current = i;
            // currentSet(current);
            // fixPosition();
        });
    });

    leftBtn.addEventListener('click', function(){
        clearInterval(autoSlide);
        if(isAnimating) return;
        moveToNextSlide(1);
        fillCurrent();
        positionStatic();
        // fixPosition();
    });
    rightBtn.addEventListener('click', function(){
        clearInterval(autoSlide);
        if(isAnimating) return;
            moveToPrevSlide(1);
            fillCurrent();
            positionStatic();
            // fixPosition();
    });

    // function currentSet(current){
    //     circleAry.forEach(function(e){
    //         e.style.backgroundColor = '#777575';
    //     })
    //     circleAry[current].style.backgroundColor = 'black';
    // }

    let autoSlide;
    if(window.innerWidth > 768){
        autoSlide = setInterval(moveToPrevSlide, 3000, 1);
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            isStopped = true;
            // console.log("768px以下になったので関数を停止しました");
            clearInterval(autoSlide);
            // leftBtn.style.display = 'none';
            // rightBtn.style.display = 'none';
            y = 0;
            imageSet(0);
        }else if(window.innerWidth > 768){
            clickOne = false;
            if(isStopped === true){
                // autoSlide = setInterval(moveToPrevSlide, 3000, 1);
                // console.log("768px以上になったので関数を再開しました");
            // leftBtn.style.display = 'inline-block';
            // rightBtn.style.display = 'inline-block';
            }
            isStopped = false;
            y = 0;
            imageSet(0);
        }
    });

});