'use strict'

//モーダルPC用
const modalWrap = document.getElementById('modal');
const btn = document.querySelectorAll('button');
const insertModal = document.createElement('div');
const insertModalContent = document.createElement('div');
const insertModalText = document.createElement('div');
const insertImg = document.createElement('img');
const insertClose = document.createElement('img');
const insertTitle = document.createElement('p');
const insertPara = document.createElement('p');
const insertTime = document.createElement('p');
insertModal.className = 'modal';
insertModalContent.className = 'modalContent';
insertImg.className = 'modalImage'
insertTitle.className = 'modalTitle';
insertModalText.className = 'modalText';
insertPara.className = 'modalPara';
insertTime.className = 'modalTime';
insertClose.className = 'closeModal'
insertClose.src = 'images/close.svg';

insertModalText.appendChild(insertPara);
insertModalText.appendChild(insertTime);
insertModalContent.appendChild(insertImg);
insertModalContent.appendChild(insertModalText);
modalWrap.appendChild(insertModal).appendChild(insertTitle);
const modal = document.querySelector('.modal');
modal.appendChild(insertClose);
modal.appendChild(insertModalContent);

const closeBtn = document.querySelector('.closeModal');

closeBtn.addEventListener('click', function(){
    modalWrap.style.display = 'none';
});
modalWrap.addEventListener('click', function(e){
    if(e.target.closest('.modal') === null) {
        modalWrap.style.display = 'none';
    }
});

btn.forEach(function(e){
    e.addEventListener('click', function(){
        if(this.id === 'modal1'){
            insertTitle.textContent = '寧夏夜市';
            insertImg.src = 'images/modal1.jpg';
            insertPara.textContent = '寧夏路夜市は台湾伝統の屋台料理やB級グルメがメインの夜市です。特に大同区の圓環付近には懐かしいグルメがたくさん集まっていますので、思う存分味わってください。また、ここの夜市は歩道と車道が分かれているので、食事やショッピングに便利です。食の夜市とも言われる寧夏路夜市には毎日、大勢の人々が訪れています。';
            insertTime.innerHTML =
            `営業時間<br>
            日曜日17:00 - 25:00
            月曜日17:00 - 25:00
            火曜日17:00 - 25:00
            水曜日17:00 - 25:00
            木曜日17:00 - 25:00
            金曜日17:00 - 25:00
            土曜日17:00 - 25:00`;
        }else if(this.id === 'modal2'){
            insertTitle.textContent = '饒河街観光夜市';
            insertImg.src = 'images/modal2.jpg';
            insertPara.textContent = '饒河街観光夜市は、屋台料理から雑貨や生活用品も扱う夜市です。その手ごろな値段が魅力的で、多くの人々で賑わいます。最も観光客に人気があるのは「藥燉排骨」「胡椒餅」「水煎包」「蚵仔麵線」など行列ができる人気料理と、「麻辣臭豆腐」「牛肉麵」「天婦羅」など台湾の伝統的な屋台料理も定番です。　'
            insertTime.innerHTML =
            `営業時間<br>
            日曜日17:00 - 23:00
            月曜日17:00 - 23:00
            火曜日17:00 - 23:00
            水曜日17:00 - 23:00
            木曜日17:00 - 23:00
            金曜日17:00 - 23:00
            土曜日17:00 - 23:00`;
        }else if(this.id === 'modal3'){
            insertTitle.textContent = '士林夜市';
            insertImg.src = 'images/modal3.jpg';
            insertPara.textContent = 'ここは市内で最も規模が大きく知名度の高い夜市で、台湾のおいしい屋台グルメからユニークな雑貨まで、ありとあらゆるものが売られています。その種類の豊富さ、敷地の広さ、歴史、そして夜遊びスポットとしての人気度と、士林夜市の魅力は何から何まで台北ナンバーワン。台北観光では絶対にはずせない魅惑スポットです。'
            insertTime.innerHTML =
            `営業時間<br>
            日曜日16:00 - 00:00
            月曜日16:00 - 00:00
            火曜日16:00 - 00:00
            水曜日16:00 - 00:00
            木曜日16:00 - 00:00
            金曜日16:00 - 00:00
            土曜日16:00 - 00:00`;
        }else if(this.id === 'modal4'){
            insertTitle.textContent = '通化夜市';
            insertImg.src = 'images/modal4.jpg';
            insertPara.textContent = '台北の他の夜市と比べると小規模ではあるものの、食べ物においてはどの夜市にも決して劣りません。有名な駱記小炒(炒め物)、裕品元の氷火湯円、平価鉄板焼、通化夜市の揚げサツマイモボールは、ぜひとも賞味したい特色的な伝統軽食です。マッサージ店もたくさんあり、1日の終わりに最適な夜市です。'
            insertTime.innerHTML =
            `営業時間<br>
            日曜日18:00 - 24:00
            月曜日18:00 - 24:00
            火曜日18:00 - 24:00
            水曜日18:00 - 24:00
            木曜日18:00 - 24:00
            金曜日18:00 - 24:00
            土曜日18:00 - 24:00`;
        }
        modalWrap.style.display = 'block';
    })
})