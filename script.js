// PRODUCTS DATA
const products = [
  { id: 1, name: 'Artisan Leather Collar', brand: 'PawLux Heritage', price: 89, oldPrice: null, rating: 4.9, reviews: 234, emoji: 'img', image: 'https://tse2.mm.bing.net/th/id/OIP.7oqfQB52-yikLoLSgSMIYQHaE8?pid=Api&h=220&P=0', category: 'collars', bg: 'linear-gradient(135deg,#F4E8D0,#E8C07A)', accent: '#E8C07A', pet: 'dogs', description: 'Hand-burnished leather with soft padding and gold hardware for everyday elegance.', reviewsList: ['The leather is premium and feels comfortable on my pup.', 'I love the rich color and sturdy buckle. A great daily collar.', 'Perfect fit and the gold detail looks so luxurious.'] },
  { id: 2, name: 'Velvet Dream Cat Bed', brand: 'PawLux Comfort', price: 129, oldPrice: 159, rating: 4.8, reviews: 187, emoji: '🐱', image: 'https://tse1.mm.bing.net/th/id/OIP.Zv8CVx0R-DOQyGlx06zwJwHaJQ?pid=Api&h=220&P=0', category: 'beds', bg: 'linear-gradient(135deg,#E8D5F0,#C5A0D8)', accent: '#C5A0D8', pet: 'cats', description: 'A cloud-soft velvet bed designed for naps, warmth, and premium style.', reviewsList: ['My cat refuses to sleep anywhere else now.', 'Sturdy, soft, and easy to clean — exactly what I wanted.', 'The perfect cozy shape for curled-up cat naps.'] },
  { id: 3, name: 'Interactive Feather Wand', brand: 'PawPlay Co.', price: 34, oldPrice: null, rating: 4.7, reviews: 312, emoji: '🪶', image: 'https://tse1.mm.bing.net/th/id/OIP.PgqBXbGthkJA7uX9llfcogHaHV?pid=Api&h=220&P=0', category: 'toys', bg: 'linear-gradient(135deg,#D0ECE8,#8CC5BB)', accent: '#8CC5BB', pet: 'cats', description: 'A motion-activated feather wand made for energetic playtime and gentle claws.', reviewsList: ['My cat chases it for hours — so fun!', 'Durable and lightweight; the feathers are still intact after many sessions.', 'Finally a toy that keeps Luna active and happy.'] },
  { id: 4, name: 'Bamboo Double Bowl Set', brand: 'EcoPaw', price: 56, oldPrice: 70, rating: 4.9, reviews: 156, emoji: '🍽️', image: 'https://tse1.mm.bing.net/th/id/OIP.xUVJZDOpb_BsSiBJObs0EgHaHe?pid=Api&h=220&P=0', category: 'food', bg: 'linear-gradient(135deg,#FFE8D0,#FFB07A)', accent: '#FFB07A', pet: 'dogs', description: 'Eco-friendly bamboo bowls with a slip-resistant base and sleek finish.', reviewsList: ['Beautiful set and easy to wash.', 'My pup eats more neatly with these bowls.', 'Perfect size and the bamboo look is gorgeous.'] },
  { id: 5, name: 'All-Natural Grooming Kit', brand: 'PawLux Groom', price: 78, oldPrice: null, rating: 4.8, reviews: 98, emoji: '✂️', image: 'https://tse3.mm.bing.net/th/id/OIP.1Zep0o3lQKX8ILzK_vlmGgHaHa?pid=Api&h=220&P=0', category: 'grooming', bg: 'linear-gradient(135deg,#F4E8D0,#A8C5A0)', accent: '#A8C5A0', pet: 'dogs', description: 'A complete grooming kit with natural oils, brushes, and calming scent.', reviewsList: ['Great quality tools for my dog’s coat.', 'The shampoo smells amazing and leaves everything soft.', 'A lovely kit that makes grooming stress-free.'] },
  { id: 6, name: 'Cloud Ortho Dog Bed', brand: 'PawLux Comfort', price: 199, oldPrice: 249, rating: 5.0, reviews: 421, emoji: '🛏️', image: 'https://tse3.mm.bing.net/th/id/OIP.s8BDaUy3VkmVeCc6QOzxqQHaE8?pid=Api&h=220&P=0', category: 'beds', bg: 'linear-gradient(135deg,#D0E8FF,#A0B5D8)', accent: '#A0B5D8', pet: 'dogs', description: 'Memory-foam orthopedic support bed with cooling cover and luxury feel.', reviewsList: ['My senior dog sleeps so much better now.', 'Top-quality comfort and very supportive.', 'Worth every penny for the extra cushioning and softness.'] },
  { id: 7, name: 'Parrot Luxury Perch', brand: 'BirdVilla', price: 65, oldPrice: null, rating: 4.6, reviews: 67, emoji: '🦜', image: 'https://tse4.mm.bing.net/th/id/OIP.IjW7SqhPMn7jtTJdfqS5DwHaHa?pid=Api&h=220&P=0', category: 'toys', bg: 'linear-gradient(135deg,#E8FFD0,#B5D8A0)', accent: '#B5D8A0', pet: 'birds', description: 'A premium perch with textured grip and playful design for feathered friends.', reviewsList: ['Looks beautiful in my bird cage.', 'My parrot loves the smooth perch surface.', 'Stable, safe, and very attractive.'] },
  { id: 8, name: 'Retractable Leash Pro', brand: 'SafeWalk', price: 45, oldPrice: 55, rating: 4.7, reviews: 289, emoji: '🦮', image: 'https://tse2.mm.bing.net/th/id/OIP.BwdaV_to5Ld6ek_Cd8L58wHaHa?pid=Api&h=220&P=0', category: 'collars', bg: 'linear-gradient(135deg,#FFE8E8,#D8A0A0)', accent: '#D8A0A0', pet: 'dogs', description: 'Heavy-duty retractable leash with comfortable grip and secure lock.', reviewsList: ['Very sturdy and easy to use.', 'The leash retracts smoothly every time.', 'Great for long walks and city adventures.'] },
  { id: 9, name: 'Hamster Adventure Wheel', brand: 'TinyWild', price: 29, oldPrice: null, rating: 4.8, reviews: 143, emoji: '🐹', image: 'https://tse4.mm.bing.net/th/id/OIP.YV646EXb1wGLz3J2v3T_qQHaEK?pid=Api&h=220&P=0', category: 'toys', bg: 'linear-gradient(135deg,#FFF8D0,#D8C8A0)', accent: '#D8C8A0', pet: 'small', description: 'Silent running wheel with durable frame and fun motion for small pets.', reviewsList: ['Quiet and smooth — perfect for night time.', 'My hamster uses it all day long.', 'Very good build quality for the price.'] },
];

