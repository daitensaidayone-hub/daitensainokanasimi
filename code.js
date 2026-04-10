document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const overlay = document.getElementById('js-overlay');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // メニュー開閉の切り替え
  const toggleMenu = () => {
      document.body.classList.toggle('is_menuOpen');
  };

  // イベントリスナー
  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);
  
  // リンクをクリックしたらメニューを閉じる
  navLinks.forEach(link => {
      link.addEventListener('click', () => {
          if (document.body.classList.contains('is_menuOpen')) {
              toggleMenu();
          }
      });
  });
});