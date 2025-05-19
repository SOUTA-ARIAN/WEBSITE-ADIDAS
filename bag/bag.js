function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.getElementById('cart-container');
    const totalDiv = document.getElementById('cart-total');
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center;font-size:1.2rem;">Keranjang kosong.</p>';
        totalDiv.innerHTML = '';
        return;
    }
    let html = '<table><tr><th>Produk</th><th>Harga</th><th>Qty</th><th>Total</th><th>Aksi</th></tr>';
    let grandTotal = 0;
    cart.forEach((item, idx) => {
        const priceNum = parseInt(item.price.replace(/\D/g, ''));
        const total = priceNum * item.qty;
        grandTotal += total;
        html += `<tr>
            <td>
                <img src="${item.img}" alt="${item.name}"><br>
                <span style="font-weight:600;">${item.name}</span><br><span style="font-size:0.95em;">Size: ${item.size}</span>
            </td>
            <td>Rp ${priceNum.toLocaleString()}</td>
            <td>
                <button class="qty-btn" onclick="updateQty(${idx}, -1)">-</button>
                <span style="font-weight:600;">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${idx}, 1)">+</button>
            </td>
            <td>Rp ${total.toLocaleString()}</td>
            <td><button class="remove-btn" onclick="removeItem(${idx})">Hapus</button></td>
        </tr>`;
    });
    html += '</table>';
    container.innerHTML = html;
    totalDiv.innerHTML = `Total Belanja: Rp ${grandTotal.toLocaleString()}`;
}

function updateQty(idx, delta) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[idx].qty += delta;
    if (cart[idx].qty < 1) cart[idx].qty = 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeItem(idx) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(idx, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Panggil saat halaman load
window.onload = renderCart;