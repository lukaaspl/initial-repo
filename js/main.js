const link = document.querySelector('a');
const image = document.querySelector('img');

link.addEventListener('mouseover', () => image.classList.add('active'));
link.addEventListener('mouseout', () => image.classList.remove('active'));