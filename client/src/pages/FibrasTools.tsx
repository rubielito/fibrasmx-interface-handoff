/**
 * Educational tool views inspired by the public FIBRAS.MX routes.
 * Results are illustrative and must not be presented as financial advice.
 */
import { useMemo, useState } from "react";
import { ArrowLeft, BarChart3, Calculator, Check, Plus, RefreshCw, SlidersHorizontal } from "lucide-react";

const options = [
  { ticker: "FUNO", name: "Fibra Uno", sector: "Diversificado", price: 29.35, yield: 7.88, dividend: 2.40, occupancy: 95.4 },
  { ticker: "FIBRAPL", name: "Fibra Prologis", sector: "Industrial", price: 74.51, yield: 5.21, dividend: 4.07, occupancy: 97.0 },
  { ticker: "FIBRAMQ", name: "Fibra Macquarie", sector: "Industrial", price: 42.65, yield: 5.43, dividend: 2.45, occupancy: 96.0 },
  { ticker: "DANHOS", name: "Fibra Danhos", sector: "Comercial", price: 28.45, yield: 6.43, dividend: 1.80, occupancy: 93.5 },
  { ticker: "FSHOP", name: "Fibra Shop", sector: "Comercial", price: 11.95, yield: 6.10, dividend: 0.67, occupancy: 92.0 },
  { ticker: "FINN", name: "Fibra Inn", sector: "Hotelero", price: 4.80, yield: 7.48, dividend: 0.36, occupancy: 68.0 },
  { ticker: "FIHO", name: "Fibra Hotel", sector: "Hotelero", price: 7.52, yield: 8.11, dividend: 0.60, occupancy: 60.1 },
  { ticker: "FMTY", name: "Fibra Monterrey", sector: "Diversificado", price: 14.23, yield: 8.02, dividend: 0.49, occupancy: 96.0 },
  { ticker: "FPLUS", name: "Fibra Plus", sector: "Diversificado", price: 5.01, yield: 6.85, dividend: 0.09, occupancy: 93.1 },
  { ticker: "NEXT", name: "Fibra Next", sector: "Industrial", price: 2.26, yield: 7.12, dividend: 2.26, occupancy: 97.7 },
  { ticker: "FNOVA", name: "Fibra Nova", sector: "Industrial", price: 41.72, yield: 5.42, dividend: 2.36, occupancy: 95.0 },
  { ticker: "FHIPO", name: "FHipo Hipotecaria", sector: "Hipotecario", price: 14.00, yield: 10.04, dividend: 1.42, occupancy: null },
  { ticker: "EDUCA", name: "Fibra Educa", sector: "Educativo", price: 54.00, yield: 4.69, dividend: 2.56, occupancy: 98.0 },
  { ticker: "STORAGE", name: "Fibra Storage", sector: "Almacenaje", price: 23.87, yield: 6.75, dividend: 2.42, occupancy: 83.5 },
  { ticker: "FCFE", name: "Fibra CFE", sector: "Energía", price: 24.71, yield: 8.54, dividend: 2.10, occupancy: null },
  { ticker: "TERRA", name: "Terrafina", sector: "Industrial", price: 1.20, yield: 6.12, dividend: 1.20, occupancy: 95.8 },
  { ticker: "FMX", name: "Fibra MX Infraestructura", sector: "Infraestructura", price: 30.00, yield: 5.90, dividend: 0.43, occupancy: null },
];

const money = (value: number) => `$${value.toLocaleString("es-MX", { maximumFractionDigits: 0 })}`;

function ToolHeader({ active }: { active: "comparador" | "calculadora" }) {
  return <header className="mx-header"><a href="/" className="mx-logo"><span />FIBRAS<span>.MX</span></a><nav className="mx-nav"><a className="mx-home-link" href="/">Inicio</a><a href="/fibras-mx"><BarChart3 size={14} />FIBRAs</a><a className={active === "comparador" ? "active" : ""} href="/fibras-mx/comparador">Comparador</a><a className={active === "calculadora" ? "active" : ""} href="/fibras-mx/calculadora">Calculadora</a></nav><div className="mx-market"><i /> BMV · México</div></header>;
}

