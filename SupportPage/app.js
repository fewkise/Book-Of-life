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