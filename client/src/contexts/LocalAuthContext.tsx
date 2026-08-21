import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { clearActiveNickname, getActiveNickname, hashPin, isValidPin, normalizeNickname, readAccounts, setActiveNickname, writeAccounts } from "@/lib/localAuth";

type AuthContextValue = { nickname: string | null; logout: () => void; requestLogin: () => void };
const AuthContext = createContext<AuthContextValue>({ nickname: null, logout: () => undefined, requestLogin: () => undefined });

export function useLocalAuth() { return useContext(AuthContext); }

export function LocalAuthGate({ children }: { children: ReactNode }) {
  const [nickname, setNickname] = useState<string | null>(() => getActiveNickname());
  const [loginOpen, setLoginOpen] = useState(false);
  const value = useMemo(() => ({ nickname, logout: () => { clearActiveNickname(); setNickname(null); }, requestLogin: () => setLoginOpen(true) }), [nickname]);
  return <AuthContext.Provider value={value}>{children}{loginOpen && !nickname && <LocalLoginPrompt onClose={() => setLoginOpen(false)} onSuccess={(user) => { setActiveNickname(user); setNickname(user); setLoginOpen(false); }} />}</AuthContext.Provider>;
}

function LocalLoginPrompt({ onClose, onSuccess }: { onClose: () => void; onSuccess: (nickname: string) => void }) {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [nicknameInput, setNicknameInput] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const submit = async () => {
    const user = normalizeNickname(nicknameInput);
    if (!user) return setError("Escribe un apodo para continuar.");
    if (!isValidPin(pin)) return setError("El PIN debe tener exactamente 6 números.");
    const accounts = readAccounts();
    const existing = accounts.find(account => account.nickname === user);
    const pinHash = await hashPin(pin);
    if (mode === "register") {
      if (existing) return setError("Ese apodo ya existe en este dispositivo.");
      writeAccounts([...accounts, { nickname: user, pinHash }]);
    } else if (!existing || existing.pinHash !== pinHash) return setError("Apodo o PIN incorrectos en este dispositivo.");
    const scopedFollowingKey = `fibras-mx-following:${user}`;
    const scopedPortfolioKey = `fibras-mx-portfolio:${user}`;
    if (!localStorage.getItem(scopedFollowingKey) && localStorage.getItem("fibras-mx-following")) localStorage.setItem(scopedFollowingKey, localStorage.getItem("fibras-mx-following") || "[]");
    if (!localStorage.getItem(scopedPortfolioKey) && localStorage.getItem("fibras-mx-portfolio")) localStorage.setItem(scopedPortfolioKey, localStorage.getItem("fibras-mx-portfolio") || "[]");
    onSuccess(user);
  };
  const press = (value: string) => { if (pin.length < 6) { setPin(current => current + value); setError(""); } };
  const remove = () => setPin(current => current.slice(0, -1));
  return <div className="local-auth-backdrop" role="dialog" aria-modal="true" aria-labelledby="local-auth-title"><section className="local-auth-card local-auth-card--prompt"><button className="local-auth-close" type="button" aria-label="Continuar sin registrarme" onClick={onClose}>×</button><div className="local-auth-brand"><span />FIBRAS<span>.MX</span></div><p className="mx-kicker">Espacio personal</p><h1 id="local-auth-title">Guarda tu avance.</h1><p className="local-auth-copy">Regístrate para seguir FIBRAs y guardar posiciones en este dispositivo. También puedes cerrar esta ventana y seguir explorando.</p><label className="local-auth-label">Apodo<input value={nicknameInput} onChange={event => { setNicknameInput(event.target.value); setError(""); }} maxLength={20} placeholder="Ej. InversionistaMX" autoComplete="off" /></label><div className="local-pin-label"><span>PIN de 6 dígitos</span><strong>{pin.split("").map((_, index) => <i key={index} />)}{Array.from({ length: 6 - pin.length }).map((_, index) => <em key={`empty-${index}`} />)}</strong></div><div className="local-keypad" aria-label="Teclado numérico"><button onClick={() => press("1")}>1</button><button onClick={() => press("2")}>2</button><button onClick={() => press("3")}>3</button><button onClick={() => press("4")}>4</button><button onClick={() => press("5")}>5</button><button onClick={() => press("6")}>6</button><button onClick={() => press("7")}>7</button><button onClick={() => press("8")}>8</button><button onClick={() => press("9")}>9</button><span /><button onClick={() => press("0")}>0</button><button className="local-keypad-delete" onClick={remove} aria-label="Borrar último dígito">⌫</button></div>{error && <p className="local-auth-error">{error}</p>}<button className="local-auth-submit" onClick={submit}>{mode === "login" ? "Desbloquear" : "Registrar dispositivo"}</button><button className="local-auth-switch" onClick={() => { setMode(current => current === "login" ? "register" : "login"); setPin(""); setError(""); }}>{mode === "login" ? "Crear un usuario local" : "Ya tengo un usuario"}</button><small className="local-auth-warning">Prueba local · sin servidor · la X permite continuar sin registro</small></section></div>;
}

export function ProtectedPortfolio({ children }: { children: ReactNode }) { return <>{children}</>; }
