function leerMas(postId) {
    // 
    switch(postId) {
      case 1:
        window.location.href = 'blog-post-1.html'; 
        break;
      case 2:
        window.location.href = 'blog-post-2.html'; 
        break;
      case 3:
        window.location.href = 'blog-post-3.html'; 
        break;
      default:
        alert('Lo siento, no se encontró el post.');
    }
  }
  

  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
