// Thumbnail click functionality
document.addEventListener('DOMContentLoaded', function() {
    const mainImg = document.querySelector('.main-image img');
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', function() {
        // Ganti gambar utama
        mainImg.src = this.getAttribute('data-img');
        // Highlight thumbnail terpilih
        thumbs.forEach(t => t.classList.remove('selected'));
        this.classList.add('selected');
      });
    });
  });