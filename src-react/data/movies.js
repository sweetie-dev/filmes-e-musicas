const asset=(path)=>`https://raw.githubusercontent.com/sweetie-dev/filmes-e-musicas/main/${encodeURI(path)}`;
export const movies=[
{id:'zathura',title:'Zathura',genre:'Aventura',year:2005,poster:asset('src/Filmes_Aventura/Filme zathura/Zathura  - capa do filme aventura.png'),description:'Uma aventura espacial cheia de descobertas, perigos e imaginação.'},
{id:'furiosa',title:'Furiosa: Uma Saga Mad Max',genre:'Ação',year:2024,poster:asset('src/Filmes_ação/FILME FURIOSA MAD MAX/Furiosa mad max - capa do filme ação.png'),description:'Ação em alta velocidade em um mundo pós-apocalíptico.'},
{id:'a-freira',title:'A Freira',genre:'Terror',year:2018,poster:asset('src/Filmes_terror/filme A freira/A freira - capa do filme terror.png'),description:'Mistério e terror se encontram em uma investigação sombria.'},
{id:'as-branquelas',title:'As Branquelas',genre:'Comédia',year:2004,poster:asset('src/Filmes_comédia/filme As branquelas/As branquelas - capa filme comédia.png'),description:'Uma comédia cheia de disfarces e situações inesperadas.'},
{id:'titanic',title:'Titanic',genre:'Romance',year:1997,poster:asset('src/Filmes Romance/Filmes Titanic/Titanic - capa do filme romance.png'),description:'Um romance inesquecível a bordo do navio mais famoso da história.'},
{id:'coraline',title:'Coraline e o Mundo Secreto',genre:'Animação',year:2009,poster:asset('src/Filmes_animação/Filmes Coraline/Coraline  - capa do filme animação.png'),description:'Coraline encontra uma passagem para um mundo fascinante e assustador.'},
{id:'barbie',title:'Barbie',genre:'Comédia',year:2023,poster:asset('src/Filmes_comédia/filme Barbie/Barbie - capa do filme comédia.png'),description:'Uma jornada divertida entre Barbieland e o mundo real.'}
];
export const genres=['Todos','Ação','Animação','Aventura','Comédia','Romance','Terror'];