import {useEffect,useMemo,useState} from 'react';
import {Link,Route,Routes,useParams} from 'react-router-dom';
import {Film,Home as HomeIcon,Search,Music2,ArrowLeft,Play,Star,ExternalLink,LoaderCircle} from 'lucide-react';
import {genres,movies} from './data/movies';

const raw=(path)=>'https://raw.githubusercontent.com/sweetie-dev/filmes-e-musicas/main/'+path.split('/').map(encodeURIComponent).join('/');
const absolute=(value)=>{if(!value)return null;if(/^https?:/i.test(value))return value;return raw(value.replace(/^\.\//,''));};

function useLegacyDetails(file){
 const [data,setData]=useState({loading:true});
 useEffect(()=>{let active=true;setData({loading:true});
 fetch(raw(file)).then(r=>r.text()).then(html=>{
  const doc=new DOMParser().parseFromString(html,'text/html');
  const headings=[...doc.querySelectorAll('.about-movie h2')];
  const synopsisHeading=headings.find(h=>/sinopse/i.test(h.textContent||''));
  const synopsis=synopsisHeading?.nextElementSibling?.textContent?.trim()||'';
  const video=absolute(doc.querySelector('video')?.getAttribute('src'));
  const tags=[...doc.querySelectorAll('.play-text .tags span')].map(x=>x.textContent.trim()).filter(Boolean);
  const originalTitle=[...doc.querySelectorAll('.play-text h3')].find(x=>/titulo original/i.test(x.textContent||''))?.nextElementSibling?.textContent?.trim()||'';
  const streaming=[...doc.querySelectorAll('.streaming-platforms a')].map(a=>({url:a.href,label:a.querySelector('img')?.alt||'Assistir'}));
  const soundtrackHeading=headings.find(h=>/trilha sonora do filme/i.test(h.textContent||''));
  let soundtrack=[];
  if(soundtrackHeading){const box=soundtrackHeading.nextElementSibling;soundtrack=[...(box?.querySelectorAll('.movie-box')||[])].map(x=>({title:x.querySelector('.movie-title')?.textContent?.trim()||'Faixa',subtitle:x.querySelector('.movie-type')?.textContent?.trim()||'',url:x.querySelector('a')?.href||null})).filter(x=>x.url);}
  if(active)setData({loading:false,synopsis,video,tags,originalTitle,streaming,soundtrack});
 }).catch(()=>active&&setData({loading:false,synopsis:'',streaming:[],soundtrack:[]}));
 return()=>{active=false};},[file]);
 return data;
}
function Header({query,setQuery}){return <header><Link className="brand" to="/"><span>M</span>&<span>M</span></Link><div className="search"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Pesquisar filmes..."/></div><nav><Link to="/"><HomeIcon size={18}/>Início</Link><a href="/#catalogo"><Film size={18}/>Filmes</a></nav></header>}
function Card({movie}){return <Link to={'/filme/'+movie.id} className="movie-card"><div className="poster-wrap">{movie.poster?<img src={movie.poster} alt={movie.title}/>:<div className="poster-fallback"><Film size={42}/><span>{movie.title}</span></div>}<span className="play"><Play fill="currentColor"/></span></div><h3>{movie.title}</h3><p>{movie.genre}</p></Link>}
function Home({query}){const[genre,setGenre]=useState('Todos');const filtered=useMemo(()=>movies.filter(m=>(genre==='Todos'||m.genre===genre)&&m.title.toLowerCase().includes(query.toLowerCase())),[genre,query]);return <><section className="hero"><div className="hero-copy"><span className="eyebrow"><Music2 size={16}/> CINEMA + TRILHAS SONORAS</span><h1>Filmes que você ama.<br/><em>Músicas que você não esquece.</em></h1><p>Descubra filmes, explore gêneros e reencontre as trilhas sonoras que marcaram cada história.</p><a href="#catalogo" className="primary"><Play size={18} fill="currentColor"/>Explorar catálogo</a></div><div className="hero-art"><div className="disc"><Music2/></div></div></section><section id="catalogo" className="catalog"><div className="section-title"><div><span>EXPLORE</span><h2>Catálogo de filmes</h2></div><p>{filtered.length} títulos encontrados</p></div><div className="chips">{genres.map(g=><button className={genre===g?'active':''} onClick={()=>setGenre(g)} key={g}>{g}</button>)}</div><div className="grid">{filtered.map(m=><Card movie={m} key={m.id}/>)}</div>{!filtered.length&&<div className="empty">Nenhum filme encontrado.</div>}</section></>}
function Details(){const{id}=useParams();const m=movies.find(x=>x.id===id);if(!m)return <main className="not-found"><h1>Filme não encontrado</h1><Link to="/">Voltar</Link></main>;return <MovieDetails movie={m}/>}
function MovieDetails({movie:m}){const d=useLegacyDetails(m.legacy);return <main className="details"><Link to="/" className="back"><ArrowLeft/>Voltar ao catálogo</Link><div className="details-grid">{m.poster?<img className="detail-poster" src={m.poster} alt={m.title}/>:<div className="detail-poster poster-fallback"><Film size={64}/><span>{m.title}</span></div>}<div><span className="eyebrow">{m.genre}</span><h1>{m.title}</h1><div className="meta">{d.tags?.map(x=><span key={x}>{x}</span>)}<span><Star size={16} fill="currentColor"/> M&M</span></div>{d.loading?<p className="loading"><LoaderCircle size={18}/> Carregando informações...</p>:<p className="synopsis">{d.synopsis||'Informações preservadas do catálogo original M&M.'}</p>}{d.originalTitle&&<p className="original-title">Título original: <strong>{d.originalTitle}</strong></p>}{d.streaming?.length>0&&<div className="streaming"><small>ONDE ASSISTIR</small><div>{d.streaming.map((x,i)=><a key={i} href={x.url} target="_blank" rel="noreferrer">{x.label}<ExternalLink size={14}/></a>)}</div></div>}</div></div>{d.video&&<section className="media-section"><div className="section-title"><div><span>ASSISTA</span><h2>Trailer</h2></div></div><video controls preload="metadata" src={d.video}/></section>}<section className="media-section"><div className="section-title"><div><span>OUÇA</span><h2>Trilha sonora</h2></div><Music2/></div>{d.loading?<p className="loading"><LoaderCircle size={18}/> Carregando trilha...</p>:d.soundtrack?.length?<div className="tracks">{d.soundtrack.map((x,i)=><a href={x.url} target="_blank" rel="noreferrer" className="track" key={i}><span className="track-number">{String(i+1).padStart(2,'0')}</span><div><strong>{x.title}</strong><small>{x.subtitle}</small></div><ExternalLink size={17}/></a>)}</div>:<p className="muted">Não há links de trilha sonora cadastrados nesta página antiga.</p>}</section></main>}
export default function App(){const[query,setQuery]=useState('');return <div><Header query={query} setQuery={setQuery}/><Routes><Route path="/" element={<Home query={query}/>}/><Route path="/filme/:id" element={<Details/>}/></Routes><footer><span>M&M</span><p>Filmes & Músicas · redescubra suas histórias favoritas.</p></footer></div>}