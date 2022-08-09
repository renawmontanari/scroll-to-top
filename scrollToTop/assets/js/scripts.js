
'use script'

const scroll = document.querySelector("#scroll");

scroll.addEventListener('click', () => {
    window.scroll ({
        top: 0,
        behavior: 'smooth'
    })
});

