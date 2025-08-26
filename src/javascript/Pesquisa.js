// Seleção de elementos do DOM
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const allMovies = [
    //Filmes de Ação
    { title: "Alien", type: "Ação", link: "Ação_Alien.html"},
    { title: "Capitão América", type: "Ação", link: "Ação_Capitão_América.html"},
    { title: "Cassino Royale", type: "Ação", link: "Ação_Cassino_Royale.html"},
    { title: "Ip Man", type: "Ação", link: "Ação_Ip_Man.html"},
    { title: "Os Sete Samurais", type: "Ação", link: "Ação_Os_sete_samurais.html"},
    { title: "John Wick", type: "Ação", link: "Ação_John_Wick.html"},
    { title: "Guerra Sem Guerra", type: "Ação", link: "Ação_Guerra_Sem_Guerra.html"},
    { title: "Duro de Matar", type: "Ação", link: "Ação_Duro_de_Matar.html"},
    { title: "Furisa Mad Max", type: "Ação", link: "Ação_Furisa_Mad_Max.html"},
    { title: "Esquadrão 6", type: "Ação", link: "Ação_Esquadrão_6.html"},
    { title: "Veloses e Furiosos", type: "Ação", link: "Ação_Veloses_e_furiosos.html"},
    { title: "Inteligencia Central", type: "Ação", link: "Ação_Inteligencia_Central.html"},

    // Filmes de Aventura
    { title: "Jumanji", type: "Aventura", link: "Jumanji_filme_aventura.html" },
    { title: "A Cidade Perdida", type: "Aventura", link: "A_cidade_perdida_Aventura.html" },
    { title: "A Lenda de Tarzan", type: "Aventura", link: "A_lenda_de_tarzan_Aventura.html" },
    { title: "A Múmia", type: "Aventura", link: "A_Múmia_Aventura.html" },
    { title: "A Viagem 2", type: "Aventura", link: "A_viagem_2.html" },
    { title: "Drácula", type: "Aventura", link: "Dracula_Aventura.html" },
    { title: "Guardiões da Galáxia", type: "Aventura", link: "guardioes_da_galáxia_aventura.html" },
    { title: "Jack: O Caçador de Gigantes", type: "Aventura", link: "Jack_o_Caçador_de_Gigantes_Aventura.html" },
    { title: "Zathura", type: "Aventura", link: "Zathura_Aventura.html" },
    { title: "Percy Jackson", type: "Aventura", link: "percy_jackson_Aventura.html" },
    { title: "Ponte para Terabítia", type: "Aventura", link: "Ponte_para_terabítia_Aventura.html" },
    { title: "Peter Pan", type: "Aventura", link: "Peter_Pan_Aventura.html" },
    { title: "Rampage: Destruição Total", type: "Aventura", link: "Rampage_fora_de_controle_Aventura.html" },
    { title: "Uncharted", type: "Aventura", link: "Uncharted_Aventura.html" },
    { title: "O Predador", type: "Aventura", link: "O_predador_Aventura.html"},

    // Filmes de Animação
    { title: "A Bailarina", type: "Animação", link: "Animação - A Bailarina.html" },
    { title: "A Bela e a Fera", type: "Animação", link: "Animação - A Bela e a Fera.html" },
    { title: "A Caminho da Lua", type: "Animação", link: "Animação - A Caminho da Lua.html" },
    { title: "Aladdin", type: "Animação", link: "Animação - Aladdin.html" },
    { title: "Como Treinar o seu Dragão", type: "Animação", link: "Animação - Como Treinar o seu Dragão.html" },
    { title: "Coraline e o Mundo Secreto", type: "Animação", link: "Animação - Coraline.html" },
    { title: "Divertida Mente", type: "Animação", link: "Animação - Divertida Mente.html" },
    { title: "Enrolados", type: "Animação", link: "Animação - Enrolados.html" },
    { title: "Frozen: Uma aventura Congelante", type: "Animação", link: "Animação - Frozen.html" },
    { title: "O Rei Leão", type: "Animação", link: "Animação - O Rei Leão.html" },
    { title: "Rio", type: "Animação", link: "Animação - Rio.html" },
    { title: "Shrek", type: "Animação", link: "Animação - Shrek.html" },
    { title: "Sing: Quem canta Seus males espanta", type: "Animação", link: "Animação - Sing.html" },
    { title: "Trolls", type: "Animação", link: "Animação - Trolls.html" },
    { title: "Valente", type: "Animação", link: "Animação - Valente.html" },
    { title: "Viva a Vida é uma Festa", type: "Animação", link: "Animação - Viva.html" },
    
    // Filmes de Comédia
    { title: "17 Outra Vez", type: "Comédia", link: "17_outra_vez_Comédia.html" },
    { title: "A Fantástica Fábrica de Chocolate", type: "Comédia", link: "A_fantastica_fabrica_de_chocolate_Comédia.html" },
    { title: "As Branquelas", type: "Comédia", link: "As_branquelas_Comédia.html" },
    { title: "Barbie", type: "Comédia", link: "Barbie_Comédia.html" },
    { title: "Fala Sério, Mãe!", type: "Comédia", link: "Fala_serio_mae_Comédia.html" },
    { title: "Encantada", type: "Comédia", link: "Encantada_Comédia.html" },
    { title: "Meninas Malvadas", type: "Comédia", link: "Meninas_malvadas_Comédia.html" },
    { title: "Minha Mãe é uma Peça", type: "Comédia", link: "Minha_mae_e_uma_peca_Comédia.html" },
    { title: "Os Batutinhas", type: "Comédia", link: "Os_batutinhas_Comédia.html" },
    { title: "Os Caça Fantasmas", type: "Comédia", link: "Os_caca_fantasmas_Comédia.html" },
    { title: "Se Beber Não Case", type: "Comédia", link: "Se_beber_nao_case_Comédia.html" },
    { title: "Todo Poderoso", type: "Comédia", link: "Todo_poderoso_Comédia.html" },
    { title: "Tudo por um Pop Star", type: "Comédia", link: "Tudo_por_um_pop_star_Comédia.html" },
    { title: "Um Faz de Conta que Acontece", type: "Comédia", link: "Um_faz_de_conta_que_acontece_Comédia.html" },
    { title: "Cinderela Pop", type: "Comédia", link: "Cinderela_pop.html" },

    // Filmes de Romance
    { title: "A Casa do Lago", type: "Romance", link: "Romance - A Casa do Lago.html" },
    { title: "A Culpa é das Estrelas", type: "Romance", link: "Romance - A Culpa e das Estrelas.html" },
    { title: "Amor a Segunda Vista", type: "Romance", link: "Romance - Amor a Segunda Vista.html" },
    { title: "Cartas Para Julieta", type: "Romance", link: "Romance - Cartas Para Julieta.html" },
    { title: "Como eu Era Antes de Você", type: "Romance", link: "Romance - Como eu Era Antes de Voce.html" },
    { title: "De Repente é Amor", type: "Romance", link: "Romance - De Repente e Amor.html" },
    { title: "Diario da Nossa Paixão", type: "Romance", link: "Romance - Diario da Nossa Paixao.html" },
    { title: "La La Land: Cantando Estações", type: "Romance", link: "Romance - LaLaLand.html" },
    { title: "Mensagem Para Você", type: "Romance", link: "Romance - Mensagem Para Voce.html" },
    { title: "Orgulho e Preconceito", type: "Romance", link: "Romance - Orgulho e Preconceito.html" },
    { title: "Por lugares incríveis", type: "Romance", link: "Romance - Por Lugares Incriveis.html" },
    { title: "Questão de Tempo", type: "Romance", link: "Romance - Questao de Tempo.html" },
    { title: "Simplesmente Acontece", type: "Romance", link: "Romance - Simplesmente Acontece.html" },
    { title: "Titanic", type: "Romance", link: "Romance - Titanic.html" },
    { title: "Um amor para recordar", type: "Romance", link: "Romance - Um Amor Para Recordar.html" },

    // Filmes de Terror
    { title: "A Freira", type: "Terror", link: "A_freira_Terror.html" },
    { title: "A morte te dá parabéns", type: "Terror", link: "A_morte_te_da_parabéns_Terror.html" },
    { title: "A órfã", type: "Terror", link: "A_orfã_Terror.html" },
    { title: "Annabelle", type: "Terror", link: "Annabelle_Terror.html" },
    { title: "Bird Box", type: "Terror", link: "Bird_box_Terror.html" },
    { title: "Fale Comigo", type: "Terror", link: "Fale_comigo_Terror.html" },
    { title: "It a Coisa", type: "Terror", link: "It_a_coisa_Terror.html" },
    { title: "Megan", type: "Terror", link: "Megan_Terror.html" },
    { title: "Nunca diga seu nome", type: "Terror", link: "Nunca_diga_seu_nome_Terror.html" },
    { title: "O exorcismo de Emily Rose", type: "Terror", link: "O_exorcismo_de_Emily_Rose_Terror.html" },
    { title: "O poço", type: "Terror", link: "O_poço_Terror.html" },
    { title: "Telefone Preto", type: "Terror", link: "Telefone_preto_Terror.html" },
    { title: "Pearl", type: "Terror", link: "Pearl_Terror.html" },
    { title: "Terrifier", type: "Terror", link: "Terrrifier_Terror.html" },
    { title: "Uma noite de crime", type: "Terror", link: "Uma_noite_de_crime_Terror.html" },

];

