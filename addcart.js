// Fungsi untuk menambah produk ke cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Cek apakah produk sudah ada di cart (berdasarkan id dan size)
    const found = cart.find(item => item.id === product.id && item.size === product.size);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({...product, qty: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produk masuk ke keranjang!');
}

// Pastikan script ini dijalankan setelah DOM siap
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('add-to-cart');
    if (btn) {
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'samba-og', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'LITERCOURT', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'court', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'ultraboost', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'adizero', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'bostom', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'F50', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'copa', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'plrpath', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
        btn.addEventListener('click', function() {
            // Ambil data produk dari halaman
            const product = {
                id: document.body.dataset.productId || 'advantage', // Ganti dengan cara ambil id produk yang benar
                name: document.getElementById('detail-title').textContent,
                price: document.getElementById('detail-price').textContent,
                img: document.getElementById('mainProductImage') ? document.getElementById('mainProductImage').src : document.getElementById('detail-img').src,
                // Mengambil nilai dari elemen select dengan id='size'
                size: document.getElementById('size') ? document.getElementById('size').value : 'ONE SIZE'
            };
            addToCart(product);
        });
    }
});
