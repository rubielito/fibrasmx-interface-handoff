import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowUpRight, BarChart3, ChevronDown, ExternalLink, Menu, Search, SlidersHorizontal } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const fibers = [
  { ticker: "AGRO22", name: "AgroFibra", sector: "Agroindustrial", price: 20.25, change: 0, volume: "1", high: "22.49", low: "20.25", yield: "—", tone: "olive" },
  { ticker: "DANHOS13", name: "Danhos", sector: "Comercial", price: 29.16, change: -0.24, volume: "35K", high: "32.14", low: "24.83", yield: "0.07%", tone: "blue" },
  { ticker: "EDUCA18", name: "Fibra Educa", sector: "Educativo", price: 52, change: 0, volume: "22", high: "59.01", low: "47.50", yield: "0.06%", tone: "violet" },
  { ticker: "FCFE18", name: "CFE Fibra E", sector: "Energía", price: 24.95, change: -0.12, volume: "189K", high: "25.50", low: "21.56", yield: "0.10%", tone: "amber" },
  { ticker: "FEXI21", name: "Fibra EXI", sector: "Infraestructura", price: 17.18, change: -3.97, volume: "95K", high: "21.00", low: "15.94", yield: "0.02%", tone: "red" },
  { ticker: "FHIPO14", name: "FHipo", sector: "Hipotecario", price: 14.10, change: 0, volume: "80", high: "15.24", low: "12.56", yield: "0.13%", tone: "teal" },
  { ticker: "FIBRAMQ12", name: "Fibra Macquarie", sector: "Industrial", price: 43.51, change: -0.34, volume: "4K", high: "47.00", low: "29.42", yield: "0.11%", tone: "slate" },
  { ticker: "FIBRAPL14", name: "Prologis", sector: "Industrial", price: 74, change: 0.35, volume: "92K", high: "89.13", low: "70.16", yield: "0.05%", tone: "cyan" },
  { ticker: "FIBRAUP18", name: "Upsite", sector: "Industrial", price: 35.80, change: -0.56, volume: "945", high: "41.00", low: "35.80", yield: "0.53%", tone: "orange" },
  { ticker: "FIHO12", name: "Fibra Hotel", sector: "Hotelero", price: 7.59, change: 0.53, volume: "3K", high: "8.55", low: "6.90", yield: "0.08%", tone: "pink" },
  { ticker: "FINN13", name: "Fibra Inn", sector: "Hotelero", price: 4.64, change: 1.53, volume: "9K", high: "5.78", low: "4.35", yield: "0.10%", tone: "green" },
  { ticker: "FMTY14", name: "Fibra Mty", sector: "Diversificado", price: 14.07, change: 0.21, volume: "405K", high: "16.20", low: "13.35", yield: "0.08%", tone: "yellow" },
  { ticker: "FNOVA17", name: "Fibra Nova", sector: "Industrial", price: 40.79, change: 0.27, volume: "5K", high: "40.79", low: "28.15", yield: "0.06%", tone: "brown" },
  { ticker: "FPLUS16", name: "Fibra Plus", sector: "Diversificado", price: 5.04, change: 0, volume: "424", high: "6.33", low: "4.82", yield: "—", tone: "purple" },
  { ticker: "FSHOP13", name: "Fibra Shop", sector: "Comercial", price: 11.82, change: -0.42, volume: "2K", high: "13.10", low: "7.90", yield: "0.08%", tone: "blue" },
  { ticker: "FUNO11", name: "Fibra Uno", sector: "Diversificado", price: 29.31, change: 0, volume: "433K", high: "32.62", low: "26.00", yield: "0.11%", tone: "red" },
  { ticker: "FVIA16", name: "Fibra E Vía", sector: "Infraestructura", price: 19.60, change: 0, volume: "2", high: "20.30", low: "18.43", yield: "0.09%", tone: "teal" },
  { ticker: "HCITY17", name: "HC", sector: "Hotelero", price: 5.30, change: -1.85, volume: "2K", high: "7.24", low: "4.85", yield: "—", tone: "gray" },
  { ticker: "NEXT25", name: "Fibra Next", sector: "Industrial", price: 96.50, change: 2.41, volume: "4K", high: "101.99", low: "89.55", yield: "0.07%", tone: "orange" },
  { ticker: "SOMA21", name: "Fibra SOMA", sector: "Diversificado", price: 47.99, change: 0, volume: "8", high: "55.00", low: "45.00", yield: "—", tone: "violet" },
  { ticker: "STORAGE18", name: "Fibra Storage", sector: "Almacenaje", price: 25.39, change: 0, volume: "3", high: "27.00", low: "23.79", yield: "0.04%", tone: "slate" },
  { ticker: "VESTA15", name: "Vesta", sector: "Industrial", price: 57.06, change: -1.25, volume: "270K", high: "64.47", low: "47.42", yield: "0.03%", tone: "blue" },
];

