(function () {
    pagination(false);

    function initFadeIn() {
        var fadeEls = document.querySelectorAll('.fade-in');

        if (!fadeEls.length) {
            return;
        }

        if (!('IntersectionObserver' in window)) {
            fadeEls.forEach(function (el) {
                el.classList.add('visible');
            });
            return;
        }

        document.documentElement.classList.add('js-animate');

        var observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {threshold: 0.2});

        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;

        fadeEls.forEach(function (el) {
            var rect = el.getBoundingClientRect();

            if (rect.top < viewportHeight * 0.9 && rect.bottom > 0) {
                el.classList.add('visible');
            } else {
                observer.observe(el);
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFadeIn);
    } else {
        initFadeIn();
    }
})();
