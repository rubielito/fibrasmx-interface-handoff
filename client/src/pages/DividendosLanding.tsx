import { useState, type FormEvent } from "react";
import { ArrowRight, BarChart3, BookOpen, CalendarDays, Check, ChevronDown, ExternalLink, Menu, ShieldCheck, Sparkles, X } from "lucide-react";

const products = [
  { icon: CalendarDays, eyebrow: "Gratis", title: "Calendario de dividendos", copy: "Consulta fechas estimadas, emisoras y pagos de empresas mexicanas en una vista simple.", action: "Abrir calendario", href: "/fibras-mx" },
  { icon: BarChart3, eyebrow: "En construcción", title: "Análisis de la bolsa mexicana", copy: "Una lectura editorial para entender empresas, sectores, FIBRAs y el contexto detrás de cada cifra.", action: "Ver catálogo FIBRAs", href: "/fibras-mx" },
  { icon: BookOpen, eyebrow: "Recursos", title: "Guías para invertir mejor", copy: "Material didáctico para aprender a leer distribuciones, valuación y reportes sin ruido.", action: "Explorar recursos", href: "/recursos" },
];

const upcoming = [
  ["FUNO11", "Fibra Uno", "15 oct", "$0.61"],
  ["FMTY14", "Fibra Mty", "23 oct", "$0.49"],
  ["FIBRAPL14", "Fibra Prologis", "31 oct", "$1.02"],
];

