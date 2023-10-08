function copyMenu() {
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML; 

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');

menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    addclass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function (e) {
    e.preventDefault();
    addclass.classList.remove('showmenu')
})

// show submenu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => {
    menu.addEventListener('click', toggle)
})

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => {
        item != this ? item.closest('.has-child').classList.remove('expand') : null;
    })
    if (this.closest('.has-child').classList != 'expand') {
        this.closest('.has-child').classList.toggle('expand')
    }
}

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function (e) {
    e.preventDefault();
    dptClass.classList.toggle('showdpt')
})

var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb
    }
});
// slider swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizo',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
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

