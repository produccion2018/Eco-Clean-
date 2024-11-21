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
  