 // 初始化點擊次數
 let clickCount = 0;
 // 取得 .line 這個元素
 const lineElement = document.querySelector('.line');
 // 加入點擊事件監聽器
 lineElement.addEventListener('click', () => {
   clickCount++;  // 每點擊一次就加 1
   console.log(`你已經點擊了 ${clickCount} 次`);
   // 當點擊次數達到 30 次，就跳轉到指定頁面
   if (clickCount >= 30) {
     // 更改下面的 URL 為你想要跳轉的頁面
     window.location.href = "qian.html";
   }
 });