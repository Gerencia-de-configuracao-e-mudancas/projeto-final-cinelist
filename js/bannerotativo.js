document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DADOS DOS FILMES EM DESTAQUE ---
    // Adicione aqui os 3 filmes que você quer no carrossel.
    // É importante ter uma imagem de fundo (background) e um pôster (poster).
    const featuredMovies = [
        {
            title: 'Oppenheimer',
            link: 'html/filme1.html',
            poster: 'midia/filmes dos populares/Oppenheimer/teste1.jpg',
            background: 'black'
        },
        {
            title: 'Blade Runner 2049',
            link: 'html/filme2.html',
            poster: 'midia/filmes dos populares/Bladerunner2049/blade-runner-larga.jpg',
            background: 'black'
        }
    ];

    // --- 2. SELEÇÃO DOS ELEMENTOS DO HTML ---
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;
    let autoPlayInterval;

    // --- 3. FUNÇÃO PARA ATUALIZAR O SLIDE ---
    function updateSlide(index) {
        const movie = featuredMovies[index];

        // Adiciona um efeito de fade out
        heroContent.style.opacity = 0;

        setTimeout(() => {
            // Atualiza a imagem de fundo da seção hero
            heroSection.style.backgroundImage = `url('${movie.background}')`;

            // Atualiza o conteúdo dentro do hero-content
            heroContent.innerHTML = `
                <h2>Filmes em Destaque</h2>
                <div class="carousel">
                    <a href="${movie.link}">
                        <div class="carousel-item">
                            <img src="${movie.poster}" alt="Capa do filme ${movie.title}">
                            <h3>${movie.title}</h3>
                        </div>
                    </a>
                </div>
            `;

            // Adiciona um efeito de fade in
            heroContent.style.opacity = 1;

        }, 350); // Espera a transição de fade out terminar
    }

    // --- 4. FUNÇÕES DE NAVEGAÇÃO ---
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % featuredMovies.length;
        updateSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + featuredMovies.length) % featuredMovies.length;
        updateSlide(currentIndex);
    }

    // --- 5. LÓGICA DO AUTO-PLAY ---
    function startAutoPlay() {
        // Limpa qualquer intervalo anterior para evitar múltiplos timers
        clearInterval(autoPlayInterval);
        // Inicia o auto-play a cada 10 segundos (10000 milissegundos)
        autoPlayInterval = setInterval(showNextSlide, 10000);
    }

    // --- 6. EVENT LISTENERS PARA OS BOTÕES ---
    nextBtn.addEventListener('click', () => {
        showNextSlide();
        startAutoPlay(); // Reinicia o timer ao clicar
    });

    prevBtn.addEventListener('click', () => {
        showPrevSlide();
        startAutoPlay(); // Reinicia o timer ao clicar
    });

    // --- 7. INICIALIZAÇÃO DO CARROSSEL ---
    updateSlide(currentIndex); // Mostra o primeiro slide ao carregar a página

    startAutoPlay(); // Inicia o auto-play
});
