document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');

    // Функция для получения списка файлов в папке img
    async function getProductFiles() {
        const response = await fetch('img/');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const links = doc.querySelectorAll('a');
        const files = [];

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href.endsWith('.png') || href.endsWith('.jpg')) {
                files.push(href);
            }
        });

        return files;
    }

    // Функция для создания продуктов
    async function createProducts() {
        const files = await getProductFiles();

        files.forEach(file => {
            const fileName = file.split('/').pop().replace(/\.[^/.]+$/, "");
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.setAttribute('onclick', 'toggleImage(this)');
            productDiv.innerHTML = `
                <img src="thumb/${fileName}-thumb.jpg" alt="${fileName}" data-full="img/${file}">
                <div class="overlay">
                    <p>${fileName}</p>
                </div>
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
        const minDimension = Math.min(window.innerWidth, window.innerHeight) - 20; // Учитываем поля
        const imgWidth = fullImg.naturalWidth;
        const imgHeight = fullImg.naturalHeight;

        let scale = 1;
        if (imgWidth > minDimension || imgHeight > minDimension) {
            scale = Math.min(minDimension / imgWidth, minDimension / imgHeight);
        }

        productFull.style.width = `${imgWidth * scale}px`;
        productFull.style.height = `${imgHeight * scale}px`;
        fullImg.style.transform = `scale(${scale})`;

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
