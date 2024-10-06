window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const contentsEl = this.document.querySelector('header .contents');
    const menuEl = this.document.querySelector('header .menu');
    
    if (window.scrollY > 42) {
        header.style.top = '0'; // 스크롤 시 top을 0으로 변경
        contentsEl.style.top = '80px';
        menuEl.style.backgroundColor = 'black';
    } else {
        header.style.top = '42px'; // 스크롤이 위로 올라가면 다시 42px로 설정
        contentsEl.style.top = '122px';
        menuEl.style.backgroundColor = 'transparent';
    }
});
