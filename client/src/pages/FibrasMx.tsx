/**
 * Independent FIBRAS.MX experience: educational dashboard, not a trading interface.
 * All visible market figures are labeled as illustrative reference data and should be
 * replaced by an authorized data source before production use.
 */
import { useMemo, useState } from "react";
import { BarChart3, BriefcaseBusiness, Calculator, ChevronDown, Download, Search, SlidersHorizontal, Sparkles } from "lucide-react";

const sectors = ["Todas", "Diversificado", "Industrial", "Comercial", "Hotelero", "Hipotecario", "Educativo", "Almacenaje", "Energía", "Infraestructura"];
const fibers = [
  { ticker: "FUNO", name: "Fibra Uno", sector: "Diversificado", price: "$29.35", change: "+1.07%", occupancy: "95.4%", yield: "7.88%", icon: "DV", tone: "red" },
  { ticker: "FIBRAPL", name: "Prologis", sector: "Industrial", price: "$74.51", change: "+1.17%", occupancy: "97.0%", yield: "5.21%", icon: "IN", tone: "amber" },
  { ticker: "FIBRAMQ", name: "Macquarie", sector: "Industrial", price: "$42.65", change: "−1.04%", occupancy: "96.0%", yield: "5.43%", icon: "IN", tone: "blue" },
  { ticker: "DANHOS", name: "Danhos", sector: "Comercial", price: "$28.45", change: "−0.21%", occupancy: "93.5%", yield: "6.43%", icon: "CO", tone: "pink" },
  { ticker: "FSHOP", name: "FShop", sector: "Comercial", price: "$11.95", change: "−0.25%", occupancy: "92.0%", yield: "—", icon: "CO", tone: "green" },
  { ticker: "FINN", name: "Fibra Inn", sector: "Hotelero", price: "$4.80", change: "+0.84%", occupancy: "68.0%", yield: "7.48%", icon: "HO", tone: "purple" },
  { ticker: "FIHO", name: "FibraHotel", sector: "Hotelero", price: "$7.52", change: "−1.83%", occupancy: "60.1%", yield: "8.11%", icon: "HO", tone: "teal" },
  { ticker: "FMTY", name: "Fibra Mty", sector: "Diversificado", price: "$14.23", change: "+0.64%", occupancy: "96.0%", yield: "8.02%", icon: "DV", tone: "orange" },
  { ticker: "FPLUS", name: "Fibra Plus", sector: "Diversificado", price: "$5.01", change: "−1.18%", occupancy: "93.1%", yield: "6.85%", icon: "DV", tone: "cyan" },
  { ticker: "NEXT", name: "Fibra Next", sector: "Industrial", price: "$2.26", change: "—", occupancy: "97.7%", yield: "—", icon: "EN", tone: "yellow" },
  { ticker: "FNOVA", name: "Fibra Nova", sector: "Industrial", price: "$41.72", change: "+0.14%", occupancy: "95.0%", yield: "5.42%", icon: "IN", tone: "slate" },
  { ticker: "FHIPO", name: "FHipo", sector: "Hipotecario", price: "$14.00", change: "+1.01%", occupancy: "—", yield: "10.04%", icon: "HI", tone: "rose" },
  { ticker: "EDUCA", name: "Educa", sector: "Educativo", price: "$54.00", change: "0.00%", occupancy: "98.0%", yield: "4.69%", icon: "ED", tone: "violet" },
  { ticker: "STORAGE", name: "Storage", sector: "Almacenaje", price: "$23.87", change: "0.00%", occupancy: "83.5%", yield: "—", icon: "AL", tone: "gray" },
  { ticker: "FCFE", name: "Fibra CFE", sector: "Energía", price: "$24.71", change: "−0.20%", occupancy: "—", yield: "8.54%", icon: "EN", tone: "gold" },
  { ticker: "TERRA", name: "Terrafina", sector: "Industrial", price: "$1.20", change: "—", occupancy: "95.8%", yield: "—", icon: "IN", tone: "brown" },
  { ticker: "FMX", name: "Fibra MX", sector: "Infraestructura", price: "$30.00", change: "−0.99%", occupancy: "—", yield: "—", icon: "IF", tone: "steel" },
];

const featureCards = [
  { icon: BarChart3, title: "Dashboard", copy: "Lee los indicadores principales del universo FIBRA y entiende qué significa cada dato.", href: "#explorar" },
  { icon: SlidersHorizontal, title: "Comparador", copy: "Contrasta sectores, ocupación y rendimiento histórico con una mirada educativa.", href: "/fibras-mx/comparador" },
  { icon: Calculator, title: "Calculadora", copy: "Explora escenarios hipotéticos sin convertirlos en una recomendación financiera.", href: "/fibras-mx/calculadora" },
  { icon: BriefcaseBusiness, title: "Portafolio", copy: "Organiza tus instrumentos observados y aprende a dar seguimiento a sus métricas.", href: "#explorar" },
];

