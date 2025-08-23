  const filmes = [
    { nome: "Oppenheimer", url: "html/filmes/filme1.html" },
    { nome: "Corra", url: "html/filmes/corra.html" },
    { nome: "Ilha do Medo", url: "html/filmes/ilhadomedo.html" },
    { nome: "Ilha dos Cachorros", url: "html/filmes/ilhadoscachorros.html" },
    { nome: "Um lugar silencioso", url: "html/filmes/lugarsilencioso.html" },
    { nome: "Tropa de Elite", url: "html/filmes/filme5.html" },
    { nome: "O sexto sentido", url: "html/filmes/sextosentido.html" },
    { nome: "Blade Runner", url: "html/filmes/filme2.html" },
    { nome: "Fallen Angels", url: "html/filmes/filme3.html" },
    { nome: "HER", url: "html/filmes/filme4.html" },
    { nome: "Breaking Bad", url: "html/series/serie2.html" },
    { nome: "Dexter", url: "html/series/serie5.html" },
    { nome: "How i met your mother", url: "html/series/serie4.html" },
    { nome: "The Office", url: "html/series/serie3.html" },
    { nome: "The Bear", url: "html/series/serie1.html" },
    { nome: "Apenas um show", url: "html/desenhos/desenho3.html" },
    { nome: "Avatar", url: "html/desenhos/desenho6.html" },
    { nome: "Ben 10", url: "html/desenhos/desenho5.html" },
    { nome: "Dragon Ball Z", url: "html/desenhos/desenho8.html" },
    { nome: "Hora de Aventura", url: "html/desenhos/desenho1.html" },
    { nome: "Jovens Titans", url: "html/desenhos/desenho10.html" },
    { nome: "One Piece", url: "html/desenhos/desenho7.html" },
    { nome: "Samurai Jack", url: "html/desenhos/desenho2.html" },
    { nome: "Scooby Doo", url: "html/desenhos/desenho9.html" },
    { nome: "Steven Universe", url: "html/desenhos/desenho4.html" }
  ];

  const input = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");
  const searchBtn = document.getElementById("searchBtn");

  // Mostrar sugestões filtradas ou todas
  function mostrarSugestoes(filtro = "") {
    suggestions.innerHTML = "";
    const filtrados = filmes.filter(f => f.nome.toLowerCase().includes(filtro.toLowerCase()));

    if (filtrados.length > 0) {
      filtrados.forEach(f => {
        const div = document.createElement("div");
        div.textContent = f.nome;
        div.addEventListener("click", () => {
          input.value = f.nome;
          suggestions.style.display = "none";
          window.location.href = f.url; // redireciona ao clicar na sugestão
        });
        suggestions.appendChild(div);
      });
      suggestions.style.display = "block";
    } else {
      suggestions.style.display = "none";
    }
  }

  // Mostrar todas ao focar
  input.addEventListener("focus", () => mostrarSugestoes());

  // Filtrar enquanto digita
  input.addEventListener("input", e => mostrarSugestoes(e.target.value));

  // Pesquisar ao clicar no botão
  searchBtn.addEventListener("click", () => {
    const filme = filmes.find(f => f.nome.toLowerCase() === input.value.toLowerCase());
    if (filme) {
      window.location.href = filme.url;
    } else {
      alert("Filme não encontrado!");
    }
  });

  // Pesquisar ao apertar ENTER
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });

  // Fechar sugestões ao clicar fora
  document.addEventListener("click", e => {
    if (!document.querySelector(".search-bar").contains(e.target)) {
      suggestions.style.display = "none";
    }
  });