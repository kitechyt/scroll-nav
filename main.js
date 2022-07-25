document.addEventListener('DOMContentLoaded', () => {
    const headerNav = document.querySelector('.header-nav');

    const options = {
        rootMargin: "100% 0% 100% 0%",
        threshold: 1.0
    };

    const observer = new IntersectionObserver(entries => {
        for (entry of entries) {
            if (entry.isIntersecting) {
                // if entry (nav item) is on screen
                if (entry.target.classList.contains('first-nav-item')) {
                    headerNav.classList.remove('first-item-shadow');
                } else {
                    headerNav.classList.remove('last-item-shadow');
                }
            } else {
                // if entry (nav item) is NOT on screen
                if (entry.target.classList.contains('first-nav-item')) {
                    headerNav.classList.add('first-item-shadow');
                } else {
                    headerNav.classList.add('last-item-shadow');
                }
            }
        }
    }, options);

    observer.observe(document.querySelector('.first-nav-item'));
    observer.observe(document.querySelector('.last-nav-item'));

});