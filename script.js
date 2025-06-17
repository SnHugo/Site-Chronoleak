// Efeito de hover dinâmico
document.querySelectorAll('.personagem-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.personagem-img').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.personagem-img').style.transform = 'scale(1)';
    });
});

// Galeria de Imagens (Modal)
const imagens = document.querySelectorAll('.phase-grid img, .grid-galeria img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal img');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('ativo');
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('ativo');
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('ativo')) {
        modal.classList.remove('ativo');
    }
});