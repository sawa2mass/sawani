'use strict'

//モーダルPC用
  const modalWrap = document.getElementById('modal');
  const btn = document.querySelectorAll('button');
  const insertModal = document.createElement('div');
  const insertModalContent = document.createElement('div');
  const insertModalText = document.createElement('div');
  const insertImg1 = document.createElement('img');
  const insertImg2 = document.createElement('img');
  const insertClose = document.createElement('img');
  const insertTitle = document.createElement('p');
//   const insertPara = document.createElement('p');
//   const insertTime = document.createElement('p');
  insertModal.className = 'modal';
  insertModalContent.className = 'modalContent';
  insertImg1.className = 'modalImage1';
  insertImg2.className = 'modalImage2';
  insertTitle.className = 'modalTitle';
  insertModalText.className = 'modalText';
  
  insertClose.className = 'closeModal'
  insertClose.src = 'images/close.svg';

  insertModalContent.appendChild(insertImg1);
  insertModalContent.appendChild(insertImg2);
  modalWrap.appendChild(insertModal).appendChild(insertTitle);
  modalWrap.appendChild(insertModal).appendChild(insertClose);
  modalWrap.appendChild(insertModal).appendChild(insertModalContent);
  modalWrap.appendChild(insertModal).appendChild(insertModalText);

  const modal = document.querySelector('.modal'); 
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
              insertTitle.textContent = '新天地西洋博物館';
              insertImg1.src = 'images/museum1Sub1.jpg';
              insertImg2.src = 'images/museum1Sub2.jpg';
              insertModalText.innerHTML = `
              営業時間<br>
              全日：10:00〜18:00<br>
              住所：台湾台中市東区旱渓東路一段456号1階`
          }else if(this.id === 'modal2'){
              insertTitle.textContent = 'アジア近代美術館';
              insertImg1.src = 'images/museum2Sub1.jpg';
              insertImg2.src = 'images/museum2Sub2.jpg';
              insertModalText.innerHTML =
              `営業時間<br>
              全日：9:30～17:00<br>
              住所：413台湾台中市霧峰區柳豐路500號`;
          }else if(this.id === 'modal3'){
              insertTitle.textContent = '勤美術館';
              insertImg1.src = 'images/museum3Sub1.jpg';
              insertImg2.src = 'images/museum3Sub2.jpg';
              insertModalText.innerHTML =
              `営業時間<br>
              全日：09:00〜17:00<br>
              住所：台中市西區館前路71號`;
          }else if(this.id === 'modal4'){
              insertTitle.textContent = '台中文学館';
              insertImg1.src = 'images/museum4Sub1.jpg';
              insertImg2.src = 'images/museum4Sub2.jpg';
              insertModalText.innerHTML =
              `営業時間<br>
              全日：09:00〜17:00<br>
              住所：台中市楽群街38号`;
          }
          modalWrap.style.display = 'block';
      })
  })