const cartItems = JSON.parse(localStorage.getItem('pawluxCart') || '{}');
const wishlist = new Set(JSON.parse(localStorage.getItem('pawluxWishlist') || '[]'));
const MAX_QUANTITY = 5;
let currentFilter = 'all';

function saveCart() {
  localStorage.setItem('pawluxCart', JSON.stringify(cartItems));
}

function saveWishlist() {
  localStorage.setItem('pawluxWishlist', JSON.stringify([...wishlist]));
}

function toggleWishlist(id, btn) {
  if (wishlist.has(id)) {
    wishlist.delete(id);
    btn.textContent = '🤍';
    btn.classList.remove('active');
    showToast('Removed from wishlist.');
  } else {
    wishlist.add(id);
    btn.textContent = '❤️';
    btn.classList.add('active');
    showToast('❤️ Added to wishlist!');
  }
  saveWishlist();
}

function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function updateCartCount() {
  const count = Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.textContent = count;
  badge.style.display = count ? 'inline-flex' : 'none';
}

function ensureToast() {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.innerHTML = '<span id="toastMsg"></span>';
    document.body.appendChild(toast);
  }
}

function showToast(msg) {
  ensureToast();
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

function goToCart() {
  window.location.href = 'cart.html';
}

function goToProduct(id) {
  window.location.href = `product.html?id=${id}`;
}

function addToCart(id) {
  const product = getProductById(id);
  if (!product) {
    showToast('⚠️ Product not found.');
    return;
  }
  const current = cartItems[id] || 0;
  if (current >= MAX_QUANTITY) {
    showToast(`⚠️ Maximum ${MAX_QUANTITY} of this item allowed.`);
    return;
  }
  cartItems[id] = current + 1;
  saveCart();
  updateCartCount();
  showToast(`🛒 ${product.name} added to your cart!`);
}

function orderNow(id) {
  addToCart(id);
  setTimeout(goToCart, 300);
}

function removeFromCart(id) {
  delete cartItems[id];
  saveCart();
  updateCartCount();
  renderCartPage();
}

function updateCartItem(id, delta) {
  if (!cartItems[id]) return;
  const next = cartItems[id] + delta;
  if (next <= 0) {
    removeFromCart(id);
    return;
  }
  if (next > MAX_QUANTITY) {
    showToast(`⚠️ You can only add ${MAX_QUANTITY} of this item.`);
    return;
  }
  cartItems[id] = next;
  saveCart();
  updateCartCount();
  renderCartPage();
}

function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" style="--hover-color:${p.accent}; animation: slideUp 0.6s ${i * 0.1}s ease both; opacity:0;" onclick="goToProduct(${p.id})">
      <div class="product-img">
        <div class="bg" style="background: ${p.bg}"></div>
        ${p.image ? `<img src="${p.image}" alt="${p.name}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover;" />` : `<div class="emoji">${p.emoji}</div>`}
        ${p.badge ? `<div class="product-badge-ribbon badge-${p.badge}">${p.badge === 'new' ? '✦ New' : p.badge === 'sale' ? '◆ Sale' : '🔥 Hot'}</div>` : ''}
        <button class="wishlist-btn ${wishlist.has(p.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)" title="Wishlist">
          ${wishlist.has(p.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-title">${p.name}</div>
        <div class="product-rating">
          <div class="stars">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5 - Math.round(p.rating))}</div>
          <div class="rating-count">${p.rating} (${p.reviews})</div>
        </div>
        <div class="product-footer">
          <div class="product-price-wrap">
            <span class="price-current">$${p.price}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">🛒 Add</button>
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.product-card').forEach((el, i) => {
    setTimeout(() => { el.style.opacity = ''; }, 50 + i * 100);
  });
}

