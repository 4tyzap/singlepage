function toggleImage(element) {
    const img = element.querySelector('img');
    const fullSrc = img.getAttribute('data-full');
    const overlay = document.getElementById('overlay');

    overlay.innerHTML = `<img src="${fullSrc}" alt="Full Image">`;
    overlay.classList.add('active');
}

function closeImage() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    overlay.innerHTML = '';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    // Здесь можно добавить код для отправки сообщения на сервер
});
