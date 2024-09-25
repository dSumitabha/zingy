document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('navbar');
    const scrollThreshold = 50; // Change this value as needed

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('bg-white');
            console.log('wihtin')
        } else {
            header.classList.remove('bg-white');
            console.log('out')
        }
    });
});
navbar