/*****************************
 * Carousel 1：廠內設施 輪播 *
 *****************************/

// 取得 carousel1 內的 DOM 元素
const carousel1 = document.getElementById('carousel1');
const carouselInner1 = carousel1.querySelector('.carousel-inner');
const slides1 = carousel1.querySelectorAll('.carousel-slide');
const prevBtn1 = carousel1.querySelector('.carousel-button.prev');
const nextBtn1 = carousel1.querySelector('.carousel-button.next');

// 設定輪播參數
let currentIndex1 = 0;
const slideCount1 = slides1.length; // 包含複製的第一張
const actualSlideCount1 = slideCount1 - 1; // 原始幻燈片數量

const pauseDuration1 = 5000;       // 停留時間（毫秒）
const transitionDuration1 = 500;   // 過渡時間（毫秒）

// 更新幻燈片位置
function updateSlidePosition1() {
  carouselInner1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

// 自動播放
let autoPlayInterval1 = setInterval(nextSlide1, pauseDuration1 + transitionDuration1);

function nextSlide1() {
  currentIndex1++;
  carouselInner1.style.transition = `transform ${transitionDuration1}ms ease`;
  updateSlidePosition1();

  // 若到達複製的那張（最後一張），過渡結束後跳回第一張
  if (currentIndex1 === slideCount1 - 1) {
    setTimeout(() => {
      carouselInner1.style.transition = 'none';
      currentIndex1 = 0;
      updateSlidePosition1();
    }, transitionDuration1);
  }
}

function prevSlide1() {
  // 若在第一張，先跳到最後一張，再回到前一張
  if (currentIndex1 === 0) {
    carouselInner1.style.transition = 'none';
    currentIndex1 = actualSlideCount1;
    updateSlidePosition1();
    setTimeout(() => {
      carouselInner1.style.transition = `transform ${transitionDuration1}ms ease`;
      currentIndex1--;
      updateSlidePosition1();
    }, 20);
  } else {
    currentIndex1--;
    carouselInner1.style.transition = `transform ${transitionDuration1}ms ease`;
    updateSlidePosition1();
  }
}

// 按鈕點擊事件：手動切換時重置自動播放計時器
prevBtn1.addEventListener('click', () => {
  clearInterval(autoPlayInterval1);
  prevSlide1();
  autoPlayInterval1 = setInterval(nextSlide1, pauseDuration1 + transitionDuration1);
});

nextBtn1.addEventListener('click', () => {
  clearInterval(autoPlayInterval1);
  nextSlide1();
  autoPlayInterval1 = setInterval(nextSlide1, pauseDuration1 + transitionDuration1);
});

// 手勢滑動支援
let touchStartX1 = 0;
let touchEndX1 = 0;

carouselInner1.addEventListener('touchstart', (e) => {
  clearInterval(autoPlayInterval1);
  touchStartX1 = e.changedTouches[0].screenX;
});

carouselInner1.addEventListener('touchend', (e) => {
  touchEndX1 = e.changedTouches[0].screenX;
  handleSwipeGesture1();
  autoPlayInterval1 = setInterval(nextSlide1, pauseDuration1 + transitionDuration1);
});

function handleSwipeGesture1() {
  const swipeThreshold1 = 50; // 最小滑動距離
  if (touchEndX1 < touchStartX1 - swipeThreshold1) {
    // 向左滑：下一張
    nextSlide1();
  }
  if (touchEndX1 > touchStartX1 + swipeThreshold1) {
    // 向右滑：上一張
    prevSlide1();
  }
}


/******************************
 * Carousel 2：生產產線 輪播 *
 ******************************/

// 取得 carousel2 內的 DOM 元素
const carousel2 = document.getElementById('carousel2');
const carouselInner2 = carousel2.querySelector('.carousel-inner');
const slides2 = carousel2.querySelectorAll('.carousel-slide');
const prevBtn2 = carousel2.querySelector('.carousel-button.prev');
const nextBtn2 = carousel2.querySelector('.carousel-button.next');

// 設定輪播參數
let currentIndex2 = 0;
const slideCount2 = slides2.length; // 包含複製的第一張
const actualSlideCount2 = slideCount2 - 1; // 原始幻燈片數量

const pauseDuration2 = 5000;       // 停留時間（毫秒）
const transitionDuration2 = 500;   // 過渡時間（毫秒）

// 更新幻燈片位置
function updateSlidePosition2() {
  carouselInner2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

// 自動播放
let autoPlayInterval2 = setInterval(nextSlide2, pauseDuration2 + transitionDuration2);

function nextSlide2() {
  currentIndex2++;
  carouselInner2.style.transition = `transform ${transitionDuration2}ms ease`;
  updateSlidePosition2();

  // 若到達複製的那張（最後一張），過渡結束後跳回第一張
  if (currentIndex2 === slideCount2 - 1) {
    setTimeout(() => {
      carouselInner2.style.transition = 'none';
      currentIndex2 = 0;
      updateSlidePosition2();
    }, transitionDuration2);
  }
}

function prevSlide2() {
  // 若在第一張，先跳到最後一張，再回到前一張
  if (currentIndex2 === 0) {
    carouselInner2.style.transition = 'none';
    currentIndex2 = actualSlideCount2;
    updateSlidePosition2();
    setTimeout(() => {
      carouselInner2.style.transition = `transform ${transitionDuration2}ms ease`;
      currentIndex2--;
      updateSlidePosition2();
    }, 20);
  } else {
    currentIndex2--;
    carouselInner2.style.transition = `transform ${transitionDuration2}ms ease`;
    updateSlidePosition2();
  }
}

// 按鈕點擊事件：手動切換時重置自動播放計時器
prevBtn2.addEventListener('click', () => {
  clearInterval(autoPlayInterval2);
  prevSlide2();
  autoPlayInterval2 = setInterval(nextSlide2, pauseDuration2 + transitionDuration2);
});

nextBtn2.addEventListener('click', () => {
  clearInterval(autoPlayInterval2);
  nextSlide2();
  autoPlayInterval2 = setInterval(nextSlide2, pauseDuration2 + transitionDuration2);
});

// 手勢滑動支援
let touchStartX2 = 0;
let touchEndX2 = 0;

carouselInner2.addEventListener('touchstart', (e) => {
  clearInterval(autoPlayInterval2);
  touchStartX2 = e.changedTouches[0].screenX;
});

carouselInner2.addEventListener('touchend', (e) => {
  touchEndX2 = e.changedTouches[0].screenX;
  handleSwipeGesture2();
  autoPlayInterval2 = setInterval(nextSlide2, pauseDuration2 + transitionDuration2);
});

function handleSwipeGesture2() {
  const swipeThreshold2 = 50; // 最小滑動距離
  if (touchEndX2 < touchStartX2 - swipeThreshold2) {
    // 向左滑：下一張
    nextSlide2();
  }
  if (touchEndX2 > touchStartX2 + swipeThreshold2) {
    // 向右滑：上一張
    prevSlide2();
  }
}
