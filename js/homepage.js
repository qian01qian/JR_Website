// 取得必要的 DOM 元素
const carouselInner = document.querySelector('.carousel-inner');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');

let currentIndex = 0;
const slideCount = slides.length; // 這裡包含複製的第一張
const actualSlideCount = slideCount - 1; // 原本的幻燈片數量（8 張）

// 時間設定：每張停 5000ms，過渡 500ms
const pauseDuration = 5000;
const transitionDuration = 500;

// 更新幻燈片位置
function updateSlidePosition() {
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自動播放：先設定計時器
let autoPlayInterval = setInterval(nextSlide, pauseDuration + transitionDuration);

// 重新啟動自動輪播計時器的函式
function resetAutoPlayTimer() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = setInterval(nextSlide, pauseDuration + transitionDuration);
}

function nextSlide() {
  currentIndex++;
  carouselInner.style.transition = `transform ${transitionDuration}ms ease`;
  updateSlidePosition();

  // 若到達複製的那張（最後一張），在過渡結束後立即跳回第一張
  if (currentIndex === slideCount - 1) {
    setTimeout(() => {
      carouselInner.style.transition = 'none';
      currentIndex = 0;
      updateSlidePosition();
    }, transitionDuration);
  }
}

function prevSlide() {
  // 若在第一張，則先跳到最後一張（複製之前的幻燈片）
  if (currentIndex === 0) {
    carouselInner.style.transition = 'none';
    currentIndex = actualSlideCount;
    updateSlidePosition();
    // 立即再切換到前一張
    setTimeout(() => {
      carouselInner.style.transition = `transform ${transitionDuration}ms ease`;
      currentIndex--;
      updateSlidePosition();
    }, 20);
  } else {
    currentIndex--;
    carouselInner.style.transition = `transform ${transitionDuration}ms ease`;
    updateSlidePosition();
  }
}

// 按鈕點擊事件：手動切換時重置自動播放計時器
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoPlayTimer();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoPlayTimer();
});

// 手勢滑動支援（觸控事件）
let touchStartX = 0;
let touchEndX = 0;

carouselInner.addEventListener('touchstart', (e) => {
  clearInterval(autoPlayInterval);
  touchStartX = e.changedTouches[0].screenX;
});

carouselInner.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
  resetAutoPlayTimer();
});

function handleSwipeGesture() {
  const swipeThreshold = 50; // 設定最小滑動距離
  if (touchEndX < touchStartX - swipeThreshold) {
    // 向左滑：下一張
    nextSlide();
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    // 向右滑：上一張
    prevSlide();
  }
}
