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
const totalPages = 21;
let currentPage = 1;

function renderPageNumbers() {
    const pageNumbersDiv = document.getElementById('page-numbers');
    pageNumbersDiv.innerHTML = '';

    let startPage = currentPage;
    let endPage = currentPage + 4 <= totalPages ? currentPage + 4 : totalPages;

    if (endPage - startPage < 4) {
        startPage = endPage - 4 > 0 ? endPage - 4 : 1;
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.className = 'page-number' + (i === currentPage ? ' active' : '');
        pageNumber.textContent = i;
        pageNumber.onclick = () => {
            currentPage = i;
            updateNavButtons();
            renderPageNumbers();
        };
        pageNumbersDiv.appendChild(pageNumber);
    }
}

function updateNavButtons() {
    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = currentPage >= totalPages;
}

document.getElementById('prev').onclick = () => {
    if (currentPage > 1) {
        currentPage--;
        updateNavButtons();
        renderPageNumbers();
    }
};

document.getElementById('next').onclick = () => {
    if (currentPage < totalPages) {
        currentPage++;
        updateNavButtons();
        renderPageNumbers();
    }
};

// Инициализация слайдера
renderPageNumbers();
updateNavButtons();
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