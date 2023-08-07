window.addEventListener('DOMContentLoaded', (event) => {
  const element = document.getElementById('circle-java');
  // 一定の遅延後にvisibleクラスを追加
  setTimeout(() => {
      element.classList.add('visible');
  }, 500);  // 500ミリ秒後にアニメーション開始
});