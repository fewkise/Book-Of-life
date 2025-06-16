function toggleAnswer(index) {
    const answers = document.querySelectorAll('.faq-answer');
    const toggles = document.querySelectorAll('.toggle');

    // Скрываем все ответы и меняем знак на плюс
    answers.forEach((answer, i) => {
        if (i !== index) {
            answer.style.display = 'none';
            toggles[i].textContent = '+';
        }
    });

    const currentAnswer = document.getElementById(`answer-${index}`);
    const currentToggle = document.getElementById(`toggle-${index}`);

    // Переключаем видимость текущего ответа и знак
    if (currentAnswer.style.display === 'none' || currentAnswer.style.display === '') {
        currentAnswer.style.display = 'block';
        currentToggle.textContent = '-';
    } else {
        currentAnswer.style.display = 'none';
        currentToggle.textContent = '+';
    }
}
let openBurger = document.getElementById('openBurger');
        let closeBurger = document.getElementById('closeBurger');
        let burger = document.getElementById('burgerAll');
let uls = document.querySelectorAll('.uls');
        openBurger.addEventListener('click', () => {
            burger.classList.add('active'); // Добавляем класс
            document.body.classList.add('no-scroll'); // Отключаем скроллинг
            uls.forEach(uls => {
                uls.classList.add('active'); // Активируем анимацию на ul
            });
        });

        closeBurger.addEventListener('click', () => {
            burger.classList.remove('active'); // Убираем класс
            document.body.classList.remove('no-scroll'); // Включаем скроллинг
            uls.forEach(uls => {
                uls.classList.remove('active'); // Убираем анимацию при закрытии
            });
        });