const history = [{ d: "L", v: 28.6 }, { d: "M", v: 29.1 }, { d: "X", v: 28.9 }, { d: "J", v: 29.5 }, { d: "V", v: 29.3 }, { d: "L", v: 29.8 }, { d: "M", v: 30.1 }, { d: "X", v: 29.6 }, { d: "J", v: 29.9 }, { d: "V", v: 30.3 }];
const news = ["Fibra Mty prepara segunda oferta de adquisición", "Consumo de fibra en México: el déficit que afecta la salud", "Términos de la potencial segunda OPA de Fibra Mty", "Fibra Mty busca autorización de la CNBV para una segunda OPA"];

function fmt(value: number) { return value.toFixed(2); }
function linkFor(ticker: string) { return `/fibras-mx/fibra/${ticker}`; }

export default function FibrasMx() {
  const [query, setQuery] = useState("");
  const [menu, setMenu] = useState(false);
  const filtered = useMemo(() => fibers.filter(f => `${f.ticker} ${f.name} ${f.sector}`.toLowerCase().includes(query.toLowerCase().trim())), [query]);
  const winners = [...fibers].filter(f => f.change > 0).sort((a, b) => b.change - a.change).slice(0, 5);
  const losers = [...fibers].filter(f => f.change < 0).sort((a, b) => a.change - b.change).slice(0, 5);
  return <div className="market-app">
    <header className="market-header"><a className="market-logo" href="/"><span className="market-logo-mark">F</span><span>Fibras <b>Inmobiliarias</b></span></a><button className="market-menu" onClick={() => setMenu(v => !v)} aria-label="Abrir menú"><Menu size={20} /></button><nav className={menu ? "market-nav open" : "market-nav"}><a href="/">Inicio</a><a href="#universo">FIBRAs</a><a href="/fibras-mx/comparador">Comparar</a><a href="#noticias">Noticias</a><a href="/fibras-mx/calculadora">Calculadora</a><a href="/fibras-mx/portafolio">Portafolio</a></nav><div className="market-status"><i /> Mercado mexicano <ChevronDown size={14} /></div></header>
    <div className="market-tape">{[...fibers.slice(0, 11), ...fibers.slice(0, 11)].map((f, i) => <a href={linkFor(f.ticker)} key={`${f.ticker}-${i}`}><b>{f.ticker}</b><span className={f.change >= 0 ? "up" : "down"}>{f.change >= 0 ? "+" : ""}{f.change.toFixed(2)}%</span></a>)}</div>
    <main>
      <section className="market-hero"><div><p className="market-eyebrow">Plataforma de análisis inmobiliario</p><h1>El universo de FIBRAs<br /><em>del mercado mexicano.</em></h1><p className="market-lead">Precios, fundamentales, distribuciones y noticias consolidadas en un solo lugar.</p></div><div className="market-hero-chart"><div className="chart-label"><span>FUNO11 · Último cierre</span><strong>$29.31</strong><small className="up">+0.00%</small></div><ResponsiveContainer width="100%" height={170}><AreaChart data={history}><defs><linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1f806b" stopOpacity={.35} /><stop offset="100%" stopColor="#1f806b" stopOpacity={0} /></linearGradient></defs><XAxis dataKey="d" hide /><YAxis hide domain={['dataMin - 1', 'dataMax + 1']} /><Tooltip contentStyle={{ background: "#102b26", border: 0, color: "#fff", borderRadius: 8 }} /><Area type="monotone" dataKey="v" stroke="#4fc0a2" strokeWidth={2.5} fill="url(#heroFill)" /></AreaChart></ResponsiveContainer></div></section>
      <section className="market-content-grid"><div className="market-main-column">
        <section className="market-panel winners-panel"><div className="market-panel-title"><div><p className="market-eyebrow">Sesión de mercado</p><h2>Ganadores y perdedores <em>del día</em></h2></div><span className="market-stale">● Datos de referencia</span></div><div className="market-movers"><div><h3 className="up">Ganadores</h3>{winners.map(f => <a href={linkFor(f.ticker)} key={f.ticker}><b>{f.ticker}</b><span>{f.name}</span><strong className="up">+{f.change.toFixed(2)}%</strong><ArrowUpRight size={14} /></a>)}</div><div><h3 className="down">Perdedores</h3>{losers.map(f => <a href={linkFor(f.ticker)} key={f.ticker}><b>{f.ticker}</b><span>{f.name}</span><strong className="down">{f.change.toFixed(2)}%</strong><ArrowDownRight size={14} /></a>)}</div></div></section>
        <section className="market-panel universe-panel" id="universo"><div className="market-panel-title"><div><p className="market-eyebrow">Catálogo completo</p><h2>Universo <em>FIBRAs</em></h2></div><label className="market-search"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Filtrar por ticker..." /></label></div><div className="market-count">{filtered.length} emisoras · BMV · MXN</div><div className="market-table-wrap"><table className="market-table"><thead><tr><th>Emisora</th><th>Precio</th><th>Var %</th><th>Volumen</th><th>Máx 52S</th><th>Mín 52S</th><th>Yield</th><th /></tr></thead><tbody>{filtered.map(f => <tr key={f.ticker}><td><a href={linkFor(f.ticker)} className="issuer"><span className={`issuer-logo ${f.tone}`}>{f.ticker.slice(0, 2)}</span><b>{f.ticker}</b><small>{f.name}</small></a></td><td className="price">{fmt(f.price)}</td><td className={f.change > 0 ? "up" : f.change < 0 ? "down" : "flat"}>{f.change > 0 ? "+" : ""}{f.change.toFixed(2)}%</td><td>{f.volume}</td><td>{f.high}</td><td>{f.low}</td><td>{f.yield}</td><td><a className="row-arrow" href={linkFor(f.ticker)} aria-label={`Ver ${f.ticker}`}><ArrowUpRight size={15} /></a></td></tr>)}</tbody></table></div></section>
      </div><aside className="market-sidebar"><section className="market-news" id="noticias"><div className="market-panel-title"><div><p className="market-eyebrow">Actualidad</p><h2>Noticias <em>recientes</em></h2></div><a href="#noticias"><ExternalLink size={15} /></a></div>{news.map((item, i) => <a className="news-item" href="#noticias" key={item}><span>0{i + 1}</span><div><b>{item}</b><small>Fuente editorial · hace {i + 1} días</small></div></a>)}</section><section className="market-side-card"><BarChart3 size={20} /><h3>Herramientas para analizar</h3><p>Compara indicadores y crea tu propia lectura del mercado mexicano.</p><a href="/fibras-mx/comparador">Abrir comparador <ArrowUpRight size={14} /></a></section></aside></section>
    </main><footer className="market-footer"><a className="market-logo" href="/"><span className="market-logo-mark">F</span><span>Fibras <b>Inmobiliarias</b></span></a><span>Datos de referencia · Verifica siempre las fuentes antes de usarlos</span><span>© 2026</span></footer>
  </div>;
}

export { fibers };
