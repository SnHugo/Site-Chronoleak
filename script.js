        function scrollCarousel(direction) {
            const container = document.querySelector('.carousel-container');
            container.scrollBy({ left: direction * 300, behavior: 'smooth' });
        }

        function selectPersonagem(index) {
            const cards = document.querySelectorAll('.card');
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.toggle('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }
        

        // Expandir imagem da grid

        const imagens = document.querySelectorAll('.grid-galeria img');
        const modal = document.getElementById('modal');
        const modalImagem = document.getElementById('modal-img');


        imagens.forEach(img => {
            img.addEventListener('click', () => {
                modalImagem.src = img.src; 
                modal.classList.add('ativo');
            });
        });

        modal.addEventListener('click', () => {
            modal.classList.remove('ativo');
        });