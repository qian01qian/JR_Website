document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-buttons button');
    const contents = document.querySelectorAll('.toggle-content .content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 切換按鈕的 active 狀態
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 切換內容顯示
            const targetContent = button.dataset.content;
            contents.forEach(content => {
                if (content.dataset.content === targetContent) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
