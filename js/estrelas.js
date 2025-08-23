document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const stars = starsContainer.querySelectorAll('i');

    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            // Remove a classe 'hover' de todas as estrelas
            stars.forEach(s => s.classList.remove('hover'));
            // Adiciona a classe 'hover' na estrela atual e nas anteriores
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('hover');
            }
        });
    });

    starsContainer.addEventListener('mouseleave', () => {
        stars.forEach(star => star.classList.remove('hover'));
    });

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = index + 1;
            starsContainer.setAttribute('data-rating', rating);
            starsContainer.classList.add('rated');

            // Remove a classe 'active' de todas
            stars.forEach(s => s.classList.remove('active'));

            // Adiciona a classe 'active' nas estrelas correspondentes à avaliação
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
            
            alert(`Você avaliou este filme com ${rating} estrela(s)!`);
        });
    });
});