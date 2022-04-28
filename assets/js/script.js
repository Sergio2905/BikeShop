const menuIcon = document.querySelector('.icon-menu');
const menuClose = document.querySelector('.icon-xmark');
const menu = document.querySelector('.menu');

if (menuIcon) {
    menuIcon.addEventListener('click', function (e) {
        menuIcon.classList.add("hide");
        menu.classList.add("active");
        document.body.classList.add("lock");
        e.preventDefault();
    })
}

if (menuClose) {
    menuClose.addEventListener('click', function (e) {
        menuIcon.classList.remove("hide");
        menu.classList.remove("active");
        document.body.classList.remove("lock");
        e.preventDefault();
    })
}


const menuLinks = document.querySelectorAll('.menu__link[data-target]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function (e) {
            const menuLink = e.target;
            if (menuLink.dataset.target && document.querySelector(menuLink.dataset.target)) {
                const targetBlock = document.querySelector(menuLink.dataset.target);
                const targetBlockValue = targetBlock.getBoundingClientRect().top + scrollY;

                if (menu.classList.contains('active')) {
                    document.body.classList.remove('lock');
                    menuIcon.classList.remove('hide');
                    menu.classList.remove('active');
                }

                window.scrollTo({
                    top: targetBlockValue,
                    behavior: "smooth"
                });
                e.preventDefault();
            }
        });
    });
}