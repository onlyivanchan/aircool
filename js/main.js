// 导航栏切换
function toggleNav() {
  const mn = document.getElementById('mn');
  mn.classList.toggle('open');
}

function closeNav() {
  const mn = document.getElementById('mn');
  mn.classList.remove('open');
}

// 图片预览功能
function openImagePreview(card) {
  const overlay = document.getElementById('imagePreview');
  const previewImg = document.getElementById('previewImage');
  
  // 获取卡片中的图片
  const img = card.querySelector('.color-img');
  
  // 设置预览内容
  previewImg.src = img.src;
  previewImg.alt = img.alt;
  
  // 显示预览
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeImagePreview(e) {
  // 如果事件存在且点击的不是 overlay 本身，则不关闭
  if (e && e.target.id !== 'imagePreview') {
    return;
  }
  
  const overlay = document.getElementById('imagePreview');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// 初始化图片预览事件监听
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('imagePreview');
  
  // 点击 overlay 背景关闭
  overlay.addEventListener('click', (e) => {
    if (e.target.id === 'imagePreview') {
      closeImagePreview();
    }
  });
  
  // 触摸事件支持（移动端）
  overlay.addEventListener('touchstart', (e) => {
    if (e.target.id === 'imagePreview') {
      closeImagePreview();
    }
  });
});

// ESC 键关闭预览
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImagePreview();
  }
});

// 滚动动画
const observerOptions = {
  threshold: 0.07,
  rootMargin: '0px 0px -36px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
    }
  });
}, observerOptions);

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 观察所有需要淡入的元素
  document.querySelectorAll('.fade').forEach((el, idx) => {
    el.style.transitionDelay = (idx % 4) * 0.08 + 's';
    observer.observe(el);
  });
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#contact') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 64;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // 点击外部关闭移动菜单
  document.addEventListener('click', e => {
    const n = document.getElementById('mn');
    if (!n.contains(e.target) && !e.target.closest('.hamburger')) {
      n.classList.remove('open');
    }
  });
  
  // 滚动时改变导航栏背景
  window.addEventListener('scroll', () => {
    document.getElementById('nb').style.background =
      window.scrollY > 60 ? 'rgba(8,8,8,.98)' : 'rgba(8,8,8,.92)';
  });
});