export default function FibrasMx() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("Todas");
  const [showFilters, setShowFilters] = useState(false);
  const filtered = useMemo(() => fibers.filter((fiber) => {
    const matchesSector = sector === "Todas" || fiber.sector === sector;
    const normalized = query.toLowerCase().trim();
    return matchesSector && (!normalized || `${fiber.ticker} ${fiber.name} ${fiber.sector}`.toLowerCase().includes(normalized));
  }), [query, sector]);

  return <div className="mx-app">
    <header className="mx-header">
      <a href="/" className="mx-logo"><span />FIBRAS<span>.MX</span></a>
      <nav className="mx-nav" aria-label="Navegación FIBRAS.MX"><a className="mx-home-link" href="/">Inicio</a>
        <a className="active" href="/fibras-mx"><BarChart3 size={14} />FIBRAs</a>
        <a href="/fibras-mx/dashboard">Dashboard</a><a href="/fibras-mx/comparador">Comparador</a><a href="/fibras-mx/calculadora">Calculadora</a><a href="/fibras-mx/portafolio">Portafolio</a>
      </nav>
      <div className="mx-market"><i /> BMV · México <ChevronDown size={12} /></div>
    </header>
    <div className="mx-market-ticker" aria-label="Símbolos FIBRA"><div>{[...fibers, ...fibers].map((fiber, index) => <span key={`${fiber.ticker}-${index}`}><i />{fiber.ticker}</span>)}</div></div>

    <main className="mx-main">
      <section className="mx-intro"><div><p className="mx-kicker">Centro educativo · Datos de referencia</p><h1>Explora el universo<br /><em>FIBRAs.</em></h1><p className="mx-description">Una herramienta para conocer los fideicomisos de inversión inmobiliaria, comparar sus sectores y aprender a leer sus principales indicadores.</p></div><div className="mx-notice"><Sparkles size={15} /><span>Información con fines<br />educativos únicamente</span></div></section>
      <section className="mx-toolbar"><label className="mx-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar FIBRA por nombre o ticker…" aria-label="Buscar FIBRA" /></label><button className="mx-filter-toggle" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal size={15} /> Filtros</button></section>
      <section className={`mx-sector-tabs ${showFilters ? "open" : ""}`} aria-label="Filtrar por sector">{sectors.map((item) => <button key={item} className={sector === item ? "active" : ""} onClick={() => setSector(item)}>{item}</button>)}</section>

      <section className="mx-summary"><div><span>Universo observado</span><strong>{fibers.length}</strong><small>instrumentos de referencia</small></div><div><span>Yield promedio</span><strong>7.01<span>%</span></strong><small>dato orientativo, no recomendación</small></div><div><span>Última lectura</span><strong>BMV</strong><small>fuente que debe verificarse antes de usar</small></div></section>

      <section className="mx-feature-section" id="herramientas"><div className="mx-section-title"><div><p className="mx-kicker">Aprende con herramientas</p><h2>Entender antes<br /><em>de decidir.</em></h2></div><p>Recorre las herramientas para familiarizarte con el lenguaje del mercado inmobiliario cotizado.</p></div><div className="mx-feature-grid">{featureCards.map(({ icon: Icon, title, copy, href }) => <a href={href} className="mx-feature-card" key={title}><Icon size={21} /><h3>{title}</h3><p>{copy}</p><span>Explorar <span>↗</span></span></a>)}</div></section>

      <section className="mx-catalog" id="explorar"><div className="mx-catalog-head"><div><p className="mx-kicker">Catálogo educativo</p><h2>Explorar FIBRAs</h2></div><button className="mx-csv" type="button" title="Exportación disponible en una siguiente versión"><Download size={14} /> CSV <small>{filtered.length}</small></button></div><div className="mx-results-note">{filtered.length} FIBRAs visibles {query || sector !== "Todas" ? "con los filtros seleccionados" : "en el catálogo de referencia"}</div><div className="mx-card-grid">{filtered.map((fiber) => <a className="mx-fiber-link" href={`/fibras-mx/fibra/${fiber.ticker}`} key={fiber.ticker}><article className="mx-fiber-card"><div className={`mx-fiber-icon ${fiber.tone}`}>{fiber.icon}</div><div className="mx-card-top"><span className="mx-sector">{fiber.sector}</span><span className={fiber.change.startsWith("+") ? "positive" : fiber.change.startsWith("−") ? "negative" : "neutral"}>{fiber.change}</span></div><h3>{fiber.ticker}</h3><p className="mx-fiber-name">{fiber.name}</p><div className="mx-price"><strong>{fiber.price}</strong><span>MXN</span></div><div className="mx-card-stats"><span>Ocup. <b>{fiber.occupancy}</b></span><span>Yield <b>{fiber.yield}</b></span></div><div className="mx-card-footer"><span className="mx-educational">Referencia educativa</span><span className="mx-status">VER FICHA ↗</span></div></article></a>)}</div>{filtered.length === 0 && <div className="mx-empty">No encontramos una FIBRA con esos filtros. Prueba otro nombre o sector.</div>}</section>
    </main>
    <footer className="mx-footer"><span>FIBRAS<span>.MX</span> — Centro educativo sobre fideicomisos inmobiliarios</span><span>Datos de referencia · Verifica siempre las fuentes</span></footer>
  </div>;
}
