document.addEventListener('DOMContentLoaded', function() {
  // 取得漢堡按鈕與手機版選單元素
  const hamburger = document.querySelector('.hamburger');
  const hamburgerMenu = document.querySelector('.hamburger_menu');

  // 漢堡按鈕點擊後，切換選單 open 狀態
  hamburger.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('open');
  });
});