// Função para mostrar resultados da pesquisa
function showSearchResults(searchTerm) {
    if (!searchResults) return;
    
    searchResults.innerHTML = '';
    
    if (!searchTerm || searchTerm.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const filteredMovies = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.type.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5);

    if (filteredMovies.length > 0) {
        searchResults.style.display = 'block';
        filteredMovies.forEach(movie => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.textContent = movie.title;
            div.addEventListener('click', () => {
                searchInput.value = movie.title;
                searchResults.style.display = 'none';
                window.location.href = movie.link;
            });
            searchResults.appendChild(div);
        });
    } else {
        // Mostra mensagem quando nenhum filme é encontrado
        searchResults.style.display = 'block';
        const noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'search-result-item no-results';
        noResultsDiv.innerHTML = `
            <i class='bx bx-error-circle'></i>
            <p>Desculpe, não encontramos "${searchTerm}" em nosso catálogo de filmes.</p>
        `;
        searchResults.appendChild(noResultsDiv);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    
    if (searchInput) {
        // Pesquisa em tempo real
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            showSearchResults(searchTerm);
        });

        // Pesquisa ao pressionar Enter
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.toLowerCase().trim();
                const movie = allMovies.find(m => 
                    m.title.toLowerCase() === searchTerm || 
                    m.type.toLowerCase() === searchTerm
                );
                if (movie) {
                    window.location.href = movie.link;
                } else {
                    showSearchResults(searchTerm); // Mostra mensagem de não encontrado
                }
            }
        });
    }

    // Fechar resultados ao clicar fora
    document.addEventListener('click', (e) => {
        if (searchBox && !searchBox.contains(e.target)) {
            if (searchResults) {
                searchResults.style.display = 'none';
            }
        }
    });
});