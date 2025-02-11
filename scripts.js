document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');

    // Статический список файлов изображений
    const productFiles = [
        'product1.jpg',
        'product2.jpg',
        'product3.jpg',
        'product4.jpg',
        'product5.jpg',
        'product6.jpg',
        'product7.jpg',
        'product8.jpg',
        'product9.jpg',
        'no1.jpg',
        'no2.png',
        'product10.jpg'
    ];

    // Функция для создания продуктов
    function createProducts() {
        productFiles.forEach(file => {
            const fileName = file.split('/').pop().replace(/\.[^/.]+$/, "");
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('onclick', 'toggleImage(this)');
            productDiv.innerHTML = `
                <img src="thumb/${fileName}-thumb.jpg" alt="${fileName}" data-full="img/${file}">
                    <p>${fileName}</p>
            `;
            productGrid.appendChild(productDiv);
        });
    }

    createProducts();
});

function toggleImage(element) {
    const img = element.querySelector('img');
    const fullSrc = img.getAttribute('data-full');
    const overlay = document.getElementById('overlay');
    const productFull = document.createElement('div');
    productFull.classList.add('product-full');
    productFull.innerHTML = `<img src="${fullSrc}" alt="Full Image">`;

    overlay.appendChild(productFull);
    overlay.classList.add('active');

const fullImg = productFull.querySelector('img');
fullImg.onload = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imgWidth = fullImg.naturalWidth;
    const imgHeight = fullImg.naturalHeight;

    // Вычисляем коэффициенты масштабирования по ширине и высоте
    const scaleWidth = windowWidth / imgWidth;
    const scaleHeight = windowHeight / imgHeight;

    // Используем наименьший из коэффициентов
    const scale = Math.min(scaleWidth, scaleHeight, 1); // Ограничиваем масштаб до 1

    // Применяем масштабирование к контейнеру и изображению
    productFull.style.width = `${imgWidth * scale}px`;
    productFull.style.height = `${imgHeight * scale}px`;
    fullImg.style.width = `${imgWidth * scale}px`;
    fullImg.style.height = `${imgHeight * scale}px`;

        productFull.classList.add('active');
    };
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