export function Comparador() {
  const [selected, setSelected] = useState<string[]>([]);
  const [candidate, setCandidate] = useState("");
  const selectedFibers = selected.map((ticker) => options.find((item) => item.ticker === ticker)).filter(Boolean) as typeof options;
  const add = () => { if (candidate && selected.length < 3 && !selected.includes(candidate)) { setSelected([...selected, candidate]); setCandidate(""); } };
  return <div className="mx-app"><ToolHeader active="comparador" /><main className="mx-tool-main"><a className="mx-back" href="/fibras-mx"><ArrowLeft size={14} /> FIBRAs</a><p className="mx-kicker">Herramienta educativa</p><h1 className="mx-tool-title">Comparador</h1><p className="mx-tool-subtitle">Selecciona hasta 3 FIBRAs para revisar sus métricas lado a lado.</p><div className="mx-tool-actions"><select value={candidate} onChange={(event) => setCandidate(event.target.value)}><option value="">Añadir FIBRA</option>{options.filter((item) => !selected.includes(item.ticker)).map((item) => <option key={item.ticker} value={item.ticker}>{item.ticker} — {item.name}</option>)}</select><button className="mx-add-button" onClick={add}><Plus size={14} /> Añadir FIBRA</button>{selected.length > 0 && <button className="mx-reset" onClick={() => setSelected([])}><RefreshCw size={13} /> Limpiar</button>}</div>{selectedFibers.length === 0 ? <div className="mx-empty-tool"><SlidersHorizontal size={28} /><span>Selecciona FIBRAs para comenzar a comparar</span><small>La comparación muestra datos de referencia para aprender a leer un instrumento.</small></div> : <div className="mx-compare-table"><div className="mx-compare-labels"><span>Métrica</span><span>Referencia</span></div>{selectedFibers.map((fiber) => <div className="mx-compare-column" key={fiber.ticker}><div className="mx-compare-name"><strong>{fiber.ticker}</strong><small>{fiber.name}</small></div><div><span>Sector</span><b>{fiber.sector}</b></div><div><span>Precio observado</span><b>${fiber.price.toFixed(2)}</b></div><div><span>Yield orientativo</span><b>{fiber.yield.toFixed(2)}%</b></div><div><span>Ocupación</span><b>{fiber.occupancy ? `${fiber.occupancy}%` : "—"}</b></div><div className="mx-compare-note"><Check size={13} /> Referencia educativa</div></div>)}</div>}<p className="mx-disclaimer">Los datos mostrados son ilustrativos y pueden cambiar. Esta herramienta no constituye asesoría financiera ni recomendación de compra o venta.</p></main><ToolFooter /></div>;
}

export function Calculadora() {
  const [ticker, setTicker] = useState("FUNO");
  const [amount, setAmount] = useState(100000);
  const fiber = options.find((item) => item.ticker === ticker) ?? options[0];
  const certificates = Math.max(0, Math.floor(amount / fiber.price));
  const annual = certificates * fiber.dividend;
  const monthly = annual / 12;
  const projection = Array.from({ length: 5 }, (_, index) => { const factor = Math.pow(1 + fiber.yield / 100, index + 1); return { year: index + 1, dividend: annual * factor, total: amount + annual * factor }; });
  return <div className="mx-app"><ToolHeader active="calculadora" /><main className="mx-tool-main"><a className="mx-back" href="/fibras-mx"><ArrowLeft size={14} /> FIBRAs</a><p className="mx-kicker">Herramienta educativa</p><h1 className="mx-tool-title">Calculadora de Inversión</h1><p className="mx-tool-subtitle">Explora de forma hipotética cómo se relacionan monto, certificados y dividendos.</p><div className="mx-calc-layout"><section className="mx-params"><h2>Parámetros</h2><label>FIBRA<select value={ticker} onChange={(event) => setTicker(event.target.value)}>{options.map((item) => <option key={item.ticker} value={item.ticker}>{item.ticker} — {item.name} (${item.dividend.toFixed(2)}/cert.)</option>)}</select></label><label>Monto a observar (MXN)<input type="number" min="0" step="1000" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /></label><div className="mx-dividend-reference"><span>Dividendo por certificado</span><strong>${fiber.dividend.toFixed(2)} MXN/año</strong></div><p>Los valores son referencias educativas; no representan una promesa de rendimiento.</p></section><section className="mx-calc-results"><h2>Resultados proyectados</h2><div className="mx-result-grid"><div><span>Certificados</span><strong>{certificates.toLocaleString("es-MX")}</strong></div><div><span>Yield anual de referencia</span><strong>{fiber.yield.toFixed(1)}%</strong></div><div><span>Dividendo anual hipotético</span><strong>{money(annual)}</strong></div><div><span>Dividendo mensual promedio</span><strong>{money(monthly)}</strong></div></div><h3>Proyección a 5 años <small>(reinversión hipotética)</small></h3><div className="mx-projection">{projection.map((row) => <div key={row.year}><span>Año {row.year}</span><b>+{money(row.dividend)} <small>div.</small></b><strong>{money(row.total)}</strong></div>)}</div></section></div><p className="mx-disclaimer">Esta calculadora es exclusivamente educativa. No considera impuestos, comisiones, variaciones de precio ni cambios en dividendos. Verifica las fuentes antes de tomar cualquier decisión.</p></main><ToolFooter /></div>;
}

function ToolFooter() { return <footer className="mx-footer"><span>FIBRAS<span>.MX</span> — Centro educativo</span><span>Datos de referencia · Información sin fines de asesoría</span></footer>; }
