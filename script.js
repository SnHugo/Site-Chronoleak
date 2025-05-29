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