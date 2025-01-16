function toggleImage(element) {
    const img = element.querySelector('img');
    const fullSrc = img.getAttribute('data-full');
    const overlay = document.getElementById('overlay');
    const productFull = document.createElement('div');
    productFull.classList.add('product-full');
    productFull.innerHTML = `<img src="${fullSrc}" alt="Full Image">`;

    overlay.appendChild(productFull);
    overlay.classList.add('active');

    setTimeout(() => {
        productFull.classList.add('active');
    }, 0);
}

function closeImage() {
    const overlay = document.getElementById('overlay');
    const productFull = overlay.querySelector('.product-full');

    productFull.classList.remove('active');

    setTimeout(() => {
        overlay.classList.remove('active');
        overlay.innerHTML = '';
    }, 500); // Время анимации
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    // Здесь можно добавить код для отправки сообщения на сервер
});
