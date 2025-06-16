const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
slidesPerView: 1,
spaceBetween: 50,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
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