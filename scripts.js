function toggleImage(element) {
    const img = element.querySelector('img');
    const fullSrc = img.getAttribute('data-full');
    const thumbSrc = img.getAttribute('src');

    if (img.classList.contains('full')) {
        img.classList.remove('full');
        img.setAttribute('src', thumbSrc);
    } else {
        img.classList.add('full');
        img.setAttribute('src', fullSrc);
    }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    // Здесь можно добавить код для отправки сообщения на сервер
});
