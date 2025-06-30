// 防止FOUC - 等待CSS載入完成再顯示頁面
(function() {
    'use strict';
    
    // 立即隱藏頁面
    document.documentElement.style.visibility = 'hidden';
    
    // 檢查CSS是否載入完成
    function checkCSSLoaded() {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        let loadedCount = 0;
        const totalLinks = links.length;
        
        if (totalLinks === 0) {
            showPage();
            return;
        }
        
        function onStyleSheetLoad() {
            loadedCount++;
            if (loadedCount >= totalLinks) {
                showPage();
            }
        }
        
        // 檢查已載入的樣式表
        links.forEach(function(link) {
            if (link.sheet && link.sheet.cssRules) {
                onStyleSheetLoad();
            } else {
                link.addEventListener('load', onStyleSheetLoad);
                link.addEventListener('error', onStyleSheetLoad); // 即使載入失敗也要顯示頁面
            }
        });
    }
    
    // 顯示頁面
    function showPage() {
        document.documentElement.style.visibility = 'visible';
        document.documentElement.classList.add('css-loaded');
        document.body.classList.add('ready');
    }
    
    // DOM準備就緒後檢查CSS
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', checkCSSLoaded);
    } else {
        checkCSSLoaded();
    }
    
    // 安全措施：最長等待3秒，避免永遠不顯示
    setTimeout(showPage, 3000);
    
})();
