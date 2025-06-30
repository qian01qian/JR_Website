# PowerShell 腳本 - 為所有HTML檔案添加防FOUC優化
$htmlFiles = @("env.html", "equiment.html", "org.html", "product.html", "promise.html", "qian.html", "security.html", "sop.html")

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "正在優化 $file..." -ForegroundColor Yellow
        
        # 讀取檔案內容
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # 添加防FOUC CSS到head中（在第一個stylesheet之前）
        if ($content -match '<link rel="stylesheet"' -and $content -notmatch 'anti-fouc.css') {
            $content = $content -replace '(<link rel="shortcut icon"[^>]*>)', '$1
    
    <!-- 防FOUC CSS - 必須最先載入 -->
    <link rel="stylesheet" href="css/anti-fouc.css">'
            
            # 添加內聯腳本到head結束前
            if ($content -notmatch 'document.documentElement.style.visibility') {
                $content = $content -replace '(</head>)', '    
    <!-- 防FOUC腳本 -->
    <script>
        document.documentElement.style.visibility = ''hidden'';
    </script>
$1'
            }
            
            # 在body開始後添加防FOUC腳本
            if ($content -notmatch 'anti-fouc.js') {
                $content = $content -replace '(<body[^>]*>)', '$1
    <!-- 載入防FOUC腳本 -->
    <script src="js/anti-fouc.js"></script>'
            }
            
            # 寫回檔案
            $content | Out-File $file -Encoding UTF8 -NoNewline
            Write-Host "$file 優化完成!" -ForegroundColor Green
        } else {
            Write-Host "$file 已經優化過或格式不符" -ForegroundColor Gray
        }
    } else {
        Write-Host "$file 不存在" -ForegroundColor Red
    }
}

Write-Host "所有HTML檔案優化完成!" -ForegroundColor Green
