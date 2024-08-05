let currentIndex = 0;

        function moveCarousel() {
            const carousel = document.querySelector('.carousel');
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicators li');
            const itemWidth = items[0].clientWidth;

            currentIndex = (currentIndex + 1) % items.length;
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

            indicators.forEach(indicator => indicator.classList.remove('active'));
            indicators[currentIndex].classList.add('active');
        }

        function currentSlide(index) {
            const carousel = document.querySelector('.carousel');
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.carousel-indicators li');

            if (index >= 0 && index < items.length) {
                currentIndex = index;
                carousel.style.transform = `translateX(-${index * 100}%)`;

                indicators.forEach(indicator => indicator.classList.remove('active'));
                indicators[currentIndex].classList.add('active');
            }
        }

        setInterval(moveCarousel, 3000); // Cambia cada 3 segundos

        // Agrega listeners a los indicadores para que puedas ir a la diapositiva correspondiente cuando se haga clic en ellos.
        document.querySelectorAll('.carousel-indicators li').forEach((indicator, index) => {
            indicator.addEventListener('click', () => currentSlide(index));
        });