export default function DividendosLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return <div className="dividendos-site">
    <header className="dividendos-header">
      <a className="dividendos-logo" href="/" aria-label="Fibras MX inicio"><span className="dividendos-logo-mark">+</span><span>dividendos<span className="logo-dot">.</span></span></a>
      <button className="dividendos-menu" type="button" onClick={() => setMenuOpen(value => !value)} aria-label="Abrir menú">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      <nav className={menuOpen ? "dividendos-nav is-open" : "dividendos-nav"}>
        <a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a>
        <a href="#calendario" onClick={() => setMenuOpen(false)}>Calendario</a>
        <a href="#metodo" onClick={() => setMenuOpen(false)}>Cómo funciona</a>
        <a className="dividendos-nav-cta" href="/fibras-mx">Abrir plataforma <ArrowRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="dividendos-hero">
        <div className="dividendos-hero-copy">
          <p className="dividendos-kicker"><span /> Educación financiera · México</p>
          <h1>Invierte con más <em>contexto.</em></h1>
          <p className="dividendos-lead">Herramientas y contenidos para estudiar dividendos, FIBRAs y empresas mexicanas antes de tomar decisiones.</p>
          <div className="dividendos-actions"><a className="dividendos-button dividendos-button-primary" href="/fibras-mx">Explorar la plataforma <ArrowRight size={17} /></a><a className="dividendos-text-link" href="#productos">Conoce los recursos <ChevronDown size={16} /></a></div>
          <div className="dividendos-trust"><ShieldCheck size={17} /><span>Referencias educativas con fecha de actualización.<br /><b>No es asesoría financiera.</b></span></div>
        </div>
        <div className="dividendos-hero-art" aria-label="Vista previa de calendario de dividendos">
          <div className="dividendos-art-glow" /><div className="dividendos-art-card dividendos-art-card-main"><div className="art-card-top"><span>Calendario MX</span><span className="art-live"><i /> Actualizado</span></div><div className="art-big-number">$2.84 <small>por título</small></div><div className="art-mini-chart"><span style={{ height: "35%" }} /><span style={{ height: "51%" }} /><span style={{ height: "42%" }} /><span style={{ height: "68%" }} /><span style={{ height: "58%" }} /><span style={{ height: "88%" }} /><span style={{ height: "72%" }} /></div><div className="art-card-footer"><span>Próximos pagos</span><b>16 emisoras</b></div></div><div className="dividendos-art-card dividendos-art-card-float"><span>Yield promedio</span><strong>7.96%</strong><small>FIBRAs mexicanas</small></div><div className="dividendos-art-stamp">+<br /><span>MX</span></div>
        </div>
      </section>

      <section className="dividendos-proof"><div><strong>16</strong><span>FIBRAs en el catálogo</span></div><div><strong>2017</strong><span>Desde la primera planilla</span></div><div><strong>100%</strong><span>Enfoque educativo</span></div></section>

      <section className="dividendos-products" id="productos"><div className="dividendos-section-intro"><p className="dividendos-kicker"><span /> Un punto de partida</p><h2>Todo lo que necesitas<br /><em>para estudiar.</em></h2><p>Menos promesas. Más herramientas para comprender lo que estás viendo.</p></div><div className="dividendos-product-grid">{products.map(({ icon: Icon, eyebrow, title, copy, action, href }) => <article className="dividendos-product-card" key={title}><div className="product-icon"><Icon size={22} /></div><p className="product-eyebrow">{eyebrow}</p><h3>{title}</h3><p>{copy}</p><a href={href}>{action} <ArrowRight size={15} /></a></article>)}</div></section>

      <section className="dividendos-calendar" id="calendario"><div className="calendar-copy"><p className="dividendos-kicker"><span /> Próximamente · Octubre 2026</p><h2>El calendario que<br /><em>sí vas a usar.</em></h2><p>Una vista rápida para saber qué empresas tienen pagos próximos y después profundizar en cada ficha.</p><a className="dividendos-button dividendos-button-dark" href="/fibras-mx">Abrir calendario completo <ArrowRight size={16} /></a></div><div className="calendar-panel"><div className="calendar-panel-head"><div><span>PRÓXIMOS PAGOS</span><strong>Octubre 2026</strong></div><CalendarDays size={22} /></div>{upcoming.map(([ticker, name, date, payment]) => <a className="calendar-row" href={`/fibras-mx/fibra/${ticker}`} key={ticker}><span className="calendar-date">{date}</span><span><b>{ticker}</b><small>{name}</small></span><strong>{payment}</strong><ArrowRight size={15} /></a>)}<p className="calendar-note">Datos de referencia · Consulta fuentes oficiales</p></div></section>

      <section className="dividendos-method" id="metodo"><div><p className="dividendos-kicker"><span /> La forma de hacerlo</p><h2>Aprende antes de<br /><em>decidir.</em></h2></div><div className="method-list"><div><b>01</b><div><h3>Observa</h3><p>Identifica qué empresa, sector y tipo de activo estás revisando.</p></div><Check size={17} /></div><div><b>02</b><div><h3>Compara</h3><p>Contrasta pagos, ocupación y valuación con el mismo contexto.</p></div><Check size={17} /></div><div><b>03</b><div><h3>Verifica</h3><p>Regresa a la fuente oficial y revisa la fecha de cada referencia.</p></div><Check size={17} /></div></div></section>

      <section className="dividendos-newsletter"><Sparkles size={20} /><h2>Recibe nuevas herramientas<br />cuando estén listas.</h2><p>Una nota ocasional sobre dividendos, FIBRAs y educación financiera. Sin spam.</p>{submitted ? <div className="newsletter-success"><Check size={17} /> Gracias. Te avisaremos cuando haya novedades.</div> : <form onSubmit={submit}><input type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="tu@email.com" aria-label="Correo electrónico" required /><button type="submit">Suscribirme <ArrowRight size={16} /></button></form>}</section>
    </main>
    <footer className="dividendos-footer"><a className="dividendos-logo" href="/"><span className="dividendos-logo-mark">+</span><span>dividendos<span className="logo-dot">.</span></span></a><span>Herramientas para estudiar el mercado mexicano.</span><div><a href="/fibras-mx">Plataforma</a><a href="/recursos">Recursos</a><a href="#metodo">Método</a></div><small>© 2026 · No constituye asesoría financiera.</small></footer>
  </div>;
}
