/* FIBRAS.MX keeps each public module and each educational instrument detail as a separate route. */
import type { ReactNode } from "react";
import FibrasMx from "./pages/FibrasMx";
import { Calculadora, Comparador } from "./pages/FibrasTools";
import { Dashboard, Portfolio } from "./pages/FibrasOverview";
import FibraDetail from "./pages/FibraDetail";
import PreviewEditorial from "./pages/PreviewEditorial";
import Home from "./pages/Home";
import { LocalAuthGate, ProtectedPortfolio } from "./contexts/LocalAuthContext";

export default function App() {
  const path = window.location.pathname;
  const render = (page: ReactNode) => <LocalAuthGate>{page}</LocalAuthGate>;
  if (path === "/fibras-mx/preview-editorial") return render(<PreviewEditorial />);
  if (path === "/recursos") return render(<Home />);
  if (path.startsWith("/fibras-mx/fibra/")) { const requested = new URLSearchParams(window.location.search).get("seccion"); const allowed = ["resumen","pagos","valuacion","ocupacion","videos","reportes"] as const; const section = allowed.includes(requested as typeof allowed[number]) ? requested as typeof allowed[number] : "resumen"; return render(<FibraDetail ticker={path.split("/").pop()?.toUpperCase() ?? "FUNO"} initialSection={section} />); }
  if (path === "/fibras-mx/dashboard") return render(<Dashboard />);
  if (path === "/fibras-mx/portafolio") return render(<ProtectedPortfolio><Portfolio /></ProtectedPortfolio>);
  if (path === "/fibras-mx/comparador") return render(<Comparador />);
  if (path === "/fibras-mx/calculadora") return render(<Calculadora />);
  if (path === "/fibras-mx" || path.startsWith("/fibras-mx/")) return render(<FibrasMx />);
  return render(<PreviewEditorial />);
}