function renderProductDetail() {
  const container = document.getElementById('productDetail');
  if (!container) return;
  const id = getQueryParam('id');
  const product = getProductById(id);
  if (!product) {
    container.innerHTML = '<div class="empty-state"><p>Product not found.</p></div>';
    return;
  }
  container.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail-info">
      <div class="product-detail-tag">${product.category.toUpperCase()}</div>
      <h1 class="product-detail-title">${product.name}</h1>
      <div class="product-detail-price">
        <div class="price-current">$${product.price}</div>
        ${product.oldPrice ? `<div class="price-old">$${product.oldPrice}</div>` : ''}
      </div>
      <p class="product-detail-description">${product.description}</p>
      <div class="product-detail-meta">
        <span>Rating: ${product.rating} / 5</span>
        <span>${product.reviews} reviews</span>
        <span>Max ${MAX_QUANTITY} per order</span>
      </div>
      <div class="product-detail-actions">
        <button class="btn-primary" onclick="addToCart(${product.id});">Add to Cart</button>
        <button class="btn-outline" onclick="orderNow(${product.id});">Order Now</button>
      </div>
      <div class="product-reviews">
        <div class="product-reviews-title">Customer Reviews</div>
        ${product.reviewsList.map(review => `
          <div class="review-card">
            <div class="review-stars">★★★★★</div>
            <div class="review-text">${review}</div>
            <div class="review-author">Verified customer</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCartPage() {
  const container = document.getElementById('cartItemsContainer');
  const summary = document.getElementById('cartSummary');
  if (!container || !summary) return;
  const items = Object.keys(cartItems).map(id => getProductById(id)).filter(Boolean);
  if (!items.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty right now.</p>
        <button class="btn-primary" onclick="window.location.href='shop.html'">Continue Shopping</button>
      </div>
    `;
    summary.innerHTML = '';
    return;
  }
  container.innerHTML = items.map(product => `
    <div class="cart-item">
      <div class="cart-thumb"><img src="${product.image}" alt="${product.name}"></div>
      <div class="cart-item-details">
        <div class="cart-item-title">${product.name}</div>
        <div class="cart-item-meta">${product.brand} · ${product.category}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartItem(${product.id}, -1)">−</button>
          <span>${cartItems[product.id]}</span>
          <button class="qty-btn" onclick="updateCartItem(${product.id}, 1)">+</button>
        </div>
        <button class="cart-remove" onclick="removeFromCart(${product.id})">Remove</button>
      </div>
      <div><strong>$${(product.price * cartItems[product.id]).toFixed(2)}</strong></div>
    </div>
  `).join('');
  const subtotal = items.reduce((sum, product) => sum + product.price * cartItems[product.id], 0);
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;
  summary.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><strong>$${subtotal.toFixed(2)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>$${shipping.toFixed(2)}</strong></div>
    <div class="summary-row summary-total"><span>Total</span><strong>$${total.toFixed(2)}</strong></div>
    <div class="cart-actions">
      <button class="btn-outline" onclick="clearCart()">Clear Cart</button>
      <button class="btn-primary" onclick="checkoutNow()">Checkout</button>
    </div>
  `;
}

function checkoutNow() {
  if (!Object.keys(cartItems).length) {
    showToast('Your cart is empty.');
    return;
  }
  window.location.href = 'checkout.html';
}

function clearCart() {
  Object.keys(cartItems).forEach(key => delete cartItems[key]);
  saveCart();
  updateCartCount();
  renderCartPage();
  showToast('Cart cleared.');
}

function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const content = marqueeItems.map(t => `<div class="marquee-item"><div class="marquee-dot"></div>${t}</div>`).join('');
  track.innerHTML = content + content;
}

function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function setupRevealObserver() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  revealElements.forEach(el => observer.observe(el));
}

function setupCursorHover() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!cursor || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
  document.querySelectorAll('button, a, .cat-card, .product-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '20px'; cursor.style.height = '20px';
      ring.style.width = '56px'; ring.style.height = '56px'; ring.style.opacity = '0.4';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '12px'; cursor.style.height = '12px';
      ring.style.width = '36px'; ring.style.height = '36px'; ring.style.opacity = '0.6';
    });
  });
}

function initPage() {
  updateCartCount();
  initMarquee();
  renderProducts(currentFilter);
  renderProductDetail();
  renderCartPage();
  setupRevealObserver();
  setupCursorHover();
}

initPage();
